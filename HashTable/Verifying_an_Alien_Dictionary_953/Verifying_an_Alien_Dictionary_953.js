// https://leetcode.com/problems/verifying-an-alien-dictionary/
// ---------------------------------------------------
// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order.
// The order of the alphabet is some permutation of lowercase letters.
//
// Given a sequence of words written in the alien language, and the order of the alphabet,
// return true if and only if the given words are sorted lexicographicaly in this alien language.
//
//
// Example 1:
//     Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
//     Output: true
//     Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
//
//
// Example 2:
//     Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
//     Output: false
//     Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
//
// Example 3:
//     Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
//     Output: false
//     Explanation: The first three characters "app" match, and the second string is shorter (in size.)
//         According to lexicographical rules "apple" > "app", because 'l' > '∅',
//         where '∅' is defined as the blank character which is less than any other character (More info).
//
//
// Note:
//     1 <= words.length <= 100
//     1 <= words[i].length <= 20
//     order.length == 26
//     All characters in words[i] and order are english lowercase letters.
// ---------------------------------------------------

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
function isAlienSorted(words, order) {
    let mapOrder = new Map();
    for (let i = 0; i < order.length; i++) {
        mapOrder.set(order[i], i);
    }
    mapOrder.set(undefined, -1);
    
    for (let iWord = 0; iWord < words.length - 1; iWord++) {
        if (compareWords(words[iWord], words[iWord + 1], mapOrder) > 0) {
            return false;
        }
    }
    
    return true;
}

function compareWords(word1, word2, mapOrder) {
    let minLengthToCompare = Math.min(word1.length, word2.length) + 1;
    
    for (let i = 0; i < minLengthToCompare; i++) {
        let ch1Value = mapOrder.get(word1[i]),
            ch2Value = mapOrder.get(word2[i]);
        
        if (ch1Value > ch2Value) {
            return 1;
        } else if (ch1Value < ch2Value) {
            return -1;
        }
    }
    
    return 0;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true
console.log(isAlienSorted(["hello","leetcode"], "hlabcdefgijkmnopqrstuvwxyz"));
// false
console.log(isAlienSorted(["word","world","row"], "worldabcefghijkmnpqstuvxyz"));
// false
console.log(isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz"));
