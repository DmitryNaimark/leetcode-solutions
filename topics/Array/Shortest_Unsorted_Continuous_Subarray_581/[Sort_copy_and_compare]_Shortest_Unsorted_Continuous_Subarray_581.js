// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// ---------------------------------------------------

// Runtime Complexity: O(N * log(N))
// Space Complexity: O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
    let sortedNums = nums.slice();
    sortedNums.sort((a, b) => a - b);
    
    let iStart,
        iEnd;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== sortedNums[i]) {
            if (iStart === undefined) {
                iStart = i;
            } else {
                iEnd = i;
            }
        }
    }
    
    if (iStart === undefined) {
        return 0;
    } else {
        return iEnd - iStart + 1;
    }
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 5 (from 1 till 5 inclusively)
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// 0 (it's already sorted)
console.log(findUnsortedSubarray([1, 2, 3, 4]));
