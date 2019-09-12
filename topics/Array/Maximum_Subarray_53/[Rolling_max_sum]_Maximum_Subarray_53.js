// https://leetcode.com/problems/maximum-subarray/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
function maxSubArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    
    // Example: 1 5 3 -2 -9 5 -6 8 1
    let maxSum = arr[0],
        curSum = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        curSum = Math.max(curSum + arr[i], arr[i]);
        maxSum = Math.max(curSum, maxSum);
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
