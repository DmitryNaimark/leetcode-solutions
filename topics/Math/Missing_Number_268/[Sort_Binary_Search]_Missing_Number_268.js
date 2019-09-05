// https://leetcode.com/problems/missing-number/
// ---------------------------------------------------

// Runtime Complexity: O(N * log(N))
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
    nums.sort((a, b) => a - b);
    
    let iLeft = 0,
        iRight = nums.length;
    
    while (iLeft < iRight) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (nums[iMid] > iMid) {
            iRight = iMid;
        } else {
            iLeft = iMid + 1;
        }
    }
    
    // Or "nums[iLeft] - 1"
    return iLeft;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 2
console.log(missingNumber([3,0,1]));
// 8
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
