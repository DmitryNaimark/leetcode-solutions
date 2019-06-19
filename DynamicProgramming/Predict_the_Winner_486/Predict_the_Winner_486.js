// https://leetcode.com/problems/predict-the-winner/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function PredictTheWinner(nums) {
    let memo = Array(nums.length).fill(null)
        .map((x) => Array(nums.length));
    
    return getOptScore(nums, 0, nums.length - 1, 1, memo) >= 0;
}

function getOptScore(nums, s, e, turn, memo) {
    if (s === e) {
        return nums[s] * turn;
    }
    if (memo[s][e] != null) {
        return memo[s][e];
    }
    
    let res1 = turn * nums[s] + getOptScore(nums, s + 1, e, -turn, memo);
    let res2 = turn * nums[e] + getOptScore(nums, s, e - 1, -turn, memo);
    
    memo[s][e] = turn * Math.max(turn * res1, turn * res2);
    return memo[s][e];
}

// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(PredictTheWinner([1,5,2]));
console.log(PredictTheWinner([1, 5, 233, 7]));



// ---------------------------------------------------
//            Test Cases use DN functions:
// ---------------------------------------------------
