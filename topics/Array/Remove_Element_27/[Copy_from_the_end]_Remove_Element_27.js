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
    if (nums.length === 0) {
        return 0;
    }
    
    let iLeft = 0,
        iRight = nums.length;
    
    while (iLeft !== iRight) {
        if (nums[iLeft] === val) {
            nums[iLeft] = nums[--iRight];
        } else {
            iLeft++;
        }
    }
    
    return iRight;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
console.log(removeElement([], 2));
console.log(removeElement([1], 1));
