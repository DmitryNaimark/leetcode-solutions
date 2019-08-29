// https://leetcode.com/problems/max-consecutive-ones/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
    let consecutiveOnes = 0,
        maxConsecutiveOnes = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            consecutiveOnes++;
            maxConsecutiveOnes = Math.max(consecutiveOnes, maxConsecutiveOnes);
        } else {
            consecutiveOnes = 0;
        }
    }
    
    return maxConsecutiveOnes;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
