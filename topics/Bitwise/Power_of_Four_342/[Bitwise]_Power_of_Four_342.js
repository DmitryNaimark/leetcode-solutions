// https://leetcode.com/problems/power-of-four/
// ---------------------------------------------------

// Runtime Complexity: O(1)
// Space Complexity: O(1)
/**
 * @param {number} num
 * @return {boolean}
 */
function isPowerOfFour(num) {
    let isOnly1Bit = (num & (num - 1)) === 0;
    let isBitInEvenPositionFromTheRight = (num & 0x55555555) !== 0;
    // 5 in hex is the same as '0101' in binary. So, instead of 8 fives in hex, we could use eight '0101' blocks in binary:
    // let isBitInEvenPositionFromTheRight = ((num & parseInt('1010101010101010101010101010101', 2)) !== 0)
    
    return isOnly1Bit && isBitInEvenPositionFromTheRight;
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
