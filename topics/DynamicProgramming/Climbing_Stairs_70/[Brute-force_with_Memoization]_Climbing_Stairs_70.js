// https://leetcode.com/problems/climbing-stairs/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    let memo = new Array(n + 1);
    return climbStairsRecursively(n, memo);
}

function climbStairsRecursively(iCurStep, memo) {
    if (iCurStep <= 2) {
        return iCurStep;
    }
    if (memo[iCurStep] != null) {
        return memo[iCurStep];
    }
    
    let stepsCount = climbStairsRecursively(iCurStep - 1, memo) + climbStairsRecursively(iCurStep - 2, memo);
    memo[iCurStep] = stepsCount;
    
    return stepsCount;
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
