// https://leetcode.com/problems/reverse-vowels-of-a-string/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N + vowels_stack) => O(N), since we've created "chars" array instead of string to increase Runtime Complexity,
//     since strings are immutable.
/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    let chars = s.split(''),
        vowelsStack = [];
    
    for (let i = 0; i < chars.length; i++) {
        if (vowels.has(chars[i])) {
            vowelsStack.push(chars[i]);
        }
    }
    
    for (let i = 0; i < chars.length; i++) {
        if (vowels.has(chars[i])) {
            chars[i] = vowelsStack.pop();
        }
    }
    
    // OR, we could go from the end, taking items from the bottom of the array (it's queue then, since it's FIFO).
    // for (let i = chars.length - 1; i >= 0; i--) {
    //     if (vowels.has(chars[i])) {
    //         chars[i] = vowelsStack.shift();
    //     }
    // }
    
    return chars.join('');
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
