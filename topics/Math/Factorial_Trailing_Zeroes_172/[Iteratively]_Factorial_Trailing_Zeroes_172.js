// https://leetcode.com/problems/factorial-trailing-zeroes/
// ---------------------------------------------------

// Runtime Complexity: O(log5(n)) => O(log(n))
// Space Complexity: O(1)
/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n) {
    let fiveFactors = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        fiveFactors += n
    }
    
    return fiveFactors;
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
