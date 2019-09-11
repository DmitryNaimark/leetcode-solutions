// https://leetcode.com/articles/two-sum/#
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(Distinct(N)) => O(N)
// Solution
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let numIndexMap = new Map();
    
    for (let i = 0; i < numbers.length; i++) {
        let numToSearch = target - numbers[i];
        
        if (numIndexMap.has(numToSearch)) {
            return [numIndexMap.get(numToSearch), i];
        }
        
        numIndexMap.set(numbers[i], i);
    }
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [0, 1]
console.log(twoSum([2, 7, 11, 15], 9));
