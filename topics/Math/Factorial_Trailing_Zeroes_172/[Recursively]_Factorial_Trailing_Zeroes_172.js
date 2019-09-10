// https://leetcode.com/problems/factorial-trailing-zeroes/
// ---------------------------------------------------

// Runtime Complexity: O(log(n))
// Space Complexity: O(log(n))
/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n) {
    if (n < 5) {
        return 0;
    }
    
    return Math.floor(n / 5) + trailingZeroes(n / 5);
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 1: 5! == 120 (1 trailing zero)
console.log(trailingZeroes(5));
// 7
console.log(trailingZeroes(30));
