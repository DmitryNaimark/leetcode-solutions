// https://leetcode.com/problems/house-robber/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    if (nums.length < 3) {
        return Math.max(nums[0] || 0, nums[1] || 0);
    }
    
    let dp = new Array(nums.length + 1);
    dp[0] = nums[0];
    for (let i = 1; i < dp.length; i++) {
        dp[i] = Math.max(dp[i - 1], (dp[i - 2] || 0) + (nums[i] || 0));
    }
    
    return dp[dp.length - 1];
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 4
console.log(rob([1, 2, 3, 1]));
// 12
console.log(rob([2, 7, 9, 3, 1]));
// 0
console.log(rob([]));
