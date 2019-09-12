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
        curPositive = nums[0],
        curNegative = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let possibleMinMax = [curPositive * nums[i], curNegative * nums[i], nums[i]];
        
        curPositive = Math.max(...possibleMinMax);
        curNegative = Math.min(...possibleMinMax);
        
        maxProduct = Math.max(curPositive, maxProduct);
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
