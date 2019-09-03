// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// ---------------------------------------------------

// Runtime Complexity: O(N + N + N + N) => O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
    let fallAppeared = false,
        min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            fallAppeared = true;
        }
        if (fallAppeared) {
            min = Math.min(nums[i], min);
        }
    }
    
    let peakAppeared = false,
        max = -Number.MAX_SAFE_INTEGER;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] >  nums[i + 1]) {
            peakAppeared = true;
        }
        if (peakAppeared) {
            max = Math.max(nums[i], max);
        }
    }
    
    // If array is fully sorted.
    if (!fallAppeared) {
        return 0;
    }
    
    let iStart,
        iEnd;
    for (let i = 0; i < nums.length; i++) {
        if (min < nums[i]) {
            iStart = i;
            break;
        }
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (max > nums[i]) {
            iEnd = i;
            break;
        }
    }
    
    return iEnd - iStart + 1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 5 (from 1 till 5 inclusively)
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// 0 (it's already sorted)
console.log(findUnsortedSubarray([1, 2, 3, 4]));
