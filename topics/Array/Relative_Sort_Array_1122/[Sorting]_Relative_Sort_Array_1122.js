// https://leetcode.com/problems/relative-sort-array/
// ---------------------------------------------------

// Runtime Complexity: O(L1 * log(L1) + L2), where L1 and L2 are the lengths of arr1, arr2.
//     Important: L2 is used to create hashtable.
// Space Complexity: O(Distinct(arr2))
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
    let numIndex = new Map();
    
    for (let i = 0; i < arr2.length; i++) {
        numIndex.set(arr2[i], i);
    }
    
    arr1.sort(function(a, b) {
        if (!numIndex.has(a) && !numIndex.has(b)) {
            return a - b;
        } else if (numIndex.has(a) && numIndex.has(b)) {
            return numIndex.get(a) - numIndex.get(b);
        } else if (numIndex.has(a)) {
            return -1;
        } else if (numIndex.has(b)) {
            return 1;
        }
    });
    
    return arr1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
