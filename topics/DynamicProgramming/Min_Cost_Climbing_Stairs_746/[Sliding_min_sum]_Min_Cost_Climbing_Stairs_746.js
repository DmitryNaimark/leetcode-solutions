// https://leetcode.com/problems/min-cost-climbing-stairs/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    let s1 = cost[0],
        s2 = cost[1],
        curS = 0;
    
    for (let i = 2; i < cost.length; i++) {
        curS = cost[i] + Math.min(s1, s2);
        s1 = s2;
        s2 = curS;
    }
    
    return Math.min(s1, s2);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 15
console.log(minCostClimbingStairs([10, 15, 20]));
// 6
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
