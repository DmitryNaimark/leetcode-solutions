// https://leetcode.com/problems/remove-element/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let iPos = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[iPos] = nums[i];
            iPos++;
        }
    }
    
    return iPos;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
