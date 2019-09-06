// https://leetcode.com/problems/pascal's-triangle/
// ---------------------------------------------------

// Runtime Complexity: O(N^2)
// Space Complexity: O(N^2)
/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    // 1
    // 1 1
    // 1 2 1
    // 1 3 3 1
    // 1 4 6 4 1
    
    let res = [];
    for (let iRow = 0; iRow < numRows; iRow++) {
        let row = new Array(iRow + 1).fill(1);
        
        for(let iCol = 1; iCol < row.length; iCol++) {
            if (iRow > 0) {
                row[iCol] = (res[iRow - 1][iCol] || 0) 
                    + (res[iRow - 1][iCol - 1] || 0);
            }
        }
        res.push(row);
    }
    
    return res;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(generate(5));
