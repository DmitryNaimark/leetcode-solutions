// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
// ---------------------------------------------------
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
//
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
//
// You may assume nums1 and nums2 cannot be both empty.
//
// Example 1:
//     nums1 = [1, 3]
//     nums2 = [2]
// The median is 2.0
//
// Example 2:
//     nums1 = [1, 2]
//     nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5
// ---------------------------------------------------

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function findMedianSortedArrays(nums1, nums2) {
    let i = -1,
        j = -1,
        totalLength = nums1.length + nums2.length,
        isOdd = (totalLength % 2 > 0),
        iFirstMedian = isOdd
            ? Math.floor(totalLength / 2)
            : totalLength / 2 - 1,
        iCounter = iFirstMedian,
        iChangedLast = false;
    
    // Iterate over nums1 and nums2 by Ascending numbers, untill we're at the median element.
    while (iCounter >= 0) {
        if (nums1[i + 1] === undefined || nums1[i + 1] > nums2[j + 1]) {
            j++;
            iChangedLast = false;
        } else {
            i++;
            iChangedLast = true;
        }
        
        iCounter--;
    }
    
    if (isOdd) {
        // Just return median element
        if (iChangedLast) {
            return nums1[i];
        }
        return nums2[j];
    } else {
        let currentNumber = iChangedLast
            ? nums1[i]
            : nums2[j];
        
        let nextNumber;
        if (nums1[i + 1] === undefined || nums1[i + 1] > nums2[j + 1]) {
            nextNumber = nums2[j + 1];
        } else {
            nextNumber = nums1[i + 1];
        }
        
        return parseInt(currentNumber + nextNumber) / 2;
    }
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 2
console.log(findMedianSortedArrays([1, 3], [2]));
// 2.5
console.log(findMedianSortedArrays([1, 2], [3, 4]));
// 3.5
console.log(findMedianSortedArrays([100], [1, 2, 3, 4, 5]));
// undefined
console.log(findMedianSortedArrays([], []));
// 1
console.log(findMedianSortedArrays([], [1]));
// 1
console.log(findMedianSortedArrays([1], []));
