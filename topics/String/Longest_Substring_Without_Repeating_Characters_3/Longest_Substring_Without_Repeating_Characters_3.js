// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
// ---------------------------------------------------
// Given a string, find the length of the longest substring without repeating characters.
//
// Example 1:
//     Input: "abcabcbb"
//     Output: 3
//     Explanation: The answer is "abc", with the length of 3.
//
// Example 2:
//     Input: "bbbbb"
//     Output: 1
//     Explanation: The answer is "b", with the length of 1.
//
// Example 3:
//     Input: "pwwkew"
//     Output: 3
//     Explanation: The answer is "wke", with the length of 3.
//
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
// ---------------------------------------------------

// My first slower solution.
/**
 * @param {string} s
 * @return {number}
 */
// function lengthOfLongestSubstring(s) {
//     // if (s.length === 0) {
//     //     return 0;
//     // }
//
//     let maxLength = 0,
//         mapCh = new Map(),
//         substringStart = 0;
//
//     for (let i = 0; i < s.length; i++) {
//         if (!mapCh.has(s.charAt(i))) {
//             mapCh.set(s.charAt(i), i);
//         } else {
//             maxLength = Math.max(i - substringStart, maxLength);
//             substringStart = mapCh.get(s.charAt(i)) + 1;
//             i = substringStart - 1;
//             mapCh.clear();
//         }
//     }
//
//     let earliestCh = s.length - 1;
//     for (let i of mapCh.values()) {
//         earliestCh = Math.min(i, earliestCh);
//     }
//
//     maxLength = Math.max(s.length - earliestCh, maxLength);
//
//     return maxLength;
// }

// Faster solution(original idea isn't mine)
/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let maxLength = 0,
        mapCh = new Map(),
        substringStart = 0;

    for (let i = 0; i < s.length; i++) {
        if (mapCh.has(s[i]) && mapCh.get(s[i]) >= substringStart) {
            substringStart = mapCh.get(s[i]) + 1;
        } else {
            maxLength = Math.max(i - substringStart + 1, maxLength);
        }
    
        mapCh.set(s[i], i);
    }

    return maxLength;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(lengthOfLongestSubstring("abcabcbb"));
// 1
console.log(lengthOfLongestSubstring("bbbbb"));
// 3
console.log(lengthOfLongestSubstring("pwwkew"));
// 3
console.log(lengthOfLongestSubstring("dvdf"));
// 0
console.log(lengthOfLongestSubstring(""));
// 2
console.log(lengthOfLongestSubstring('abba'));
// 5
console.log(lengthOfLongestSubstring('tmmzuxt'));
// 4
console.log(lengthOfLongestSubstring('abcd'));