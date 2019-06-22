// https://leetcode.com/problems/tallest-billboard/
// ---------------------------------------------------
// You are installing a billboard and want it to have the largest height.
// The billboard will have two steel supports, one on each side.
// Each steel support must be an equal height.
//
// You have a collection of rods which can be welded together.
// For example, if you have rods of lengths 1, 2, and 3, you can weld them together to make a support of length 6.
//
// Return the largest possible height of your billboard installation.
// If you cannot support the billboard, return 0.
//
//
// Example 1:
//     Input: [1,2,3,6]
//     Output: 6
//     Explanation: We have two disjoint subsets {1,2,3} and {6}, which have the same sum = 6.
//
// Example 2:
//     Input: [1,2,3,4,5,6]
//     Output: 10
//     Explanation: We have two disjoint subsets {2,3,5} and {4,6}, which have the same sum = 10.
//
// Example 3:
//     Input: [1,2]
//     Output: 0
//     Explanation: The billboard cannot be supported, so we return 0.
//
//
// Note:
//     0 <= rods.length <= 20
//     1 <= rods[i] <= 1000
//     The sum of rods is at most 5000.
// ---------------------------------------------------

/**
 * @param {number[]} rods
 * @return {number}
 */
function tallestBillboard(rods) {
    let rodsSum = 0;
    for (let rod of rods) {
        rodsSum += rod;
    }
    
    let biggestRod = Math.floor(rodsSum / 2);
    
    for ( ; biggestRod > 0; biggestRod--) {
        for (let startIndex = 0; startIndex < rods.length; startIndex++) {
            let removedIndexesSet = new Set();
            if (findItemsForSumRecursively(rods, removedIndexesSet, startIndex, biggestRod) &&
                findItemsForSumRecursively(rods, removedIndexesSet, 0, biggestRod))
            {
                return biggestRod;
            }
        }
    }
    
    return 0;
}

function findItemsForSumRecursively(arr, removedIndexesSet, startIndex, remainingSum) {
    if (startIndex >= arr.length) {
        return false;
    }
    
    for (let i = startIndex; i < arr.length; i++) {
        if (removedIndexesSet.has(i)) {
            continue;
        }
        
        if (arr[i] <= remainingSum) {
            removedIndexesSet.add(i);
            if (remainingSum === arr[i]) {
                return true;
            }
            
            if (findItemsForSumRecursively(arr,removedIndexesSet, i + 1, remainingSum - arr[i])) {
                return true;
            } else {
                removedIndexesSet.delete(i);
            }
        }
    }
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 6
console.log(tallestBillboard([1,2,3,6]));
// 10
console.log(tallestBillboard([1,2,3,4,5,6]));
// 0
console.log(tallestBillboard([1,2]));
// 2050
console.log(tallestBillboard([33,30,41,34,37,29,26,31,42,33,38,27,33,31,35,900,900,900,900,900]));



