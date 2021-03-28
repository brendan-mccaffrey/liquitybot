import { BigNumber } from "ethers";
import { Decimal } from "@liquity/lib-base";

export const CHAINLINK_DECIMALS = 8;
export const ONE_ETHER = BigNumber.from(10).pow(18);
//ensure we get in first
export const GAS_PRICE = BigNumber.from(10).pow(9).mul(15); // 15 gwei
export const PROFITABILITY_MINIMUM = ONE_ETHER.div(100).mul(2); // 0.02 eth
export const SWAP_AMOUNTS = [
    ONE_ETHER.div(3), // .3333
    ONE_ETHER.div(2), // 0.5
    ONE_ETHER.mul(1), // 1
    ONE_ETHER.mul(6).div(5), // 1.2
    ONE_ETHER.mul(2), // 2
];
export const LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE = Decimal.from(0.001); // 0.1%
export const LIQUITY_MAX_ITERATIONS = 70;
export const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

export const UNISWAP_PAIR_ADDRESS = "0xE99F8d6E64d039D06A20f0149E67BF8eB2e5b025";
export const UNISWAP_PAIR_ABI = [
    { inputs: [], payable: false, stateMutability: "nonpayable", type: "constructor" },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "owner", type: "address" },
            { indexed: true, internalType: "address", name: "spender", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "sender", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
        ],
        name: "Burn",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "sender", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount0", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "amount1", type: "uint256" },
        ],
        name: "Mint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "sender", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount0In", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "amount1In", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "amount0Out", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "amount1Out", type: "uint256" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
        ],
        name: "Swap",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: false, internalType: "uint112", name: "reserve0", type: "uint112" },
            { indexed: false, internalType: "uint112", name: "reserve1", type: "uint112" },
        ],
        name: "Sync",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
            { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "Transfer",
        type: "event",
    },
    { constant: true, inputs: [], name: "DOMAIN_SEPARATOR", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], payable: false, stateMutability: "view", type: "function" },
    { constant: true, inputs: [], name: "MINIMUM_LIQUIDITY", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
    { constant: true, inputs: [], name: "PERMIT_TYPEHASH", outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }], payable: false, stateMutability: "view", type: "function" },
    {
        constant: true,
        inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
        ],
        name: "allowance",
        outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "approve",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    { constant: true, inputs: [{ internalType: "address", name: "", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
    {
        constant: false,
        inputs: [{ internalType: "address", name: "to", type: "address" }],
        name: "burn",
        outputs: [
            { internalType: "uint256", name: "amount0", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    { constant: true, inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], payable: false, stateMutability: "view", type: "function" },
    { constant: true, inputs: [], name: "factory", outputs: [{ internalType: "address", name: "", type: "address" }], payable: false, stateMutability: "view", type: "function" },
    {
        constant: true,
        inputs: [],
        name: "getReserves",
        outputs: [
            { internalType: "uint112", name: "_reserve0", type: "uint112" },
            { internalType: "uint112", name: "_reserve1", type: "uint112" },
            { internalType: "uint32", name: "_blockTimestampLast", type: "uint32" },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "_token0", type: "address" },
            { internalType: "address", name: "_token1", type: "address" },
        ],
        name: "initialize",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    { constant: true, inputs: [], name: "kLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
    { constant: false, inputs: [{ internalType: "address", name: "to", type: "address" }], name: "mint", outputs: [{ internalType: "uint256", name: "liquidity", type: "uint256" }], payable: false, stateMutability: "nonpayable", type: "function" },
    { constant: true, inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], payable: false, stateMutability: "view", type: "function" },
    { constant: true, inputs: [{ internalType: "address", name: "", type: "address" }], name: "nonces", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
        ],
        name: "permit",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    { constant: true, inputs: [], name: "price0CumulativeLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
    { constant: true, inputs: [], name: "price1CumulativeLast", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
    { constant: false, inputs: [{ internalType: "address", name: "to", type: "address" }], name: "skim", outputs: [], payable: false, stateMutability: "nonpayable", type: "function" },
    {
        constant: false,
        inputs: [
            { internalType: "uint256", name: "amount0Out", type: "uint256" },
            { internalType: "uint256", name: "amount1Out", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
        ],
        name: "swap",
        outputs: [],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    { constant: true, inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], payable: false, stateMutability: "view", type: "function" },
    { constant: false, inputs: [], name: "sync", outputs: [], payable: false, stateMutability: "nonpayable", type: "function" },
    { constant: true, inputs: [], name: "token0", outputs: [{ internalType: "address", name: "", type: "address" }], payable: false, stateMutability: "view", type: "function" },
    { constant: true, inputs: [], name: "token1", outputs: [{ internalType: "address", name: "", type: "address" }], payable: false, stateMutability: "view", type: "function" },
    { constant: true, inputs: [], name: "totalSupply", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], payable: false, stateMutability: "view", type: "function" },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "transfer",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        constant: false,
        inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
        ],
        name: "transferFrom",
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
    },
];

export const CHAINLINK_ADDRESS = "0x9326BFA02ADD2366b30bacB125260Af641031331";
export const CHAINLINK_ABI = [
    {
        inputs: [
            { internalType: "address", name: "_aggregator", type: "address" },
            { internalType: "address", name: "_accessController", type: "address" },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "int256", name: "current", type: "int256" },
            { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "updatedAt", type: "uint256" },
        ],
        name: "AnswerUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
            { indexed: true, internalType: "address", name: "startedBy", type: "address" },
            { indexed: false, internalType: "uint256", name: "startedAt", type: "uint256" },
        ],
        name: "NewRound",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
        ],
        name: "OwnershipTransferRequested",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: "address", name: "from", type: "address" },
            { indexed: true, internalType: "address", name: "to", type: "address" },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    { inputs: [], name: "acceptOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "accessController", outputs: [{ internalType: "contract AccessControllerInterface", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "aggregator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [{ internalType: "address", name: "_aggregator", type: "address" }], name: "confirmAggregator", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "description", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }], name: "getAnswer", outputs: [{ internalType: "int256", name: "", type: "int256" }], stateMutability: "view", type: "function" },
    {
        inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
        name: "getRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }], name: "getTimestamp", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "latestAnswer", outputs: [{ internalType: "int256", name: "", type: "int256" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "latestRound", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    {
        inputs: [],
        name: "latestRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [], name: "latestTimestamp", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "owner", outputs: [{ internalType: "address payable", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [{ internalType: "uint16", name: "", type: "uint16" }], name: "phaseAggregators", outputs: [{ internalType: "contract AggregatorV2V3Interface", name: "", type: "address" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "phaseId", outputs: [{ internalType: "uint16", name: "", type: "uint16" }], stateMutability: "view", type: "function" },
    { inputs: [{ internalType: "address", name: "_aggregator", type: "address" }], name: "proposeAggregator", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "proposedAggregator", outputs: [{ internalType: "contract AggregatorV2V3Interface", name: "", type: "address" }], stateMutability: "view", type: "function" },
    {
        inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
        name: "proposedGetRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "proposedLatestRoundData",
        outputs: [
            { internalType: "uint80", name: "roundId", type: "uint80" },
            { internalType: "int256", name: "answer", type: "int256" },
            { internalType: "uint256", name: "startedAt", type: "uint256" },
            { internalType: "uint256", name: "updatedAt", type: "uint256" },
            { internalType: "uint80", name: "answeredInRound", type: "uint80" },
        ],
        stateMutability: "view",
        type: "function",
    },
    { inputs: [{ internalType: "address", name: "_accessController", type: "address" }], name: "setController", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [{ internalType: "address", name: "_to", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
    { inputs: [], name: "version", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
];

// export const ARBITRAGE_CONTRACT_ADDRESS = "0x98b644834392081e8b8478188d5ddc268dd9a586";
export const ARBITRAGE_CONTRACT_ADDRESS = "0x738eeb1c5710b701fdb408de071dc315de289b42";
export const ARBITRAGE_CONTRACT_ABI = [
    { inputs: [], stateMutability: "payable", type: "constructor" },
    {
        inputs: [
            { internalType: "uint256", name: "_wethAmount", type: "uint256" },
            { internalType: "bytes[2]", name: "_payloads", type: "bytes[2]" },
        ],
        name: "MakeCalls",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    { inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }], name: "withdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
    { stateMutability: "payable", type: "receive" },
];

export const LIQUITY_TROVE_MANAGER_ADDRESS = "0x47a2d855fa5b501612744Cb65973273822bb9614";
export const LIQUITY_TROVE_MANAGER_ABI = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_activePoolAddress",
                type: "address",
            },
        ],
        name: "ActivePoolAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_baseRate",
                type: "uint256",
            },
        ],
        name: "BaseRateUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_newBorrowerOperationsAddress",
                type: "address",
            },
        ],
        name: "BorrowerOperationsAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_collSurplusPoolAddress",
                type: "address",
            },
        ],
        name: "CollSurplusPoolAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_defaultPoolAddress",
                type: "address",
            },
        ],
        name: "DefaultPoolAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_gasPoolAddress",
                type: "address",
            },
        ],
        name: "GasPoolAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_lqtyStakingAddress",
                type: "address",
            },
        ],
        name: "LQTYStakingAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_lqtyTokenAddress",
                type: "address",
            },
        ],
        name: "LQTYTokenAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_L_ETH",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_L_LUSDDebt",
                type: "uint256",
            },
        ],
        name: "LTermsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_newLUSDTokenAddress",
                type: "address",
            },
        ],
        name: "LUSDTokenAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_lastFeeOpTime",
                type: "uint256",
            },
        ],
        name: "LastFeeOpTimeUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_liquidatedDebt",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_liquidatedColl",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_collGasCompensation",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_LUSDGasCompensation",
                type: "uint256",
            },
        ],
        name: "Liquidation",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_newPriceFeedAddress",
                type: "address",
            },
        ],
        name: "PriceFeedAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_attemptedLUSDAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_actualLUSDAmount",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_ETHSent",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_ETHFee",
                type: "uint256",
            },
        ],
        name: "Redemption",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_sortedTrovesAddress",
                type: "address",
            },
        ],
        name: "SortedTrovesAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_stabilityPoolAddress",
                type: "address",
            },
        ],
        name: "StabilityPoolAddressChanged",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_totalStakesSnapshot",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_totalCollateralSnapshot",
                type: "uint256",
            },
        ],
        name: "SystemSnapshotsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_newTotalStakes",
                type: "uint256",
            },
        ],
        name: "TotalStakesUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_newIndex",
                type: "uint256",
            },
        ],
        name: "TroveIndexUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_debt",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_coll",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum TroveManager.TroveManagerOperation",
                name: "_operation",
                type: "uint8",
            },
        ],
        name: "TroveLiquidated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "_L_ETH",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_L_LUSDDebt",
                type: "uint256",
            },
        ],
        name: "TroveSnapshotsUpdated",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_debt",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_coll",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "_stake",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "enum TroveManager.TroveManagerOperation",
                name: "_operation",
                type: "uint8",
            },
        ],
        name: "TroveUpdated",
        type: "event",
    },
    {
        inputs: [],
        name: "BETA",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "BOOTSTRAP_PERIOD",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "BORROWING_FEE_FLOOR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "CCR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "DECIMAL_PRECISION",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "LUSD_GAS_COMPENSATION",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "L_ETH",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "L_LUSDDebt",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MAX_BORROWING_FEE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MCR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MINUTE_DECAY_FACTOR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "MIN_NET_DEBT",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "PERCENT_DIVISOR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "REDEMPTION_FEE_FLOOR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "SECONDS_IN_ONE_MINUTE",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "TroveOwners",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "Troves",
        outputs: [
            {
                internalType: "uint256",
                name: "debt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "coll",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "stake",
                type: "uint256",
            },
            {
                internalType: "enum TroveManager.Status",
                name: "status",
                type: "uint8",
            },
            {
                internalType: "uint128",
                name: "arrayIndex",
                type: "uint128",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "_100pct",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "activePool",
        outputs: [
            {
                internalType: "contract IActivePool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "addTroveOwnerToArray",
        outputs: [
            {
                internalType: "uint256",
                name: "index",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "applyPendingRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "baseRate",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address[]",
                name: "_troveArray",
                type: "address[]",
            },
        ],
        name: "batchLiquidateTroves",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "borrowerOperationsAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_price",
                type: "uint256",
            },
        ],
        name: "checkRecoveryMode",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "closeTrove",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decayBaseRateFromBorrowing",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_collDecrease",
                type: "uint256",
            },
        ],
        name: "decreaseTroveColl",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_debtDecrease",
                type: "uint256",
            },
        ],
        name: "decreaseTroveDebt",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "defaultPool",
        outputs: [
            {
                internalType: "contract IDefaultPool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_LUSDDebt",
                type: "uint256",
            },
        ],
        name: "getBorrowingFee",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_LUSDDebt",
                type: "uint256",
            },
        ],
        name: "getBorrowingFeeWithDecay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getBorrowingRate",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getBorrowingRateWithDecay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_price",
                type: "uint256",
            },
        ],
        name: "getCurrentICR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "getEntireDebtAndColl",
        outputs: [
            {
                internalType: "uint256",
                name: "debt",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "coll",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "pendingLUSDDebtReward",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "pendingETHReward",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getEntireSystemColl",
        outputs: [
            {
                internalType: "uint256",
                name: "entireSystemColl",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getEntireSystemDebt",
        outputs: [
            {
                internalType: "uint256",
                name: "entireSystemDebt",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "getNominalICR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "getPendingETHReward",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "getPendingLUSDDebtReward",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_ETHDrawn",
                type: "uint256",
            },
        ],
        name: "getRedemptionFeeWithDecay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRedemptionRate",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getRedemptionRateWithDecay",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_price",
                type: "uint256",
            },
        ],
        name: "getTCR",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "getTroveColl",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "getTroveDebt",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_index",
                type: "uint256",
            },
        ],
        name: "getTroveFromTroveOwnersArray",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "getTroveOwnersCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "getTroveStake",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "getTroveStatus",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "hasPendingRewards",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_collIncrease",
                type: "uint256",
            },
        ],
        name: "increaseTroveColl",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_debtIncrease",
                type: "uint256",
            },
        ],
        name: "increaseTroveDebt",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isOwner",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lastETHError_Redistribution",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lastFeeOperationTime",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lastLUSDDebtError_Redistribution",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "liquidate",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_n",
                type: "uint256",
            },
        ],
        name: "liquidateTroves",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "lqtyStaking",
        outputs: [
            {
                internalType: "contract ILQTYStaking",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lqtyToken",
        outputs: [
            {
                internalType: "contract ILQTYToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "lusdToken",
        outputs: [
            {
                internalType: "contract ILUSDToken",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "priceFeed",
        outputs: [
            {
                internalType: "contract IPriceFeed",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_LUSDamount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "_firstRedemptionHint",
                type: "address",
            },
            {
                internalType: "address",
                name: "_upperPartialRedemptionHint",
                type: "address",
            },
            {
                internalType: "address",
                name: "_lowerPartialRedemptionHint",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_partialRedemptionHintNICR",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_maxIterations",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_maxFeePercentage",
                type: "uint256",
            },
        ],
        name: "redeemCollateral",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "removeStake",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "rewardSnapshots",
        outputs: [
            {
                internalType: "uint256",
                name: "ETH",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "LUSDDebt",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrowerOperationsAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_activePoolAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_defaultPoolAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_stabilityPoolAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_gasPoolAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_collSurplusPoolAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_priceFeedAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_lusdTokenAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_sortedTrovesAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_lqtyTokenAddress",
                type: "address",
            },
            {
                internalType: "address",
                name: "_lqtyStakingAddress",
                type: "address",
            },
        ],
        name: "setAddresses",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "_num",
                type: "uint256",
            },
        ],
        name: "setTroveStatus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "sortedTroves",
        outputs: [
            {
                internalType: "contract ISortedTroves",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "stabilityPool",
        outputs: [
            {
                internalType: "contract IStabilityPool",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalCollateralSnapshot",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalStakes",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalStakesSnapshot",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "updateStakeAndTotalStakes",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_borrower",
                type: "address",
            },
        ],
        name: "updateTroveRewardSnapshots",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
