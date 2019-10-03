// https://leetcode.com/problems/3sum/
// ---------------------------------------------------

// Runtime Complexity: O(N^2)
// Space Complexity: O(N)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    let n = nums.length,
        numCountMap = new Map();
    
    for (let num of nums) {
        numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
    }
    
    let res = {};
    for (let i = 0; i < nums.length - 1; i++) {
        // Skip the same number.
        if (i > 1 && nums[i] === nums[i - 1]) {
            continue;
        }
        numCountMap.set(nums[i], numCountMap.get(nums[i]) - 1);
        
        for (let j = i + 1; j < nums.length; j++) {
            let remainder = 0 - nums[i] - nums[j];
            numCountMap.set(nums[j], numCountMap.get(nums[j]) - 1);
            
            if (numCountMap.has(remainder) && numCountMap.get(remainder) > 0) {
                let triplet = [nums[i], nums[j], remainder];
                triplet.sort((a, b) => a - b);
                
                let min = triplet[0],
                    max = triplet[2],
                    mid = triplet[1];
                
                res[min] = res[min] || {};
                res[min][max] = res[min][max] || {};
                res[min][max] = mid;
            }
            numCountMap.set(nums[j], numCountMap.get(nums[j]) + 1);
        }
        
        numCountMap.set(nums[i], numCountMap.get(nums[i]) + 1);
    }
    
    let output = [];
    for (let minKey in res) {
        for (let maxKey in res[minKey]) {
            output.push([+minKey, +maxKey, +res[minKey][maxKey]]);
        }
    }
    
    return output;
}




// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [ [-1, 0, 1], [-1, -1, 2] ]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
