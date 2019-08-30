// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    // We could remove this condition, since min will just become undefined.
    if (prices.length === 0) {
        return 0;
    }
    
    let min = prices[0],
        maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        maxProfit = Math.max(prices[i] - min, maxProfit);
        min = Math.min(prices[i], min);
    }
    
    return maxProfit;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 5
console.log(maxProfit([7,1,5,3,6,4]));
// 0
console.log(maxProfit([7,6,4,3,1]));
