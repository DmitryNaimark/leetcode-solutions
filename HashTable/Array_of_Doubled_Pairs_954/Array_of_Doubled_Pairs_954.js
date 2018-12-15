// https://leetcode.com/problems/array-of-doubled-pairs/
// ---------------------------------------------------
// Given an array of integers A with even length, return true if and only if it is possible to reorder it such
// that A[2 * i + 1] = 2 * A[2 * i] for every 0 <= i < len(A) / 2.
//
// Example 1:
//     Input: [3,1,3,6]
//     Output: false
//
// Example 2:
//     Input: [2,1,2,6]
//     Output: false
//
// Example 3:
//     Input: [4,-2,2,-4]
//     Output: true
//     Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].
//
// Example 4:
//     Input: [1,2,4,16,8,4]
//     Output: false
// ---------------------------------------------------
/**
 * @param {number[]} arr
 * @return {boolean}
 */
function canReorderDoubled(arr) {
    arr.sort(function (a, b) {
        return Math.abs(a) - Math.abs(b);
    });
    
    let numCountMap = new Map();
    for (let num of arr) {
        numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
    }
    
    for (let [num, numCount] of numCountMap.entries()) {
        let doubledNumber = num * 2;
        
        if (numCount > (numCountMap.get(doubledNumber) || 0)) {
            return false;
        } else {
            numCountMap.set(doubledNumber, (numCountMap.get(doubledNumber) || 0) - numCount);
        }
    }
    
    return true;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// false
console.log(canReorderDoubled([3,1,3,6]));
// false
console.log(canReorderDoubled([2,1,2,6]));
// true
console.log(canReorderDoubled([4,-2,2,-4]));
// false
console.log(canReorderDoubled([1,2,4,16,8,4]));
// true
console.log(canReorderDoubled([-1, -2, 1, 1, 2, 2, 2, 2, 4, 4, 4, 8]));




