// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
function maxProfit(prices) {
    let profit = 0,
        i = 0;
    
    while (i < prices.length - 1) {
        // Find next valley
        while (prices[i + 1] !== undefined && prices[i + 1] <= prices[i]) {
            i++;
        }
        let valley = prices[i];
        
        // Find next peak
        while (prices[i + 1] !== undefined && prices[i + 1] >= prices[i]) {
            i++;
        }
        let peak = prices[i];
        
        profit += peak - valley;
    }
    
    return profit;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 7
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// 7
console.log(maxProfit([7, 1, 1, 5, 5, 3, 6, 4]));
// 4
console.log(maxProfit([1, 2, 3, 4, 5]));
// 0
console.log(maxProfit([7, 6, 4, 3, 1]));
