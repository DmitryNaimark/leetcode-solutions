// https://leetcode.com/problems/minimum-moves-to-equal-array-elements/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function minMoves(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    // Incrementing all elements except one is the same as decrementing one element.
    // So, we can reformulate the problem: how many times do we need to do decrement -1, so that
    //     all numbers are equal to the minimum number?
    
    let min = Math.min(...nums);
    let sum = nums.reduce((sum, x) => sum + x, 0);
    
    return sum - min * nums.length;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(minMoves([1, 2, 3]));
console.log(minMoves([]));
