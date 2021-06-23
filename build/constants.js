"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CHAINLINK_ABI = exports.CHAINLINK_ADDRESS = exports.UNISWAP_PAIR_ABI = exports.UNISWAP_PAIR_ADDRESS = exports.ARBITRAGE_CONTRACT_ABI = exports.ARBITRAGE_CONTRACT_ADDRESS = exports.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE = exports.SWAP_AMOUNTS = exports.PROFITABILITY_MINIMUM = exports.ONE_ETHER = exports.CHAINLINK_DECIMALS = void 0;
const ethers_1 = require("ethers");
const lib_base_1 = require("@liquity/lib-base");
exports.CHAINLINK_DECIMALS = 8;
exports.ONE_ETHER = ethers_1.BigNumber.from(10).pow(18);
exports.PROFITABILITY_MINIMUM = exports.ONE_ETHER.div(100).mul(2);
exports.SWAP_AMOUNTS = [
    exports.ONE_ETHER.div(3),
    exports.ONE_ETHER.div(2),
    exports.ONE_ETHER.mul(1),
    exports.ONE_ETHER.mul(6).div(5),
    exports.ONE_ETHER.mul(2),
];
exports.LIQUITY_DEFAULT_SLIPPAGE_TOLERANCE = lib_base_1.Decimal.from(0.001);
exports.ARBITRAGE_CONTRACT_ADDRESS = "0x8259196dfF5e10c54C66d6Aa531265f488918671";
exports.ARBITRAGE_CONTRACT_ABI = [
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
exports.UNISWAP_PAIR_ADDRESS = "0x9663f2ca0454accad3e094448ea6f77443880454";
exports.UNISWAP_PAIR_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "uint24",
                "name": "fee",
                "type": "uint24"
            }, {
                "indexed": true,
                "internalType": "int24",
                "name": "tickSpacing",
                "type": "int24"
            }],
        "name": "FeeAmountEnabled",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "oldOwner",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }],
        "name": "OwnerChanged",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "token0",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "address",
                "name": "token1",
                "type": "address"
            }, {
                "indexed": true,
                "internalType": "uint24",
                "name": "fee",
                "type": "uint24"
            }, {
                "indexed": false,
                "internalType": "int24",
                "name": "tickSpacing",
                "type": "int24"
            }, {
                "indexed": false,
                "internalType": "address",
                "name": "pool",
                "type": "address"
            }],
        "name": "PoolCreated",
        "type": "event"
    }, {
        "inputs": [{
                "internalType": "address",
                "name": "tokenA",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "tokenB",
                "type": "address"
            }, {
                "internalType": "uint24",
                "name": "fee",
                "type": "uint24"
            }],
        "name": "createPool",
        "outputs": [{
                "internalType": "address",
                "name": "pool",
                "type": "address"
            }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
                "internalType": "uint24",
                "name": "fee",
                "type": "uint24"
            }, {
                "internalType": "int24",
                "name": "tickSpacing",
                "type": "int24"
            }],
        "name": "enableFeeAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
                "internalType": "uint24",
                "name": "",
                "type": "uint24"
            }],
        "name": "feeAmountTickSpacing",
        "outputs": [{
                "internalType": "int24",
                "name": "",
                "type": "int24"
            }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "",
                "type": "address"
            }, {
                "internalType": "uint24",
                "name": "",
                "type": "uint24"
            }],
        "name": "getPool",
        "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{
                "internalType": "address",
                "name": "",
                "type": "address"
            }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "parameters",
        "outputs": [{
                "internalType": "address",
                "name": "factory",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "token0",
                "type": "address"
            }, {
                "internalType": "address",
                "name": "token1",
                "type": "address"
            }, {
                "internalType": "uint24",
                "name": "fee",
                "type": "uint24"
            }, {
                "internalType": "int24",
                "name": "tickSpacing",
                "type": "int24"
            }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
                "internalType": "address",
                "name": "_owner",
                "type": "address"
            }],
        "name": "setOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
exports.CHAINLINK_ADDRESS = "0x72AFAECF99C9d9C8215fF44C77B94B99C28741e8";
exports.CHAINLINK_ABI = [
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
