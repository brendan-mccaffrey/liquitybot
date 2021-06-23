require('dotenv').config();

import { Contract, providers, utils, Wallet, BigNumber } from "ethers";
import { env } from "process";
import * as constants from "./constants";
import { EthersLiquity } from "@liquity/lib-ethers";
import { Decimal } from "@liquity/lib-base";
import { getUniswapOut } from "./util";

async function main() {
    console.log("Starting");
    if (!env.INFURA_KEY) {
        console.log("Please provide a key for Infura.");
        return;
    }
    const provider = new providers.InfuraProvider("homestead", env.INFURA_KEY);
    // const provider = new providers.JsonRpcProvider("http://localhost:8545");

    if (!env.ETHEREUM_PRIVATE_KEY) {
        console.log("Please provide a private key environment variable as ETHEREUM_PRIVATE_KEY.");
        return;
    }
    console.log("Creating wallet");
    const wallet = new Wallet(env.ETHEREUM_PRIVATE_KEY).connect(provider);
    console.log("Creating liquity client");
    const liquity = await EthersLiquity.connect(wallet);
    console.log("Creating Chainlink proxy");
    const chainlinkProxy = new Contract(constants.CHAINLINK_ADDRESS, constants.CHAINLINK_ABI, provider);
    console.log("Creating Uniswap pool");
    const uniswapPool = new Contract(constants.UNISWAP_PAIR_ADDRESS, constants.UNISWAP_PAIR_ABI, provider);
    console.log("Creating contract");
    const arbitrageContract = new Contract(constants.ARBITRAGE_CONTRACT_ADDRESS, constants.ARBITRAGE_CONTRACT_ABI, provider);
    const profitTxData = new Map();

    console.log("Beginning async process");
    provider.on('block', async (_) => {
        // make chainlink price have 18 decimals
        console.log("Querying price")
        const chainlinkPrice = (await chainlinkProxy.functions.latestRoundData()).answer.mul(BigNumber.from(10).pow(18 - constants.CHAINLINK_DECIMALS));
        console.log("Done querying price");
        const chainlinkDollarPrice = chainlinkPrice.div(BigNumber.from(10).pow(18));
        console.log(`Chainlink ETH price in USD: ${chainlinkDollarPrice.toString()}`);

        const uniswapReserves = await uniswapPool.functions.getReserves();
        if (!uniswapReserves["_reserve0"] || !uniswapReserves["_reserve1"]) {
            console.log("Received invalid reserves data from Uniswap");
            return;
        }
        const uniswapPrice = uniswapReserves["_reserve1"].div(uniswapReserves["_reserve0"]);
        console.log(`Uniswap ETH price in LUSD: ${uniswapPrice.toString()}`);

        profitTxData.clear();

        // if we get more lusd per eth on uniswap
        if (uniswapPrice.gt(chainlinkDollarPrice)) {
            const [fees, total] = await Promise.all([liquity.getFees(), liquity.getTotal()]);

            var greatestProfit: BigNumber = BigNumber.from(0);

            await Promise.all(
                constants.SWAP_AMOUNTS.map(async (ethStartAmount: BigNumber) => {
                    const attemptedAmountLUSD = Decimal.fromBigNumberString(getUniswapOut(uniswapReserves["_reserve0"], uniswapReserves["_reserve1"], ethStartAmount).toString());

                    const uniswapResult = await uniswapPool.populateTransaction.swap(BigNumber.from(0), attemptedAmountLUSD.bigNumber, constants.ARBITRAGE_CONTRACT_ADDRESS, [], { gasLimit: 700000 });

                    // calcualte redemption fee
                    const defaultMaxRedemptionRate = (amount: Decimal) => Decimal.min(fees.redemptionRate(amount.div(total.debt)).add(constants.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE), Decimal.ONE);

                    const redeemedETH = attemptedAmountLUSD.div(Decimal.fromBigNumberString(chainlinkPrice.toString()));
                    const redemptionFeeETH = redeemedETH.mul(defaultMaxRedemptionRate(attemptedAmountLUSD));
                    const redeemedNetETH = redeemedETH.sub(redemptionFeeETH);

                    const profit = BigNumber.from(redeemedNetETH.bigNumber).sub(ethStartAmount);
                    console.log(`Initial: ${utils.formatEther(ethStartAmount)} ETH; Uniswap Output: ${attemptedAmountLUSD} LUSD; Redeemed: ${redeemedETH} ETH; Net Redeemed: ${redeemedNetETH} ETH; Profit: ${utils.formatEther(profit)} ETH`);

                    if (profit.gt(greatestProfit)) {
                        // may fail if amount is too low so just silently error because it is not critical
                        try {
                            const redeemResult: any = await liquity.populate.redeemLUSD(attemptedAmountLUSD, undefined, { gasLimit: 700000 });
                            // if we don't have a partial redemption
                            if (redeemResult.attemptedLUSDAmount.eq(redeemResult.redeemableLUSDAmount)) {
                                profitTxData.set(profit.toString(), await arbitrageContract.populateTransaction.MakeCalls(ethStartAmount, [uniswapResult["data"], redeemResult["rawPopulatedTransaction"]["data"]], { gasLimit: 700000 }));
                                greatestProfit = profit;
                            }
                        } catch {
                            return;
                        }
                    }
                }),
            );
            // at 15 gwei an arbitrage costs approximately (15/1e9) * 600000 = 0.01 eth.  we require profit to be at least 0.02 eth because sometimes our fee calculations slightly underestimate the fee
            if (greatestProfit.gt(constants.PROFITABILITY_MINIMUM) && profitTxData.get(greatestProfit.toString())) {
                console.log("Submitted Transaction!\nHash: " + (await wallet.sendTransaction(profitTxData.get(greatestProfit.toString()))).hash);
            } else {
                console.log("No profitable opportunities found");
            }
        } else {
            console.log("No arbitrage opportunity found.");
        }
        // separator
        console.log("");
    });
}

main();
