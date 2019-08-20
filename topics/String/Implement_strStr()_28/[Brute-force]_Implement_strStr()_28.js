// https://leetcode.com/problems/implement_strstr()/
// ---------------------------------------------------

// Runtime Complexity: O((long - short + 1) * short) 
//                  => O((long - short) * short)
// Space Complexity: O(1)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (needle === '') {
        return 0;
    } else if (needle.length > haystack.length) {
        return -1;
    }
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        for (let iH = i, iN = 0; iN < needle.length; iH++, iN++) {
            if (haystack[iH] !== needle[iN]) {
                break;
            }
            
            if (iN === needle.length - 1) {
                return i;
            }
        }
    }
    
    return -1;
}

// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("sentence", "ten"));
console.log(strStr("", "a"));
console.log(strStr("aa", "aaa"));
