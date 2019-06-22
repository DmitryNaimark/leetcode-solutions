// https://leetcode.com/problems/longest-palindromic-substring/description/
// ---------------------------------------------------
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//     Input: "babad"
//     Output: "bab"
//     Note: "aba" is also a valid answer.
//
// Example 2:
//     Input: "cbbd"
//     Output: "bb"
// ---------------------------------------------------

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let longestPalindrome = s[0] || '';
    
    for (let i = 0; i < s.length; i++) {
        let dist = 1;
        
        // Check odd-length palindromes
        while (s[i + dist] !== undefined && s[i + dist] === s[i - dist]) {
            dist++;
        }
        if (dist > 1) {
            dist--;
            if ((i + dist) - (i - dist) + 1 > longestPalindrome.length) {
                longestPalindrome = s.substring(i - dist, i + dist + 1);
            }
        }
        
        dist = 0;
        // Check even-length palindromes
        while (s[i - dist] !== undefined && s[i - dist] === s[i + 1 + dist]) {
            dist++;
        }
        if (dist > 0) {
            dist--;
            
            if ((i + 1 + dist) - (i - dist) + 1 > longestPalindrome.length) {
                longestPalindrome = s.substring(i - dist, i + dist + 2);
            }
        }
    }
    
    return longestPalindrome;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "bab" or "aba"
console.log(longestPalindrome('babad'));
// "bb"
console.log(longestPalindrome('cbbd'));
// "labal"
console.log(longestPalindrome('slabalz'));
// "paap"
console.log(longestPalindrome('apaapz'));
// "olo"
console.log(longestPalindrome('holol'));
// "ololo"
console.log(longestPalindrome('ololo'));
// "abba" or "appa"
console.log(longestPalindrome('abbakappa'));
// "a"
console.log(longestPalindrome('a'));
// ""
console.log(longestPalindrome(''));