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
    let bit = 1,
        carry = 0,
        res = 0;
    
    while (bit <= a || bit <= b) {
        let aBitIsSet = (a & bit) > 0;
        let bBitIsSet = (b & bit) > 0;
        
        if (aBitIsSet && bBitIsSet) {
            if (carry > 0) {
                res |= bit;
            }
            carry = 1;
        } else if (aBitIsSet || bBitIsSet) {
            if (carry > 0) {
                carry = 1;
            } else {
                res |= bit;
                carry = 0;
            }
        } else {
            if (carry > 0) {
                res |= bit;
                carry = 0;
            }
        }
        bit = (bit << 1);
    }
    
    if (carry > 0) {
        res |= bit;
    }
    
    return res;
}

// Example:
// 7 + 3
//
// 7:   1 1 1
// 3:   0 1 1
//    1 0 1 0 => 10

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 69
console.log(getSum(21, 48));

// 0
console.log(getSum(-1, 1));
