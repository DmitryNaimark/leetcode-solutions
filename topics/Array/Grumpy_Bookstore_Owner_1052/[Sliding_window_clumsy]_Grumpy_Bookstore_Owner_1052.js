// https://leetcode.com/problems/grumpy-bookstore-owner/
// ---------------------------------------------------

// Runtime Complexity: O(N + N) => O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} x
 * @return {number}
 */
function maxSatisfied(customers, grumpy, x) {
    let curGrumpySum = 0;
    // Find value for sliding window at the start.
    for (let i = 0; i < x; i++) {
        curGrumpySum += customers[i] * grumpy[i];
    }
    let maxGrumpySum = curGrumpySum;
    
    // Move sliding window and recalculate sum of grumpy customers there.
    // NOTE: This implementation is a bit clumsy(2 for loops, "off by 1" stuff.
    //     See better implementation in "[Sliding_window_improved]_*" file.
    for (let i = 1; i <= grumpy.length - x; i++) {
        curGrumpySum = curGrumpySum - (customers[i - 1] * grumpy[i - 1])
            + (customers[i + x - 1] * grumpy[i + x - 1]);
        
        maxGrumpySum = Math.max(curGrumpySum, maxGrumpySum);
    }
    
    // Find sum of happy customers
    let happyCustomersSum = 0;
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            happyCustomersSum += customers[i];
        }
    }
    
    return happyCustomersSum + maxGrumpySum;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 16
console.log(maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3));
