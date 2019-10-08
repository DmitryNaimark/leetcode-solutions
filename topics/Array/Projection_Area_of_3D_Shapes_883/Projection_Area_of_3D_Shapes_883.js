// https://leetcode.com/problems/projection-area-of-3d-shapes/
// ---------------------------------------------------

// Runtime Complexity: O(N^2)
// Space Complexity: O(1)
/**
 * @param {number[][]} grid
 * @return {number}
 */
function projectionArea(grid) {
    let topSum = 0;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid.length; c++) {
            if (grid[r][c] > 0) {
                topSum++;
            }
        }
    }
    
    let frontSum = 0,
        maxRowLength = 0;
    for (let r = 0; r < grid.length; r++) {
        frontSum += Math.max(...grid[r]);
        
        maxRowLength = Math.max(grid[r].length, maxRowLength);
    }
    
    let sideSum = 0;
    for (let c = 0; c < maxRowLength; c++) {
        let maxColSum = 0;
        for (let r = 0; r < grid.length; r++) {
            maxColSum = Math.max(grid[r][c] || 0, maxColSum);
        }
        
        sideSum += maxColSum;
    }
    
    return topSum + frontSum + sideSum;
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
