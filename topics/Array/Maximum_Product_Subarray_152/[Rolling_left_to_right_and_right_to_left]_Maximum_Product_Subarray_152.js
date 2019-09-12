// https://leetcode.com/problems/maximum-product-subarray/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    let maxProduct = nums[0],
        left = 1,
        right = 1;
    
    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        left = (left || 1) * nums[i];
        right = (right || 1) * nums[j];
        
        maxProduct = Math.max(left, right, maxProduct);
    }
    
    return maxProduct;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 6
console.log(maxProduct([2, 3, -2, 4]));
// 0
console.log(maxProduct([-2, 0, -1]));
