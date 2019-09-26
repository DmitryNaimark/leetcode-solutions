// https://leetcode.com/problems/maximal-square/
// ---------------------------------------------------

// Runtime Complexity: O(w * h)
// Space Complexity: O(w)
/**
 * @param {string[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    
    let rows = matrix.length,
        cols = matrix[0].length;
    
    let dp = new Array(cols).fill(0),
        prev = null;
    
    let maxSize = 0;
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === '1') {
                dp[c] = (r === 0 || c === 0)
                    ? 1
                    : Math.min(prev[c - 1], prev[c], dp[c - 1]) + 1;
                
                maxSize = Math.max(dp[c], maxSize);
            }
        }
        
        prev = dp;
        dp = new Array(cols).fill(0);
    }
    
    return maxSize ** 2;
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
