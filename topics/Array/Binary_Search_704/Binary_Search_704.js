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
    
    return -1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 4
console.log(search([-1,0,3,5,9,12], 9));
// -1
console.log(search([-1,0,3,5,9,12], 2));
