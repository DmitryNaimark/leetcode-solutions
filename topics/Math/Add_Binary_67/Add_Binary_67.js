// https://leetcode.com/problems/add-binary/
// ---------------------------------------------------

// Runtime Complexity: O(a_length + b_length)
// Space Complexity: O(1)
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let j = b.length - 1,
        i = a.length - 1,
        res = '';
    
    let carry = 0;
    
    while (j >= 0 || i >= 0) {
        let aBinary = parseInt(a[i]) || 0,
            bBinary = parseInt(b[j]) || 0;
        
        let sum = aBinary + bBinary + carry;
        let digit = sum % 2;
        carry = sum >= 2 ? 1 : 0;
        
        res = digit.toString() + res;
        
        i--;
        j--;
    }
    if (carry > 0) {
        res = '1' + res;
    }
    
    return res;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "100"
console.log(addBinary('11', '1'));
// "10101"
console.log(addBinary('1010', '1011'));
