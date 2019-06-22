// https://leetcode.com/problems/longest-common-prefix/description/
// ---------------------------------------------------
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
// Note:
//
// All given inputs are in lowercase letters a-z.
// ---------------------------------------------------

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let commonPrefix = '';
    
    if (strs.length > 0) {
        let i = 0;
        while (i < strs[0].length) {
            let currentChar = strs[0][i];
            
            for (let k = 1; k < strs.length; k++) {
                if (strs[k][i] !== currentChar) {
                    return commonPrefix;
                }
            }
            
            commonPrefix += currentChar;
            i++;
        }
    }
    
    return commonPrefix;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));