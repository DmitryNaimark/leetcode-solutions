// https://leetcode.com/problems/implement-strstr()/
// ---------------------------------------------------

// Runtime Complexity: O(long + short) - see CTCI, page 649
// Space Complexity: O(long), but we can do it in O(1) if we won't create helper function "createRabinKarpHashSums" and
//     calculate hash sum while iterating.
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (needle === '') {
        return 0;
    }
    if (needle.length > haystack.length) {
        return -1;
    }
    
    let hashSums = createRabinKarpHashSums(haystack, needle.length);
    let needleHashSum = createRabinKarpHashSums(needle, needle.length)[0];
    
    for (let i = 0; i < hashSums.length; i++) {
        if (hashSums[i] === needleHashSum && 
            compareStringsWithOffset(haystack, i, needle)) 
        {
            return i;
        }
    }
    
    return -1;
}
// It's possible to calculate hashsum on the go(while iterating over haystack).
// This way we won't use additional O(long) space, but I'll keep this function, since it's cleaner this way.
function createRabinKarpHashSums(str, charsCount) {
    let arr = new Array(str.length - charsCount + 1);
    let curHash = 0;
    
    for (let i = 0; i < charsCount; i++) {
        curHash += str[i].charCodeAt(0);
    }
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = curHash;
        
        let newCharHashValue = i + charsCount < str.length 
            ? str[i + charsCount].charCodeAt(0) 
            : 0;
        
        curHash = curHash - str[i].charCodeAt(0) + newCharHashValue;
    }
    
    return arr;
}

function compareStringsWithOffset(haystack, iHaystack, needle) {
    for (let iNeedle = 0; iNeedle < needle.length; iNeedle++, iHaystack++) {
        if (needle[iNeedle] !== haystack[iHaystack]) {
            return false;
        }
    }
    
    return true;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "bba"));
console.log(strStr("sentence", "ten"));
console.log(strStr("", "a"));
console.log(strStr("aa", "aaa"));
