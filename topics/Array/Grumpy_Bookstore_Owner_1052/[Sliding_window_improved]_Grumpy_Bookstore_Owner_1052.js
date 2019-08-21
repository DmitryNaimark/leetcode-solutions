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
    let happyCustomersSum = 0;
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            happyCustomersSum += customers[i];
        }
    }
    
    
    let windowUnhappyCustomersSum = 0,
        maxUnhappyCustomersSum = 0;
    for (let i = 0; i < customers.length; i++) {
        if (i >= x) {
            windowUnhappyCustomersSum = windowUnhappyCustomersSum - 
                customers[i - x] * grumpy[i - x] + 
                customers[i] * grumpy[i];
        } else {
            windowUnhappyCustomersSum += customers[i] * grumpy[i];
        }
        
        maxUnhappyCustomersSum = Math.max(windowUnhappyCustomersSum, maxUnhappyCustomersSum);
    }
    
    return maxUnhappyCustomersSum + happyCustomersSum;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 16
console.log(maxSatisfied([1,0,1,2,1,1,7,5], 
                         [0,1,0,1,0,1,0,1], 3));
