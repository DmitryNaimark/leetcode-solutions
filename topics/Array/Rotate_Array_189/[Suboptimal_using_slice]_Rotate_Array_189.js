// https://leetcode.com/problems/rotate-array/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    k = k % nums.length;
    
    let res = nums.slice(-k).concat(nums.slice(0, nums.length - k));
    for (let i = 0; i < nums.length; i++) {
        nums[i] = res[i];
    }
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [5,6,7,1,2,3,4]
let nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums);

// [3,99,-1,-100]
nums = [-1, -100, 3, 99];
rotate(nums, 2);
console.log(nums);
