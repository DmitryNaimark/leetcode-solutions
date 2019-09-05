// https://leetcode.com/problems/missing-number/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    let mask = 0;
    
    for (let i = 0; i < nums.length; i++) {
        mask ^= nums[i];
        mask ^= (i + 1);
    }
    
    return mask;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 2
console.log(missingNumber([3,0,1]));
// 8
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
