// https://leetcode.com/problems/missing-number/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    let realSum = nums.reduce((sum, num) => sum + num, 0);
    
    let totalSum = nums.length / 2 * (nums.length + 1);
    return totalSum - realSum;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 2
console.log(missingNumber([3,0,1]));
// 8
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
