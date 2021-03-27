## TODO: WE SHOULD CHECK FOR WHEN UNISWAP IS MORE EXPENSIVE NOT LESS

# [Redemption Arbitrage Bot](https://gitcoin.co/issue/liquity/beta/2/100025005)

This project contains code to arbitrage the ETH/LUSD rates on Uniswap and the redemption rate on Liquity.  It is designed for the Kovan testnet, however this can be adapted by changing the addresses in constants.ts.

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

Once you have done that, you can run:

```
$ ETHEREUM_PRIVATE_KEY=xxxx INFURA_KEY=xxxx npm start 
```
