// https://leetcode.com/problems/majority-element/
// ---------------------------------------------------

// Runtime Complexity: O(N * 32) => O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let majorityMask = 0,
        half = nums.length / 2;
    
    // Since JS uses 32 bit SIGNED integers in bitwise operations, this means that we have 31bit of meaningful bits and 1 bit for sign.
    // If 32-nd bit is 1, then the number is negative.
    // So, mask for 32-nd bit is actually number -2147483648, which causes problems on leetcode.
    // See details here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
    for (let i = 1, mask = 1; i <= 32; i++, mask = (mask << 1)) {
        console.log(mask);
        
        let bitsCount = 0;
        for (let num of nums) {
            if ((num & mask) > 0) {
                bitsCount++;
            }
        }
        
        if (bitsCount > half) {
            majorityMask |= mask;
        }
    }
    
    return majorityMask;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
// console.log(majorityElement([3, 2, 3]));
// 2
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
// -2147483648. This triggers error on LeetCode, see comments above.
console.log(majorityElement([-2147483648]));
