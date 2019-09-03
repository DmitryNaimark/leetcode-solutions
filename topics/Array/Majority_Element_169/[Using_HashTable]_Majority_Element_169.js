// https://leetcode.com/problems/majority-element/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(Distinct(N))
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let numCountMap = new Map(),
        halfCount = Math.floor(nums.length / 2);
    
    for (let num of nums) {
        let numCount = (numCountMap.get(num) || 0) + 1;
        if (numCount > halfCount) {
            return num;
        }
        
        numCountMap.set(num, numCount);
    }
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(majorityElement([3, 2, 3]));
// 2
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
