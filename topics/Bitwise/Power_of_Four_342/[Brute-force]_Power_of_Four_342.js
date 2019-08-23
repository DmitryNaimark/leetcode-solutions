// https://leetcode.com/problems/power-of-four/
// ---------------------------------------------------

// Runtime Complexity: O(log4(num))
// Space Complexity: O(1)
/**
 * @param {number} num
 * @return {boolean}
 */
function isPowerOfFour(num) {
    if (num < 1) {
        return false;
    }

    while (num > 1) {
        num /= 4;
    }

    return num === 1;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true
console.log(isPowerOfFour(1));
console.log(isPowerOfFour(4));
console.log(isPowerOfFour(16));
console.log(isPowerOfFour(256));
// false
console.log(isPowerOfFour(0));
console.log(isPowerOfFour(2));
console.log(isPowerOfFour(8));
console.log(isPowerOfFour(20));
