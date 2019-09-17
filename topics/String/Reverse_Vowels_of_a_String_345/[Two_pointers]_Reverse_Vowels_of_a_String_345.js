// https://leetcode.com/problems/reverse-vowels-of-a-string/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N), since we've created "chars" array instead of string to increase Runtime Complexity,
//     since strings are immutable.
/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
    let chars = s.split(''),
        i = 0,
        j = s.length - 1;
    
    while (i < j) {
        while (i < j && !vowels.has(chars[i])) {
            i++;
        }
        while (i < j && !vowels.has(chars[j])) {
            j--;
        }
        
        if (i < j) {
            // Swap
            let temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
            
            i++;
            j--;
        }
    }
    
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
