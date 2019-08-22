// https://leetcode.com/problems/climbing-stairs/
// ---------------------------------------------------

// Runtime Complexity: O(2 ^ N)
// Space Complexity: O(N)
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    return climbStairsRecursively(n);
}

function climbStairsRecursively(iCurStep) {
    if (iCurStep <= 2) {
        return iCurStep;
    }
    
    return climbStairsRecursively(iCurStep - 1) + climbStairsRecursively(iCurStep - 2);
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
