// https://leetcode.com/problems/reverse-bits/
// ---------------------------------------------------

// Runtime Complexity: O(1) - iterate over 32 bits. 
// Space Complexity: O(1), since we'll need 3 binary digits to represent 8, for example.
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        // Same as *= 2
        res <<= 1;
        
        res |= (n & 1);
        
        // Logical shift to the right.
        // It will also move most significant 32nd bit(which is a sign "-" or "+") to the right.
        n >>>= 1;
    }
    
    // This is used to convert res to a 32 bit unsigned number.
    return res >>> 0;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 123
// console.log(reverseBits(3724541952));
// 3724541952
console.log(reverseBits(123));

// 123
console.log(reverseBits(reverseBits(123)));

