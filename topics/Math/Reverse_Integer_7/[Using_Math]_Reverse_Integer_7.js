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
    let isNegative = x < 0;
    x = Math.abs(x);
    
    let reversedNumber = 0;
    while (x > 0) {
        let remainder = x % 10;
        x = (x - remainder) / 10;
        reversedNumber = reversedNumber * 10 + remainder;
    }
    
    const intMax = Math.pow(2, 31);
    if (isNegative) {
        reversedNumber *= -1;
    }
    
    if (reversedNumber <= -intMax || reversedNumber >= intMax - 1) {
        return 0;
    }
    
    return reversedNumber;
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