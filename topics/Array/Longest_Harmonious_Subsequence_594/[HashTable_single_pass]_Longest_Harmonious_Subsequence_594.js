// https://leetcode.com/problems/longest-harmonious-subsequence/
// ---------------------------------------------------

// Runtime Complexity: O(N * log(N))
// Space Complexity: O(log(N)), log N space is required by sorting in average case
/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
    nums.sort((a, b) => a - b);
    
    let curCount = 0,
        prevCount = 0,
        maxRes = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] === nums[i - 1]) {
            curCount++;
        } else {
            prevCount = (nums[i - 1] + 1 === nums[i])
                ? curCount
                : 0;
            curCount = 1;
        }
        
        if (prevCount > 0) {
            maxRes = Math.max(curCount + prevCount, maxRes);
        }
    }
    
    return maxRes;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 5
console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
// 20
console.log(findLHS([2, 2, 2, 2, 2, 2, 2, 3, 1, 0, 0, 0, 3, 1, -1, 0, 1, 1, 0, 0, 1, 1, 2, 2, 2, 0, 1, 2, 2, 3, 2]));
// 2
console.log(findLHS([1, 2, 3, 4]));
// 4
console.log(findLHS([1, 2, 2, 1]));
