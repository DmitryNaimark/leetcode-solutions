// LeetCode link
// ---------------------------------------------------
// Description
// ---------------------------------------------------

/**
 * @param {number[]} a
 * @return {number}
 */
function maxCoins(a) {
    let n = a.length,
        len = 1;
    
    let dp = Array(n).fill(null)
        .map((x) => Array(n).fill(0));
    
    for (let len = 1; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            let j = i + len - 1;
        
            for (let k = i; k <= j; k++) {
                let leftSum = (k - 1) >= i
                    ? dp[i][k-1]
                    : 0;
            
                let rightSum = (k + 1) <= j
                    ? dp[k+1][j]
                    : 0;
            
                let kScore = a[k] * (a[i-1] || 1) * (a[j+1] || 1);
            
                let totalScoreFromIToJ = leftSum + kScore + rightSum;
                dp[i][j] = Math.max(totalScoreFromIToJ, dp[i][j]);
                
                console.log(i, j, totalScoreFromIToJ);
            }
        }
    }
    
    
    return dp[0][n - 1];
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 167
console.log(maxCoins([3,1,5,8]));
// 0