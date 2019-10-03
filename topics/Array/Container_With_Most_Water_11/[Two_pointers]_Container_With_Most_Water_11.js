// https://leetcode.com/problems/container-with-most-water/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height) {
    let l = 0,
        r = height.length - 1,
        maxWaterCount = 0;
    
    while (l < r) {
        let waterCount = Math.min(height[l], height[r]) * (r - l);
        maxWaterCount = Math.max(waterCount, maxWaterCount);
        
        if (height[l] < height[r]) {
            l++;
        } else if (height[l] > height[r]) {
            r--;
        } else {
            // We can simultaneously move both pointers, since the area is limited by min,
            // so by moving one of the pointers, it cannot get bigger when both of them are equal.
            l++;
            r--;
        }
    }
    
    return maxWaterCount;
}




// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 49
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
