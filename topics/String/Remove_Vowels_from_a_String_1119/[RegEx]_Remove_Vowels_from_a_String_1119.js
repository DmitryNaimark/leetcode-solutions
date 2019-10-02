// https://leetcode.com/problems/remove-vowels-from-a-string/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: probably O(N), since internally replace function probably uses temporary array.
//     Otherwise, since string is immutable
/**
 * @param {string} S
 * @return {string}
 */
function removeVowels(S) {
    return S.replace(/[aeiou]/g, '');
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "ltcdscmmntyfrcdrs"
console.log(removeVowels("leetcodeisacommunityforcoders"));
// ""
console.log(removeVowels("aeiou"));
