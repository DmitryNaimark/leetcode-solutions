// https://leetcode.com/problems/climbing-stairs/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n <= 2) {
        return n;
    }
    
    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    
    return dp[n];
}



// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(climbStairs(0));
// 1
console.log(climbStairs(1));
// 2
console.log(climbStairs(2));
// 3
console.log(climbStairs(3));
// 5
console.log(climbStairs(4));
// 8
console.log(climbStairs(5));
// 13
console.log(climbStairs(6));
