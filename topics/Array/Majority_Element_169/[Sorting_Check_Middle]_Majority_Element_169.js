// https://leetcode.com/problems/majority-element/
// ---------------------------------------------------

// Runtime Complexity: O(N * log(N))
// Space Complexity: O(1) (Or, O(N) if we'll make array copy before sorting)
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(majorityElement([3, 2, 3]));
// 2
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
