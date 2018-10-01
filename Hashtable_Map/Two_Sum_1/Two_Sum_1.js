// https://leetcode.com/articles/two-sum/#
// ---------------------------------------------------
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// ---------------------------------------------------

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let iteratedNumbersSet = new Map();
    
    for (let [iNumber, number] of numbers.entries()) {
        let numberToSearch = target - number;
        
        if (iteratedNumbersSet.has(numberToSearch)) {
            return [iteratedNumbersSet.get(numberToSearch), iNumber]
        } else {
            iteratedNumbersSet.set(number, iNumber);
        }
    }
};