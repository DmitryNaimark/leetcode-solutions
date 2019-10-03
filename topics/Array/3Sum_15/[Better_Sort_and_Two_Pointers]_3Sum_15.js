// https://leetcode.com/problems/3sum/
// ---------------------------------------------------

// Runtime Complexity: O(N*log(N) + N^2) => O(N^2)
// Space Complexity: O(N)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    
    let sum,
        triplets = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            break;
        }
        
        // Skip the same number.
        if (i > 0 && nums[i - 1] === nums[i]) {
            continue;
        }
        
        sum = -nums[i];
        
        for (let l = i + 1, r = nums.length - 1; l < r;) {
            // Skip the same number.
            if (l > i + 1 && nums[l] === nums[l - 1]) {
                l++;
                continue;
            }
            
            let twoSum = nums[l] + nums[r];
            if (twoSum > sum) {
                r--;
            } else if (twoSum < sum) {
                l++;
            } else {
                triplets.push([nums[i], nums[l], nums[r]]);
                r--;
                l++;
            }
        }
    }
    
    return triplets;
}




// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [ [-1, 0, 1], [-1, -1, 2] ]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
