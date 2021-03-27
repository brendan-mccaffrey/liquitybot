"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniswapOut = void 0;
function getUniswapOut(reserveIn, reserveOut, amountIn) {
    const amountInWithFee = amountIn.mul(997);
    const numerator = amountInWithFee.mul(reserveOut);
    const denominator = reserveIn.mul(1000).add(amountInWithFee);
    return numerator.div(denominator);
}
exports.getUniswapOut = getUniswapOut;
