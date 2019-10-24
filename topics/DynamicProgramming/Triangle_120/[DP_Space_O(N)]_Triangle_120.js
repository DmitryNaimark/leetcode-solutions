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
    let dp = triangle[rows - 1].slice();
    
    for (let r = rows - 2; r >= 0; r--) {
        for (let c = 0; c < triangle[r].length; c++) {
            dp[c] = Math.min(dp[c], dp[c + 1]) + triangle[r][c];
        }
    }
    
    return dp[0];
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
