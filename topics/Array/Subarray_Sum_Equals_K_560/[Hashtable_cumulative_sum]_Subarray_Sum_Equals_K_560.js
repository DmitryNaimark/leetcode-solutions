// https://leetcode.com/problems/subarray-sum-equals-k/
// ---------------------------------------------------

// Runtime Complexity: O(n)
// Space Complexity: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
    // 0: 1 is to handle the case when we'll have the first number equal to k.
    let sumsMap = new Map([[0, 1]]);
    
    let totalSum = 0,
        resCount = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
        
        if (sumsMap.has(totalSum - k)) {
            resCount += sumsMap.get(totalSum - k);
        }
        sumsMap.set(totalSum, (sumsMap.get(totalSum) || 0) + 1);
    }
    
    return resCount;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 2
console.log(subarraySum([1, 1, 1], 2));
// 6
console.log(subarraySum([1, -1, 0, 2, 3, -5, 4], 0));
