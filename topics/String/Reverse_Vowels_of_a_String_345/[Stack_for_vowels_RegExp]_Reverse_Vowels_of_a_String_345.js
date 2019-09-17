// https://leetcode.com/problems/reverse-vowels-of-a-string/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N + vowels_stack) => O(N), since internally "replace" probably uses array of chars.
//     If it uses string, than runtime would be worse than O(N).
/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    let vowels = s.match(/[aeiou]/gi);
    return s.replace(/[aeiou]/gi, () => vowels.pop());
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "holle"
console.log(reverseVowels("hello"));
// "leotcede"
console.log(reverseVowels("leetcode"));
// "Yo! Bottoms Up, u.S. Motto, boy!"
console.log(reverseVowels("Yo! Bottoms up, U.S. Motto, boy!"));
