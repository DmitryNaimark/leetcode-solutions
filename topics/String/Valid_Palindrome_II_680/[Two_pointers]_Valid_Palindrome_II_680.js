// https://leetcode.com/problems/valid-palindrome-ii/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
    for (let iLeft = 0, iRight = s.length - 1; iLeft < iRight; iLeft++, iRight--) {
        if (s[iLeft] !== s[iRight]) {
            return isPalindrome(s, iLeft + 1, iRight) || isPalindrome(s, iLeft, iRight - 1);
        }
    }
    
    return true;
}

function isPalindrome(s, iLeft, iRight) {
    while (iLeft < iRight) {
        if (s[iLeft] === s[iRight]) {
            iLeft++;
            iRight--;
        } else {
            return false;
        }
    }
    
    return true;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true
console.log(validPalindrome("aba"));
// true
console.log(validPalindrome("abca"));
// true
console.log(validPalindrome("abcba"));
// true
console.log(validPalindrome("abcdba"));
// false
console.log(validPalindrome("aacdebb"));
