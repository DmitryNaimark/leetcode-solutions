// https://leetcode.com/problems/minimum-increment-to-make-array-unique/
// ---------------------------------------------------
// Given an array of integers A, a move consists of choosing any A[i], and incrementing it by 1.
//
// Return the least number of moves to make every value in A unique.
//
// Example 1:
//     Input: [1,2,2]
//     Output: 1
// Explanation:  After 1 move, the array could be [1, 2, 3].
//
//
// Example 2:
//     Input: [3,2,1,2,1,7]
//     Output: 6
// Explanation:  After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
//     It can be shown with 5 or less moves that it is impossible for the array to have all unique values.
//
//
// Note:
//     0 <= A.length <= 40000
//     0 <= A[i] < 40000
// ---------------------------------------------------

/**
 * @param {number[]} a
 * @return {number}
 */
function minIncrementForUnique(a) {
    let moves = 0;
    
    a.sort(sortAscending);
    
    for (let i = 1; i < a.length; i++) {
        if (a[i] <= a[i - 1]) {
            let amountToAdd = a[i - 1] - a[i] + 1;
            moves += amountToAdd;
            a[i] += amountToAdd;
        }
    }
    
    return moves;
}

function sortAscending(a, b) {
    return a - b;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 1
console.log(minIncrementForUnique([1,2,2]));
// 6
console.log(minIncrementForUnique([3,2,1,2,1,7]));
// 0
console.log(minIncrementForUnique([]));