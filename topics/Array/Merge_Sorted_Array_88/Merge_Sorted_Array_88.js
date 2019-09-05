// https://leetcode.com/problems/merge-sorted-array/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let iLast = nums1.length - 1,
        i = m - 1,
        j = n - 1;
    
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[iLast] = nums1[i];
            i--;
        } else {
            nums1[iLast] = nums2[j];
            j--;
        }
        iLast--;
    }
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [1, 2, 2, 3, 5, 6]
let arr1 = [1, 2, 3, 0, 0, 0];
merge(arr1, 3, [2, 5, 6], 3);
console.log(arr1);
