// https://leetcode.com/problems/longest-continuous-increasing-subsequence/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
    let anchor = 0,
        maxLength = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {
            anchor = i;
        }
        maxLength = Math.max(i - anchor + 1, maxLength);
    }
    
    return maxLength;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
// 1
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
