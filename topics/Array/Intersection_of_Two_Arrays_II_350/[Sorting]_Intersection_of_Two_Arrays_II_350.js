// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// ---------------------------------------------------

// Runtime Complexity: O(N * log(N))
// Space Complexity: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    
    let i = 0,
        j = 0,
        res = [];
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            res.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] > nums2[j]) {
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
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
