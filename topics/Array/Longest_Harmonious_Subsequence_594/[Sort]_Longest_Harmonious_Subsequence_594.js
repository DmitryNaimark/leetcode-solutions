// https://leetcode.com/problems/longest-harmonious-subsequence/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(Distinct(N)) => O(N) in worst case
/**
 * @param {number[]} nums
 * @return {number}
 */
function findLHS(nums) {
    let numCount = new Map(),
        maxSubseq = 0;
    
    for (let num of nums) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
        
        if (numCount.has(num - 1)) {
            maxSubseq = Math.max(numCount.get(num - 1) + numCount.get(num), maxSubseq)
        }
        if (numCount.has(num + 1)) {
            maxSubseq = Math.max(numCount.get(num + 1) + numCount.get(num), maxSubseq)
        }
    }
    
    return maxSubseq;
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
