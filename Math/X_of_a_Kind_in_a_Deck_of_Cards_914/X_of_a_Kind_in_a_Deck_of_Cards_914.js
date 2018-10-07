// https://leetcode.com/contest/weekly-contest-104/problems/x-of-a-kind-in-a-deck-of-cards/
// ---------------------------------------------------
// In a deck of cards, each card has an integer written on it.
//
// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
//
// Each group has exactly X cards.
// All the cards in each group have the same integer.
//
//
// Example 1:
//
//     Input: [1,2,3,4,4,3,2,1]
//     Output: true
//     Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]
//
// Example 2:
//
//     Input: [1,1,1,2,2,2,3,3]
//     Output: false
//     Explanation: No possible partition.
//
// Example 3:
//
//     Input: [1]
//     Output: false
//     Explanation: No possible partition.
//
// Example 4:
//
//     Input: [1,1]
//     Output: true
//     Explanation: Possible partition [1,1]
//
// Example 5:
//
//     Input: [1,1,2,2,2,2]
//     Output: true
//     Explanation: Possible partition [1,1],[2,2],[2,2]
//
//
// Note:
//
// 1 <= deck.length <= 10000
// 0 <= deck[i] < 10000
// ---------------------------------------------------

/**
 * @param {number[]} deck
 * @return {boolean}
 */
function hasGroupsSizeX(deck) {
    if (deck.length < 2) {
        return false;
    }
    
    let mapNumCount = new Map();
    for (let num of deck) {
        mapNumCount.set(num, (mapNumCount.get(num) || 0) + 1);
    }
    
    // If at least 1 number count is 1, pile can't contain >= 2 cards.
    for (let numCount of mapNumCount.values()) {
        if (numCount === 1) {
            return false;
        }
    }
    
    let greatestCommonDivisor = mapNumCount.get(deck[0]);
    for (let numCount of mapNumCount.values()) {
        greatestCommonDivisor = gcd(greatestCommonDivisor, numCount);
        if (greatestCommonDivisor <= 1) {
            return false;
        }
    }

    return true;
}

// Returns Greatest Common Divisor between two numbers.
function gcd(x, y) {
    return x === 0
        ? y
        : gcd(y % x, x);
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true
console.log(hasGroupsSizeX([1,2,3,4,4,3,2,1]));
// false
console.log(hasGroupsSizeX([1,1,1,2,2,2,3,3]));
// false
console.log(hasGroupsSizeX([1]));
// true
console.log(hasGroupsSizeX([1,1]));
// true
console.log(hasGroupsSizeX([1,1,2,2,2,2]));
// true
console.log(hasGroupsSizeX([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,10,10,10,11,11,11,12,12,12,13,13,13]));