// https://leetcode.com/problems/pascal's-triangle-ii/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N + 1) => O(N)
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(rowIndex) {
    let res = new Array(rowIndex + 1).fill(1);
    
    // 1
    // 1 1
    // 1 2 1
    // 1 3 3  1
    // 1 4 6  4  1
    // 1 5 10 10 5 1
    for (let i = 1; i < rowIndex; i++) {
        res[i] = res[i - 1] * (rowIndex - i + 1) / i;
    }
    
    return res;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(getRow(1));
console.log(getRow(2));
console.log(getRow(3));
console.log(getRow(4));
console.log(getRow(5));
