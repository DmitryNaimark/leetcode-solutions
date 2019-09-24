// https://leetcode.com/problems/search-in-rotated-sorted-array/
// ---------------------------------------------------

// Runtime Complexity: O(log(N))
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let iLeft = 0,
        iRight = nums.length - 1;
    
    while (iLeft <= iRight) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (nums[iMid] === target) {
            return iMid;
        }
        if (nums[iMid] >= nums[iLeft]) {
            if (target >= nums[iLeft] && target < nums[iMid]) {
                iRight = iMid - 1;
            } else {
                iLeft = iMid + 1;
            }
        } else {
            if (target > nums[iMid] && target <= nums[iRight]) {
                iLeft = iMid + 1;
            } else {
                iRight = iMid - 1;
            }
        }
    }
    
    return - 1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 4
console.log(search([4,5,6,7,0,1,2], 0));
// -1
console.log(search([4,5,6,7,0,1,2], 3));
// 1
console.log(search([3, 1], 1));
