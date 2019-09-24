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
    // Invariants:
    // [-Inf, iLeft] - not the number
    // [iRight, Int] - not the number
    // (iLeft, iRight) - to be inspected.
    let iLeft = 0,
        iRight = nums.length - 1;
    
    if (target === nums[iLeft]) {
        return iLeft;
    }
    if (target === nums[iRight]) {
        return iRight;
    }
    
    while (iRight - iLeft > 1) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (nums[iMid] === target) {
            return iMid;
        }
        if (nums[iMid] > nums[iLeft]) {
            if (target > nums[iLeft] && target < nums[iMid]) {
                iRight = iMid;
            } else {
                iLeft = iMid;
            }
        } else {
            if (target > nums[iMid] && target < nums[iRight]) {
                iLeft = iMid;
            } else {
                iRight = iMid;
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
