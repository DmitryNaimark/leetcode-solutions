// https://leetcode.com/problems/power-of-four/
// ---------------------------------------------------

// Runtime Complexity: O(digits_in_radix_4_count)
// Space Complexity: O(1)
/**
 * @param {number} num
 * @return {boolean}
 */
function isPowerOfFour(num) {
    if (num < 1) {
        return false;
    }
    
    return /^10*$/.test(num.toString(4));
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
