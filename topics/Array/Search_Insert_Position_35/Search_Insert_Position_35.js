// https://leetcode.com/problems/search-insert-position/
// ---------------------------------------------------

// Runtime Complexity: O(log(N))
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let iLeft = 0,
        iRight = nums.length - 1;
    
    while (iLeft <= iRight) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (nums[iMid] < target) {
            iLeft = iMid + 1;
        } else if (nums[iMid] > target) {
            iRight = iMid - 1;
        } else {
            return iMid;
        }
    }
    
    return iLeft;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 2
console.log(searchInsert([1, 3, 5, 6], 5));
// 1
console.log(searchInsert([1, 3, 5, 6], 2));
// 4
console.log(searchInsert([1, 3, 5, 6], 7));
// 0
console.log(searchInsert([1, 3, 5, 6], 0));
