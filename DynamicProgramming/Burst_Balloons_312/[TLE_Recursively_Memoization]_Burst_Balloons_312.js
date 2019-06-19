// LeetCode link
// ---------------------------------------------------
// Description
// ---------------------------------------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let memo = {};
    return burstRecursively(nums, memo);
};

function burstRecursively(nums, memo) {
    let json = JSON.stringify(nums);
    if (memo[json] != null) {
        return memo[json];
    }
    
    console.log(nums);
    let maxScore = 0;
    
    for (let i = 0; i < nums.length; i++) {
        let score = (nums[i - 1] || 1) * nums[i] * (nums[i + 1] || 1) + burstRecursively(spliceWithoutMutation(nums, i), memo);
        if (score > maxScore) {
            maxScore = score;
        }
    }
    
    memo[json] = maxScore;
    return maxScore;
}

function spliceWithoutMutation(arr, indexToRemove) {
    if (indexToRemove < 0 || indexToRemove >= arr.length) {
        // Return copy of original array
        return arr.slice();
    }
    
    return arr.slice(0, indexToRemove)
        .concat(arr.slice(indexToRemove + 1));
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 167
console.log(maxCoins([3,1,5,8]));



// ---------------------------------------------------
//            Test Cases use DN functions:
// ---------------------------------------------------
