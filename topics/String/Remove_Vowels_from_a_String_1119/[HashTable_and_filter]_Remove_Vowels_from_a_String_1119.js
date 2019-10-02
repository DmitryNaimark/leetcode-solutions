// https://leetcode.com/problems/remove-vowels-from-a-string/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N), since we create temporary array of chars.
/**
 * @param {string} S
 * @return {string}
 */
function removeVowels(S) {
    let vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    
    return S.split('')
        .filter(ch => !vowelsSet.has(ch))
        .join('');
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "ltcdscmmntyfrcdrs"
console.log(removeVowels("leetcodeisacommunityforcoders"));
// ""
console.log(removeVowels("aeiou"));
