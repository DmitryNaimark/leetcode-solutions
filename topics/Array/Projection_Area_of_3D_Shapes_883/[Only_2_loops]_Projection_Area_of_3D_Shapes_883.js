// https://leetcode.com/problems/projection-area-of-3d-shapes/
// ---------------------------------------------------

// Runtime Complexity: O(N^2)
// Space Complexity: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
function projectionArea(grid) {
    let n = grid.length,
        totalSum = 0;
    
    for (let r = 0; r < n; r++) {
        let maxInRow = 0,
            maxInCol = 0;
        
        for (let c = 0; c < n; c++) {
            maxInCol = Math.max(grid[c][r], maxInCol);
            maxInRow = Math.max(grid[r][c], maxInRow);
            
            if (grid[r][c] > 0) {
                totalSum++;
            }
        }
        
        totalSum += maxInCol + maxInRow;
    }
    
    return totalSum;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 5
console.log(projectionArea([[2]]));

// 17
console.log(projectionArea([[1, 2], [3, 4]]));

// 8
console.log(projectionArea([[1, 0], [0, 2]]));
