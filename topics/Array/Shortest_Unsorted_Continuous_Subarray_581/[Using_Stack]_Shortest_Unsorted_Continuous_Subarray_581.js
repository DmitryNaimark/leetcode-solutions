// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
    let stack = [],
        iStart = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        // It's possible to put i index into stack instead of number(see official solution 4, but it's messier I think).
        while (stack.length > 0 && stack[stack.length - 1] > nums[i]) {
            stack.pop();
            iStart = Math.min(stack.length, iStart);
        }
        stack.push(nums[i]);
    }
    stack = [];
    
    let iEnd = Number.MAX_SAFE_INTEGER;
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] < nums[i]) {
            stack.pop();
            iEnd = Math.min(stack.length, iEnd);
        }
        stack.push(nums[i]);
    }
    
    if (iStart !== Number.MAX_SAFE_INTEGER) {
        return nums.length - iEnd - iStart;
    } else {
        return 0;
    }
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 5 (from 1 till 5 inclusively)
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]));
// 0 (it's already sorted)
console.log(findUnsortedSubarray([1, 2, 3, 4]));
