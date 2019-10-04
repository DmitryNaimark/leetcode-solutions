// https://leetcode.com/problems/sum-of-two-integers/
// ---------------------------------------------------

// Runtime Complexity: O(log2(max(a, b)))
// Space Complexity: O(1)
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function getSum(a, b) {
    // !== 0 is used instead of > 0, because we can have negative numbers.
    while (b !== 0) {
        let carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    
    return a;
}

// Example:
// Input:       a   00101       5
//              b   01011       11
//
// Expected:  res   10000       16
//
// Steps:
//              a   00101
//              b   01011
//
//              a   01110
//              b   00010
//
//              a   01100
//              b   00100
//
//              a   01000
//              b   01000
//
//              a   00000
//              b   10000
//
//              a   10000
//              b   00000
//
// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 69
console.log(getSum(21, 48));

// 0
console.log(getSum(-1, 1));
