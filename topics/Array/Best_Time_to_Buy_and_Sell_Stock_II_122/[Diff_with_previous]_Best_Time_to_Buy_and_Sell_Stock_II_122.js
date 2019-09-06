// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
function maxProfit(prices) {
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        let diff = prices[i] - prices[i - 1];
        
        if (diff > 0) {
            profit += diff;
        }
    }
    
    return profit;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 7
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// 4
console.log(maxProfit([1, 2, 3, 4, 5]));
// 0
console.log(maxProfit([7, 6, 4, 3, 1]));
