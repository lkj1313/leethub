/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const numStr = digits.join('');
    const bigNum = BigInt(numStr) + BigInt(1);
    return String(bigNum).split('').map(Number)
};