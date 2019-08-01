// https://leetcode.com/problems/delete-columns-to-make-sorted/
// ---------------------------------------------------

// Runtime Complexity: O(arr.length * strLength)
// Space Complexity: O(1)
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
