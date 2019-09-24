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
    let iMin = findMinInRotatedArray(nums);
    
    if (target >= nums[iMin] && target <= nums[nums.length - 1]) {
        return binarySearch(nums, target, iMin, nums.length - 1);
    } else {
        return binarySearch(nums, target, 0, iMin - 1);
    }
}

function findMinInRotatedArray(nums) {
    let iLeft = 0,
        iRight = nums.length - 1;
    
    while (iRight - iLeft > 1) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (nums[iMid] > nums[iLeft]) {
            iLeft = iMid;
        } else {
            iRight = iMid;
        }
    }
    
    return iRight;
}

function binarySearch(nums, target, iLeft, iRight) {
    while (iLeft <= iRight) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (nums[iMid] === target) {
            return iMid;
        } else if (nums[iMid] < target) {
            iLeft = iMid + 1;
        } else {
            iRight = iMid - 1;
        }
    }
    
    return -1;
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
