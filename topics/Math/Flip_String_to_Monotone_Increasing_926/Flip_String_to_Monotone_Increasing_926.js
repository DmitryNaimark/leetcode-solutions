// https://leetcode.com/problems/flip-string-to-monotone-increasing/description/
// ---------------------------------------------------
// A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0), followed by some number of '1's (also possibly 0.)
//
// We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.
//
// Return the minimum number of flips to make S monotone increasing.
//
// Example 1:
//     Input: "00110"
//     Output: 1
//     Explanation: We flip the last digit to get 00111.
//
// Example 2:
//     Input: "010110"
//     Output: 2
//     Explanation: We flip to get 011111, or alternatively 000111.
//
// Example 3:
//     Input: "00011000"
//     Output: 2
//     Explanation: We flip to get 00000000.
// ---------------------------------------------------

/**
 * @param {string} s
 * @return {number}
 */
function minFlipsMonoIncr(s) {
    let P = [],
        N = s.length;
    
    // Create array with Prefix Sum of ones(total count of 1-s from this element(including) to the left).
    for (let i = 0; i < s.length; i++) {
        let prevP = P[i - 1] || 0;
        P.push(prevP + (s[i] === '1' ? 1 : 0));
    }
    
    let minFlipsCount = N;
    
    // Check how many Zeros first and then Ones is the best answer.
    // Check starting from 0 Zeros to all Zeros.
    for (let i = 0; i <= N; i++) {
        let onesToTheLeftExcl = P[i - 1] || 0;
        // (N - i) is the total amount of characters.
        // (P[N - 1] - P[i - 1]) is the amount of Ones from i-th character till the end
        let zerosToTheRightIncl = N - i - (P[N - 1] - (P[i - 1] || 0));
        
        minFlipsCount = Math.min(onesToTheLeftExcl + zerosToTheRightIncl, minFlipsCount);
    }
    
    return minFlipsCount;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 1
console.log(minFlipsMonoIncr("00110"));
// 2
console.log(minFlipsMonoIncr("010110"));
// 2
console.log(minFlipsMonoIncr("00011000"));
// 4
console.log(minFlipsMonoIncr("01100011001"));
// 5 - flip some one 1 and 4 zeros
console.log(minFlipsMonoIncr("10011111110010111011"));
// 11
console.log(minFlipsMonoIncr("101010111001010000011101101110"));