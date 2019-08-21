// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    return s.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
    
    // Longer version:
    // let words = s.split(' ');
    //
    // for (let i = 0; i < words.length; i++) {
    //     words[i] = words[i].split('').reverse().join('');
    // }
    //
    // return words.join(' ');
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "s'teL ekat edoCteeL tsetnoc"
console.log(reverseWords("Let's take LeetCode contest"));
