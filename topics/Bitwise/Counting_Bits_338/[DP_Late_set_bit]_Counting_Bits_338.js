// https://leetcode.com/problems/counting-bits/
// ---------------------------------------------------

// Runtime Complexity: O(num)
// Space Complexity: O(num)
/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num) {
    let dp = new Array(num + 1);
    dp[0] = 0;
    
    for (let i = 1; i <= num; i++) {
        dp[i] = dp[i & (i - 1)] + 1;
    }
    
    return dp;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [0, 1, 1]
console.log(countBits(2));
// [0, 1, 1, 2, 1, 2]
console.log(countBits(5));
