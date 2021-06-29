# [Redemption Arbitrage Bot](https://gitcoin.co/issue/liquity/beta/2/100025005)

This project contains code to arbitrage the ETH/LUSD rates on Uniswap and the redemption rate on Liquity.  It is designed for the Kovan testnet, however this can be adapted by changing the addresses in constants.ts.

## Improvements
I can now update this page as the competition has finished.  Since submitting, I have realized some improvements that could be made, notably:

    * Add a function to withdraw the LUSD balance of the contract (redemptions can give LUSD as a gas refund or your calculations can be incorrect and lead to some residual LUSD).
    * Instead of using low level Solidity calls, implement the TroveManager and UniswapPair interface types and use those.

## Design

It works by querying prices from the Uniswap pair and the Chainlink oracle every block.  If LUSD is sufficiently cheaper on Uniswap, then the bot will calculate how much would get by swapping ETH for LUSD on Uniswap after slippage.  It will then pass the result of that calculation into redeemLUSD.  We then generate the transaction data from these actions and pass it to our arbitrager smart contract.  This smart contract will transfer the specified amount of WETH to Uniswap, execute the swap for LUSD, then redeem the LUSD through the TroveManager contract.  It will also revert if the balance after execution is lower than the balance before to ensure that we do not lose money (except  gas) even if we are frontrun or if our transaction is included late.

## Run

First, install dependencies:

```
$ npm install
````

Due to a bug (?) in @liquity/lib-ethers, you need to run:

```
$ cp node_modules/@liquity/lib-ethers/deployments/default/kovan.json node_modules/@liquity/lib-ethers/dist/deployments/dev.json 
```

before running the code.

Next, deploy `contracts/Execute.sol` using Ethereum Remix.  Make sure to add some initial ETH to it or it will not be able to function.  Replace ARBITRAGE_CONTRACT_ADDRESS in constants.ts with the deployed address.

Once you have done that, you can run (using the private key of the address that deployed the contract):

```
$ ETHEREUM_PRIVATE_KEY=xxxx INFURA_KEY=xxxx npm start 
```

## Example Transactions
* [1 ETH -> 1.347690028871551156 ETH](https://kovan.etherscan.io/tx/0xbb670e2b63299afa3f30dadf1e9a747ae757fd3bc9a92e9ac777c906f84d1e88)
* [1 ETH -> 1.110662296953595004 ETH](https://kovan.etherscan.io/tx/0x317c0f9e5cef7aabd0ec641291a0475a84b0b913dc90f393adad8e40dba5d180)
* [1 ETH -> 1.087066932022935456 ETH](https://kovan.etherscan.io/tx/0x3ef08a6e071d46a825c6bc911768672b170e87be1c5e719fd6898afea1231230)
* [0.5 ETH -> 0.558586330216837967 ETH](https://kovan.etherscan.io/tx/0x09eafaa27ed27ddb4583df7cdd1b32433beb4556c919e915a6a12d4744528bc5)
* [0.5 ETH -> 0.557108222478151221 ETH](https://kovan.etherscan.io/tx/0xfe6518b36598a3f1467fd322edc3652a89d6cf282590d605b14083deb00eb53b)
# faulty-liquity-bot
