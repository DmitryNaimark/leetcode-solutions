// https://leetcode.com/problems/relative-sort-array/
// ---------------------------------------------------

// Runtime Complexity: O(L1 + L2 + 1001) => O(L1 + L2), where L1 and L2 are the lengths of arr1, arr2.
//     Important: L2 is used to create hashtable.
// Space Complexity: O(1001) => O(1)
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function relativeSortArray(arr1, arr2) {
    let count = new Array(1001).fill(0);
    
    for (let num of arr1) {
        count[num]++;
    }
    
    let res = [];
    for (let num of arr2) {
        while (count[num] > 0) {
            res.push(num);
            count[num]--;
        }
    }
    
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            res.push(i);
            count[i]--;
        }
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [2,2,2,1,4,3,3,9,6,7,19]
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));

// [2,42,38,0,43,21,5,7,12,12,13,23,24,24,27,29,30,31,33,48]
console.log(relativeSortArray([2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31], [2,42,38,0,43,21]));
