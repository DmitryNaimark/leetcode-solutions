// https://leetcode.com/problems/triangle/
// ---------------------------------------------------

// Runtime Complexity: O(arithmetic_progression(rows)) => O(N^2)
// Space Complexity: O(rows)
/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    if (triangle.length === 1) {
        return triangle[0][0];
    }
    
    let rows = triangle.length;
    
    for (let r = rows - 2; r >= 0; r--) {
        for (let c = 0; c < triangle[r].length; c++) {
            triangle[r][c] = Math.min(triangle[r + 1][c], triangle[r + 1][c + 1]) + triangle[r][c];
        }
    }
    
    return triangle[0][0];
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(minimumTotal([
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
]));
