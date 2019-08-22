// https://leetcode.com/problems/product-of-array-except-self/
// ---------------------------------------------------

// Runtime Complexity: O(N) 
// Space Complexity: O(N + N) => O(N)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Input:           1  2  3  4
// LPrefixSums:   1 1  2  6  24
// RPrefixSums:    24 24 12  4  1
// Product except [2] == LPrefixSums[2] * RPrefixSums[2 + 1]
function productExceptSelf(nums) {
    // Create Left Prefix Sums:
    let prefixSums = new Array(nums.length + 1).fill(1);
    for (let i = 1; i < prefixSums.length; i++) {
        prefixSums[i] = prefixSums[i - 1] * nums[i - 1];
    }
    // console.log(prefixSums);
    
    let reversePrefixSums = new Array(nums.length + 1).fill(1);
    for (let i = reversePrefixSums.length - 2; i >= 0; i--) {
        reversePrefixSums[i] = reversePrefixSums[i + 1] * nums[i];
    }
    // console.log(reversePrefixSums);
    
    let res = new Array(nums.length);
    for (let i = 0; i < res.length; i++) {
        res[i] = prefixSums[i] * reversePrefixSums[i + 1];
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [ 24, 12, 8, 6 ]
console.log(productExceptSelf([1,2,3,4]));
