// https://leetcode.com/problems/delete-columns-to-make-sorted/
// ---------------------------------------------------
// We are given an array A of N lowercase letter strings, all of the same length.
//
// Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.
// The remaining rows of strings form columns when read north to south.
//
// For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3}, then the final array after deletions is ["bef","vyz"],
// and the remaining columns of A are ["b","v"], ["e","y"], and ["f","z"]. (Formally, the c-th column is [A[0][c], A[1][c], ..., A[A.length-1][c]].)
//
// Suppose we chose a set of deletion indices D such that after deletions, each remaining column in A is in non-decreasing sorted order.
//
// Return the minimum possible value of D.length.
//
//
// Example 1:
//     Input: ["cba","daf","ghi"]
//     Output: 1
//     Explanation:
//         After choosing D = {1}, each column ["c","d","g"] and ["a","f","i"] are in non-decreasing sorted order.
//         If we chose D = {}, then a column ["b","a","h"] would not be in non-decreasing sorted order.
//
// Example 2:
//     Input: ["a","b"]
//     Output: 0
//     Explanation: D = {}
//
// Example 3:
//     Input: ["zyx","wvu","tsr"]
//     Output: 3
//     Explanation: D = {0, 1, 2}
//
//
// Note:
//     1 <= A.length <= 100
//     1 <= A[i].length <= 1000
// ---------------------------------------------------

/**
 * @param {string[]} arr
 * @return {number}
 */
function minDeletionSize(arr) {
    // If there is only 1 string, there is no way for columns to be unsorted.
    if (arr.length === 1) {
        return 0;
    }
    
    let strLength = arr[0].length,
        unsortedCols = 0;
    
    for (let col = 0; col < strLength; col++) {
        for (let row = 0; row < arr.length - 1; row++) {
            if (arr[row][col] > arr[row + 1][col]) {
                unsortedCols++;
                break;
            }
        }
    }
    
    return unsortedCols;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(minDeletionSize(["cba","daf","ghi"]));
console.log(minDeletionSize(["a","b"]));
console.log(minDeletionSize(["zyx","wvu","tsr"]));
console.log(minDeletionSize(["axk","cal","zbx"]));