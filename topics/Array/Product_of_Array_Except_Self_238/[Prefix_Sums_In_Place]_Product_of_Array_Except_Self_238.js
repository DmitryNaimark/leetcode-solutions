// https://leetcode.com/problems/product-of-array-except-self/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1) - since problem states that "res" array shouldn't be counted
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    let curProduct = 1,
        res = nums.slice();
    
    for (let i = 0; i < res.length; i++) {
        res[i] = curProduct;
        curProduct *= nums[i];
    }
    
    curProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res[i] *= curProduct;
        curProduct *= nums[i];
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [ 24, 12, 8, 6 ]
console.log(productExceptSelf([1,2,3,4]));
