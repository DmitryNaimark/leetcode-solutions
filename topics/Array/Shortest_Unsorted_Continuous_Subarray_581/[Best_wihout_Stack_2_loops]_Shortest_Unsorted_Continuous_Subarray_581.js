// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// ---------------------------------------------------

// Runtime Complexity: O(N + N) => O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
    let start,
        end,
        min = Number.MAX_SAFE_INTEGER,
        max = -Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(nums[i], max);
        // Tricky part.
        if (nums[i] < max) {
            end = i;
        }
    }
    
    for (let i = nums.length - 1; i >= 0; i--) {
        min = Math.min(nums[i], min);
        if (nums[i] > min) {
            start = i;
        }
    }
    
    // Array is fully sorted
    return (start === undefined)
        ? 0
        : end - start + 1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 5 (from 1 till 5 inclusively)
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// 0 (it's already sorted)
console.log(findUnsortedSubarray([1, 2, 3, 4]));
