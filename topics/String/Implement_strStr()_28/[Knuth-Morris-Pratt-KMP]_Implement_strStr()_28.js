// https://leetcode.com/problems/implement_strstr()/
// ---------------------------------------------------

// Runtime Complexity: O(long + short)
// Space Complexity: O(short)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    
    let iHaystack = 0;
    let iNeedle = 0;
    
    const patternTable = buildPatternTable(needle);
    
    while (iHaystack < haystack.length) {
        if (haystack[iHaystack] === needle[iNeedle]) {
            // Needle(pattern) was found in Haystack(string)
            if (iNeedle === needle.length - 1) {
                return (iHaystack - needle.length) + 1;
            }
            
            iNeedle++;
            iHaystack++;
        } else if (iNeedle > 0) {
            iNeedle = patternTable[iNeedle - 1];
        } else {
            iNeedle = 0;
            iHaystack += 1;
        }
    }
    
    return -1;
}

function buildPatternTable(str) {
    let patternTable = new Array(str.length + 1).fill(0);
    let iPrefix = 0;
    let iSuffix = 1;
    
    while (iSuffix < str.length) {
        if (str[iPrefix] === str[iSuffix]) {
            patternTable[iSuffix] = iPrefix + 1;
            iSuffix++;
            iPrefix++;
        } else if (iPrefix === 0) {
            iSuffix += 1;
        } else {
            // Move to previous spot for previous matching character.
            iPrefix = patternTable[iPrefix - 1];
        }
    }
    
    return patternTable;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("sentence", "ten"));
console.log(strStr("", "a"));
console.log(strStr("aa", "aaa"));
console.log(strStr("mississippi", "issip"));
console.log(strStr("blam blablacar", "blabla"));
console.log(strStr("aabaaabaaac", "aabaaac"));
