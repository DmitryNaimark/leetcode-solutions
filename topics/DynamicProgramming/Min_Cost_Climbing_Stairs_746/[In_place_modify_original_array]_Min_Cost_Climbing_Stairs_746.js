// https://leetcode.com/problems/min-cost-climbing-stairs/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    for (let i = 2; i < cost.length; i++) {
        cost[i] = cost[i] + Math.min(cost[i - 2], cost[i - 1]);
    }
    
    return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 15
console.log(minCostClimbingStairs([10, 15, 20]));
// 6
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
