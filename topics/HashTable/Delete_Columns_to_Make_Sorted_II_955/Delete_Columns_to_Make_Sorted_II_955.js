// https://leetcode.com/problems/delete-columns-to-make-sorted-ii/
// ---------------------------------------------------
// We are given an array A of N lowercase letter strings, all of the same length.
//
// Now, we may choose any set of deletion indices, and for each string, we delete all the characters in those indices.
//
// For example, if we have an array A = ["abcdef","uvwxyz"] and deletion indices {0, 2, 3},
//     then the final array after deletions is ["bef","vyz"].
//
// Suppose we chose a set of deletion indices D such that after deletions,
//     the final array has its elements in lexicographic order (A[0] <= A[1] <= A[2] ... <= A[A.length - 1]).
//
// Return the minimum possible value of D.length.
//
//
// Example 1:
//     Input: ["ca","bb","ac"]
//     Output: 1
//     Explanation:
//         After deleting the first column, A = ["a", "b", "c"].
//         Now A is in lexicographic order (ie. A[0] <= A[1] <= A[2]).
//         We require at least 1 deletion since initially A was not in lexicographic order, so the answer is 1.
//
// Example 2:
//     Input: ["xc","yb","za"]
//     Output: 0
//     Explanation:
//         A is already in lexicographic order, so we don't need to delete anything.
//         Note that the rows of A are not necessarily in lexicographic order:
//             ie. it is NOT necessarily true that (A[0][0] <= A[0][1] <= ...)
//
// Example 3:
//     Input: ["zyx","wvu","tsr"]
//     Output: 3
//     Explanation:
//         We have to delete every column.
//
//
// Note:
//     1 <= A.length <= 100
//     1 <= A[i].length <= 100
// ---------------------------------------------------

/**
 * @param {string[]} words
 * @return {number}
 */
function minDeletionSize(words) {
    let deletedColumns = new Set(),
        maxWordLength = words[0].length;
    
    for (let row = 0; row < words.length - 1; row++) {
        for (let col = 0; col < maxWordLength; col++) {
            if (deletedColumns.has(col)) {
                continue;
            }
            
            if (words[row][col] > words[row + 1][col]) {
                deletedColumns.add(col);
                row = -1;
                break;
            } else if (words[row][col] < words[row + 1][col]) {
                break;
            }
        }
        
        if (deletedColumns.size === maxWordLength) {
            return maxWordLength;
        }
    }
    
    return deletedColumns.size;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 1
console.log(minDeletionSize(["ca","bb","ac"]));
// 0
console.log(minDeletionSize(["xc","yb","za"]));
// 3
console.log(minDeletionSize(["zyx","wvu","tsr"]));
// 3
console.log(minDeletionSize(["doeeqiy", "yabhbqe", "twckqte"]));
// 5
console.log(minDeletionSize(["dbyucsndxb", "ewuahnjszs", "ndywixgsip", "aexjiusjwb", "zowkkykbpt", "wesumzisir", "rptinecjts", "eixwovxhtx", "mhlcpfwfps", "ybsuszcccc"]));

