// https://leetcode.com/problems/smallest-range-i/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function smallestRangeI(A, K) {
    let min = Math.min(...A),
        max = Math.max(...A);
    
    let diff = max - min;
    return Math.max(diff - 2 * K, 0);
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 0
console.log(smallestRangeI([1], 0));
// 6
console.log(smallestRangeI([0, 10], 2));
// 0
console.log(smallestRangeI([1, 3, 6], 3));
