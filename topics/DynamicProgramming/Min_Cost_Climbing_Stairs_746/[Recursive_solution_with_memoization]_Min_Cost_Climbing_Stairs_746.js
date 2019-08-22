// https://leetcode.com/problems/min-cost-climbing-stairs/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    let memo = new Array(cost.length);
    return Math.min(minCostClimbingStairsRecursively(cost, 0, memo));
}

function minCostClimbingStairsRecursively(cost, iStart, memo) {
    // console.log('_'.repeat(indent), iStart);
    if (iStart === cost.length - 2) {
        return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
    }
    if (iStart === cost.length - 1) {
        return 0;
    }
    
    if (memo[iStart] !== undefined) {
        return memo[iStart];
    }
    
    let first = cost[iStart] + minCostClimbingStairsRecursively(cost, iStart + 1, memo);
    let second = cost[iStart + 1] + minCostClimbingStairsRecursively(cost, iStart + 2, memo);
    
    // console.log('_'.repeat(indent), 'first', first, 'second', second);
    
    let minPossible = Math.min(first, second);
    memo[iStart] = minPossible;
    
    return minPossible;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 15
console.log(minCostClimbingStairs([10, 15, 20]));
// 6
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
