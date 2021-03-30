"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const process_1 = require("process");
const constants = __importStar(require("./constants"));
const lib_ethers_1 = require("@liquity/lib-ethers");
const lib_base_1 = require("@liquity/lib-base");
const util_1 = require("./util");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!process_1.env.INFURA_KEY) {
            console.log("Please provide a key for Infura.");
            return;
        }
        const provider = new ethers_1.providers.InfuraProvider("kovan", process_1.env.INFURA_KEY);
        if (!process_1.env.ETHEREUM_PRIVATE_KEY) {
            console.log("Please provide a private key environment variable as ETHEREUM_PRIVATE_KEY.");
            return;
        }
        const wallet = new ethers_1.Wallet(process_1.env.ETHEREUM_PRIVATE_KEY, provider);
        const liquity = yield lib_ethers_1.EthersLiquity.connect(wallet);
        const chainlinkProxy = new ethers_1.Contract(constants.CHAINLINK_ADDRESS, constants.CHAINLINK_ABI, provider);
        const uniswapPool = new ethers_1.Contract(constants.UNISWAP_PAIR_ADDRESS, constants.UNISWAP_PAIR_ABI, provider);
        const arbitrageContract = new ethers_1.Contract(constants.ARBITRAGE_CONTRACT_ADDRESS, constants.ARBITRAGE_CONTRACT_ABI, provider);
        const profitTxData = new Map();
        provider.on("block", (_) => __awaiter(this, void 0, void 0, function* () {
            const chainlinkPrice = (yield chainlinkProxy.functions.latestRoundData()).answer.mul(ethers_1.BigNumber.from(10).pow(18 - constants.CHAINLINK_DECIMALS));
            const chainlinkDollarPrice = chainlinkPrice.div(ethers_1.BigNumber.from(10).pow(18));
            console.log(`Chainlink ETH price in USD: ${chainlinkDollarPrice.toString()}`);
            const uniswapReserves = yield uniswapPool.functions.getReserves();
            if (!uniswapReserves["_reserve0"] || !uniswapReserves["_reserve1"]) {
                console.log("Received invalid reserves data from Uniswap");
                return;
            }
            const uniswapPrice = uniswapReserves["_reserve1"].div(uniswapReserves["_reserve0"]);
            console.log(`Uniswap ETH price in LUSD: ${uniswapPrice.toString()}`);
            profitTxData.clear();
            if (uniswapPrice.gt(chainlinkDollarPrice)) {
                const [fees, total] = yield Promise.all([liquity.getFees(), liquity.getTotal()]);
                var greatestProfit = ethers_1.BigNumber.from(0);
                yield Promise.all(constants.SWAP_AMOUNTS.map((ethStartAmount) => __awaiter(this, void 0, void 0, function* () {
                    const attemptedAmountLUSD = lib_base_1.Decimal.fromBigNumberString(util_1.getUniswapOut(uniswapReserves["_reserve0"], uniswapReserves["_reserve1"], ethStartAmount).toString());
                    const uniswapResult = yield uniswapPool.populateTransaction.swap(ethers_1.BigNumber.from(0), attemptedAmountLUSD.bigNumber, constants.ARBITRAGE_CONTRACT_ADDRESS, [], { gasLimit: 700000 });
                    const defaultMaxRedemptionRate = (amount) => lib_base_1.Decimal.min(fees.redemptionRate(amount.div(total.debt)).add(constants.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE), lib_base_1.Decimal.ONE);
                    const redeemedETH = attemptedAmountLUSD.div(lib_base_1.Decimal.fromBigNumberString(chainlinkPrice.toString()));
                    const redemptionFeeETH = redeemedETH.mul(defaultMaxRedemptionRate(attemptedAmountLUSD));
                    const redeemedNetETH = redeemedETH.sub(redemptionFeeETH);
                    const profit = ethers_1.BigNumber.from(redeemedNetETH.bigNumber).sub(ethStartAmount);
                    console.log(`Initial: ${ethers_1.utils.formatEther(ethStartAmount)} ETH; Uniswap Output: ${attemptedAmountLUSD} LUSD; Redeemed: ${redeemedETH} ETH; Net Redeemed: ${redeemedNetETH} ETH; Profit: ${ethers_1.utils.formatEther(profit)} ETH`);
                    if (profit.gt(greatestProfit)) {
                        try {
                            const redeemResult = yield liquity.populate.redeemLUSD(attemptedAmountLUSD, undefined, { gasLimit: 700000 });
                            if (redeemResult.attemptedLUSDAmount.eq(redeemResult.redeemableLUSDAmount)) {
                                profitTxData.set(profit.toString(), yield arbitrageContract.populateTransaction.MakeCalls(ethStartAmount, [uniswapResult["data"], redeemResult["rawPopulatedTransaction"]["data"]], { gasLimit: 700000 }));
                                greatestProfit = profit;
                            }
                        }
                        catch (_a) {
                            return;
                        }
                    }
                })));
                if (greatestProfit.gt(constants.PROFITABILITY_MINIMUM) && profitTxData.get(greatestProfit.toString())) {
                    console.log("Submitted Transaction!\nHash: " + (yield wallet.sendTransaction(profitTxData.get(greatestProfit.toString()))).hash);
                }
                else {
                    console.log("No profitable opportunities found");
                }
            }
            else {
                console.log("No arbitrage opportunity found.");
            }
            console.log("");
        }));
    });
}
main();
