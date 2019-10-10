// https://leetcode.com/problems/counting-bits/
// ---------------------------------------------------

// Runtime Complexity: O(num * log2(num)), 
//     log2(num) is number of bits in num(max number).
// Space Complexity: O(num)
/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num) {
    let res = [];
    for (let i = 0; i <= num; i++) {
        res.push(countOnes(i));
    }
    
    return res;
}

function countOnes(num) {
    let count = 0;
    while (num !== 0) {
        // Remove least significant bit(the right-most 1). 
        num &= (num - 1);
        count++;
    }
    
    return count;
}

// Another way to count ones - check if the right digit is 1 and shift all bits to the right. 
// function countOnes(num) {
//     let count = 0;
//     while (num !== 0) {
//         if ((num & 1) === 1) {
//             count++;
//         }
//         num >>= 1;
//     }
//    
//     return count;
// }

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [0, 1, 1]
console.log(countBits(2));
// [0, 1, 1, 2, 1, 2]
console.log(countBits(5));
