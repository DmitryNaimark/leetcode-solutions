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
    let longest = {
        i: 0,
        j: 0
    };
    
    for (let i = 0; i < s.length; i++) {
        expandFromCenter(s, i, i, longest);
        expandFromCenter(s, i, i + 1, longest);
    }
    
    return s.substring(longest.i, longest.j + 1);
}

function expandFromCenter(s, i, j, longest) {
    let matchedOnce = false;
    
    while (s[i] !== undefined && s[i] === s[j]) {
        i--;
        j++;
        matchedOnce = true;
    }
    
    if (matchedOnce) {
        if (j - i - 2 > longest.j - longest.i) {
            longest.i = i + 1;
            longest.j = j - 1;
        }
    }
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