// https://leetcode.com/problems/container-with-most-water/
// ---------------------------------------------------

// Runtime Complexity: O(N^2)
// Space Complexity: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    
    let maxWaterSum = 0;
    
    for (let i = 0; i < height.length; i++) {
        for (let j = i + 1; j < height.length; j++) {
            let waterSum = (j - i) * Math.min(height[i], height[j]);
            maxWaterSum = Math.max(waterSum, maxWaterSum);
        }
    }
    
    return maxWaterSum;
}




// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 49
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
