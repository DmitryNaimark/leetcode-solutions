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
    let happyCustomersSum = 0,
        curWindowUnhappySum = 0,
        maxUnhappySum = 0;
    
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            happyCustomersSum += customers[i];
        } else {
            curWindowUnhappySum += customers[i];
        }
        
        if (i >= x) {
            curWindowUnhappySum -= customers[i - x] * grumpy[i - x];
        }
        
        maxUnhappySum = Math.max(curWindowUnhappySum, maxUnhappySum);
    }
    
    return happyCustomersSum + maxUnhappySum;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 16
console.log(maxSatisfied([1,0,1,2,1,1,7,5], 
                         [0,1,0,1,0,1,0,1], 3));
// 19
console.log(maxSatisfied([9,10,4,5],
                         [1,0,1,1], 1));
