// https://leetcode.com/problems/maximal-square/
// ---------------------------------------------------

// Runtime Complexity: O((w * h) ^ 2)
// Space Complexity: O(1)
/**
 * @param {string[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    
    let rows = matrix.length,
        cols = matrix[0].length,
        maxSize = -1;
    
    // For each cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            
            let size = 0;
            while (r + size < rows && c + size < cols) {
                let iLastRow = r + size,
                    iLastCol = c + size;
                
                // Check the last row
                let containsZeros = false;
                
                for (let iR = r; iR <= r + size; iR++) {
                    if (matrix[iR][iLastCol] !== "1") {
                        containsZeros = true;
                        break;
                    }
                }
                
                if (!containsZeros) {
                    // Check the last col
                    for (let iC = c; iC <= c + size; iC++) {
                        if (matrix[iLastRow][iC] !== "1") {
                            containsZeros = true;
                            break;
                        }
                    }
                }
                
                if (!containsZeros) {
                    maxSize = Math.max(size, maxSize);
                    size++;
                } else {
                    break;
                }
            }
        }
    }
    
    return (maxSize + 1) ** 2;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 4
console.log(maximalSquare([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]
]));
// 0
console.log(maximalSquare([["0"]]));
// 1
console.log(maximalSquare([["1"]]));
