// https://leetcode.com/problems/rotate-array/
// ---------------------------------------------------

// Runtime Complexity: O(N), since amortized time for push is O(1)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    let n = nums.length;
    k = k % n;
    
    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
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
