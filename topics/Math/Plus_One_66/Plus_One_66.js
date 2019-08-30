// https://leetcode.com/problems/plus-one/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    
    digits.unshift(1);
    return digits;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [1, 2, 4]
console.log(plusOne([1, 2, 3]));
// [4, 3, 2, 2]
console.log(plusOne([4, 3, 2, 1]));
// [1, 0, 0, 0, 0]
console.log(plusOne([9, 9, 9, 9]));
