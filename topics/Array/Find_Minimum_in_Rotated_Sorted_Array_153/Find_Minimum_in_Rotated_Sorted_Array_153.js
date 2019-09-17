// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
// ---------------------------------------------------

// Runtime Complexity: O(log(N))
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMin(nums) {
    let n = nums.length;
    
    if (nums[0] < nums[n - 1]) {
        return nums[0];
    }
    
    // Invariants:
    // Binary search has 3 "ranges":
    //     - iLeft and elements to the left (all of the numbers are ascending)
    //     - iRight and elements to the right (all of the numbers are ascending)
    //     - Elements between iLeft and iRight (somewhere in here we'll have a valley(descending number).
    //         Our task is moving iLeft and iRight toward each other, and at the end iRight will
    //         point to the first number in the right range(ascending numbers at the right).
    let iLeft = 0,
        iRight = n - 1;
    
    while (iRight - iLeft > 1) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (nums[iMid] > nums[iLeft]) {
            iLeft = iMid;
        } else {
            iRight = iMid;
        }
    }
    
    return nums[iRight];
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 1
console.log(findMin([3, 4, 5, 1, 2]));
// 0
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
