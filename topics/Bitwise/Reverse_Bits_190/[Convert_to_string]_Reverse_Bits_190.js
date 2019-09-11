// https://leetcode.com/problems/reverse-bits/
// ---------------------------------------------------

// Runtime Complexity: O(log2(n)) to convert decimal to binary
// Space Complexity: O(log2(n)), since we'll need 3 binary digits to represent 8, for example.
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let str = n.toString(2).padStart(32, '0');
    
    let strReversed = str.split('').reverse().join('');
    return parseInt(strReversed, 2);
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 123
console.log(reverseBits(3724541952));
// 3724541952
console.log(reverseBits(123));

// 123
console.log(reverseBits(reverseBits(123)));

