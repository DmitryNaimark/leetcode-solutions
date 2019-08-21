// https://leetcode.com/problems/power-of-three/
// ---------------------------------------------------

// Runtime Complexity: O(digits_in_radix_3_count)
// Space Complexity: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    if (n === 1) {
        return true;
    }
    
    // Convert number to radix 3.
    // Check if number starts with 1 (which means 3 in decimal system), and then only zeros follow.
    return /^10*$/.test(n.toString(3));
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(81));
// false
console.log(isPowerOfThree(-1));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(10));

