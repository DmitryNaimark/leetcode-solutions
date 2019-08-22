// https://leetcode.com/problems/climbing-stairs/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    if (n <= 2) {
        return n;
    }
    
    let first = 1;
    let second = 2;
    let total = 0;
    for (let i = 3; i <= n; i++) {
        total = first + second;
        first = second;
        second = total;
    }
    
    return total;
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
