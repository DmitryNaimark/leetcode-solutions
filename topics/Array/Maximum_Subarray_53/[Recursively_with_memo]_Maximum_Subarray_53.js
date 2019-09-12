// https://leetcode.com/problems/maximum-subarray/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
function maxSubArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    let memo = new Array(arr.length);
    let res = { maxSum: arr[0] };
    maxSumRecursively(arr, arr.length - 1, memo, res);
    
    return res.maxSum;
}

function maxSumRecursively(arr, i, memo, res) {
    if (i < 0) {
        return 0;
    }
    if (memo[i] !== undefined) {
        return memo[i];
    }
    
    memo[i] = Math.max(arr[i], arr[i] + maxSumRecursively(arr, i - 1, memo, res));
    res.maxSum = Math.max(memo[i], res.maxSum);
    
    return memo[i];
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 6
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 1
console.log(maxSubArray([-2, 1]));
