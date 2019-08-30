// https://leetcode.com/problems/single-number/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    return nums.reduce((res, num) => res ^ num, 0);
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 1
console.log(singleNumber([2, 2, 1]));
// 4
console.log(singleNumber([4, 1, 2, 1, 2]));
