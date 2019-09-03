// https://leetcode.com/problems/house-robber/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(nums) {
    if (nums.length < 3) {
        return Math.max(nums[0] || 0, nums[1] || 0);
    }
    
    let prevPrev = 0,
        prev = 0,
        cur;
    for (let i = 0; i <= nums.length; i++) {
        cur = Math.max(prev, prevPrev + (nums[i] || 0));
        prevPrev = prev;
        prev = cur;
    }
    
    return cur;
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
// 4
console.log(rob([2,1,1,2]));
