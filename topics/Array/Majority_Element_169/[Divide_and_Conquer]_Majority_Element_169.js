// https://leetcode.com/problems/majority-element/
// ---------------------------------------------------

// Runtime Complexity: O(N * log(N)). See official solution explanation if needed.
// Space Complexity: O(log(N)), since callstack depth is log(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    return majorityElementRec(nums, 0, nums.length - 1);
}

function majorityElementRec(nums, iLeft, iRight) {
    if (iLeft === iRight) {
        return nums[iLeft];
    }
    
    let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
    let leftMajority = majorityElementRec(nums, iLeft, iMid);
    let rightMajority = majorityElementRec(nums, iMid + 1, iRight);
    
    if (leftMajority === rightMajority) {
        return leftMajority;
    }
    
    let leftCount = getNumberCount(nums, iLeft, iRight, leftMajority);
    let rightCount = getNumberCount(nums, iLeft, iRight, rightMajority);
    
    return leftCount > rightCount 
        ? leftMajority 
        : rightMajority;
}

function getNumberCount(nums, iLeft, iRight, num) {
    let count = 0;
    for (let i = iLeft; i <= iRight; i++) {
        if (nums[i] === num) {
            count++;
        }
    }
    
    return count;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(majorityElement([3, 2, 3]));
// 2
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
