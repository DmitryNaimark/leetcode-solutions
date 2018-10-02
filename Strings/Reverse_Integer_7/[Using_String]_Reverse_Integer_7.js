// https://leetcode.com/problems/reverse-integer/description/
// ---------------------------------------------------
// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
//
// Example 2:
//
// Input: -123
// Output: -321
//
// Example 3:
//
// Input: 120
// Output: 21
//
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
// For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
// ---------------------------------------------------

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let xString = x.toString();
    const isNegative = (x < 0);
    const minusOrEmptyCharacter = isNegative ? '-' : '';
    
    if (isNegative) {
        xString = xString.slice(1);
    }
    
    let reversedString = minusOrEmptyCharacter + xString.split('').reverse().join('');
    let resultingNumber = parseInt(reversedString);
    
    const maxIntegerValue = Math.pow(2, 31);
    if (resultingNumber <= -maxIntegerValue || resultingNumber >= maxIntegerValue - 1) {
        return 0;
    }
    
    return resultingNumber;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(-12000));
// 2147483646
console.log(reverse(6463847412));
// 0
console.log(reverse(7463847412));
// 0
console.log(reverse(-8463847412));
// -2147483647
console.log(reverse(-7463847412));