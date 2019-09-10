// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(Distinct(nums1))
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    let numCount = new Map();
    for (let num of nums1) {
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }
    
    let res = [];
    for (let num of nums2) {
        if (numCount.has(num) && numCount.get(num) > 0) {
            numCount.set(num, numCount.get(num) - 1);
            res.push(num);
        }
    }
    
    return res;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [2, 2]
console.log(intersect([1, 2, 2, 1], [2, 2]));
// [4, 9]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
