// https://leetcode.com/problems/longest-continuous-increasing-subsequence/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function findLengthOfLCIS(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    let maxLength = 1,
        curLength = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            curLength++;
            maxLength = Math.max(curLength, maxLength);
        } else {
            curLength = 1;
        }
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
