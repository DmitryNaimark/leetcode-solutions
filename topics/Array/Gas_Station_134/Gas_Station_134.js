// https://leetcode.com/problems/gas-station/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
function canCompleteCircuit(gas, cost) {
    let n = gas.length;
    
    let totalTank = 0,
        curTank = 0,
        iStart = 0;
    
    for (let i = 0; i < n; i++) {
        totalTank += gas[i] - cost[i];
        curTank += gas[i] - cost[i];
        
        if (curTank < 0) {
            iStart = i + 1;
            curTank = 0;
        }
    }
    
    return totalTank >= 0 ? iStart : -1;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
