// https://leetcode.com/problems/subarray-sum-equals-k/
// ---------------------------------------------------

// Runtime Complexity: O(n^2)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
    let resCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                resCount++;
            }
        }
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
