// https://leetcode.com/problems/maximum-subarray/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
function maxSubArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    let dp = new Array(arr.length);    
    dp[0] = arr[0];
    
    let maxSum = arr[0];
    
    for (let i = 1; i < dp.length; i++) {
        dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
        maxSum = Math.max(dp[i], maxSum);
    }
    
    return maxSum;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 1
console.log(maxSubArray([-2, 1]));
