// https://leetcode.com/problems/binary-search/
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
    // Binary search has 3 "ranges":
    //     - iLeft and elements to the left - Less than target
    //     - iRight and elements to the right - Higher than target
    //     - Elements between iLeft and iRight - remain to be seen and moved to the right or left range.
    let iLeft = -1,
        iRight = nums.length;
    
    // If there are no elements remain to be seen, there is no answer.
    while (iRight - iLeft > 1) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (nums[iMid] > target) {
            iRight = iMid;
        } else if (nums[iMid] < target) {
            iLeft = iMid;
        } else {
            return iMid;
        }
    }
    
    return -1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 4
console.log(search([-1,0,3,5,9,12], 9));
// -1
console.log(search([-1,0,3,5,9,12], 2));
