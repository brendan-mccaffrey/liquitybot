//SPDX-License-Identifier: UNLICENSED
// Currently deployed at 0x738eeb1c5710b701fdb408de071dc315de289b42
pragma solidity 0.8.1;

pragma experimental ABIEncoderV2;

interface IERC20 {
    event Approval(address indexed owner, address indexed spender, uint value);
    event Transfer(address indexed from, address indexed to, uint value);

    function name() external view returns (string memory);
    function symbol() external view returns (string memory);
    function decimals() external view returns (uint8);
    function totalSupply() external view returns (uint);
    function balanceOf(address owner) external view returns (uint);
    function allowance(address owner, address spender) external view returns (uint);

    function approve(address spender, uint value) external returns (bool);
    function transfer(address to, uint value) external returns (bool);
    function transferFrom(address from, address to, uint value) external returns (bool);
}

interface IWETH is IERC20 {
    function deposit() external payable;
    function withdraw(uint) external;
}

// This contract simply calls multiple targets sequentially, ensuring WETH balance before and after
contract Execute {
    address private immutable owner;
    // IWETH private constant WETH = IWETH(0xd0A1E359811322d97991E03f863a0C30C2cF029C);
    // address private constant LUSD_UNISWAP_PAIR = 0xE99F8d6E64d039D06A20f0149E67BF8eB2e5b025;
    // address private constant LIQUITY_TROVE_MANAGER = 0x47a2d855fa5b501612744Cb65973273822bb9614;
    IWETH private constant WETH = IWETH(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
    address private constant LUSD_UNISWAP_PAIR = 0xf20ef17b889b437c151eb5ba15a47bfc62bff469;
    address private constant LIQUITY_TROVE_MANAGER = 0xA39739EF8b0231DbFA0DcdA07d7e29faAbCf4bb2;
    

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() payable {
        owner = msg.sender;
    }

    receive() external payable {
    }

    function withdraw(uint256 amount) external onlyOwner {
        (payable(msg.sender)).transfer(amount);
    }

    function MakeCalls(uint256 _wethAmount, bytes[2] memory _payloads) external onlyOwner {
        uint256 _ethBalanceBefore = address(this).balance;

        WETH.deposit{ value: _wethAmount }();
        WETH.transfer(LUSD_UNISWAP_PAIR, _wethAmount);

        (bool _success, bytes memory _response) = LUSD_UNISWAP_PAIR.call(_payloads[0]);
        require(_success, string(_response));
        (_success, _response) = LIQUITY_TROVE_MANAGER.call(_payloads[1]);
        require(_success, string(_response));

        uint256 _ethBalanceAfter = address(this).balance;
        require(_ethBalanceAfter > _ethBalanceBefore, "Balance after < balance before");
    }
}