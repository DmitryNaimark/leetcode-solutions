// https://leetcode.com/problems/majority-element/
// ---------------------------------------------------

// Runtime Complexity: O(N).
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let majorityCandidate,
        // +1 for candidate, -1 for other elements.
        count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            majorityCandidate = nums[i];
        }
        
        count += (nums[i] === majorityCandidate)
            ? 1
            : -1;
    }
    
    return majorityCandidate;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(majorityElement([3, 2, 3]));
// 2
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
