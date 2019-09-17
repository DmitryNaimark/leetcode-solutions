// https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
// ---------------------------------------------------

// Runtime Complexity: O(chars_length + words_total_lengths), where words_total_lengths is total 
//     number of characters in all the words.
// Space Complexity: O(26) => O(1)
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
function countCharacters(words, chars) {
    let chCount = new Map();
    for (let ch of chars) {
        chCount.set(ch, (chCount.get(ch) || 0) + 1);
    }
    
    let sumOfLengths = 0;
    
    for (let word of words) {
        let tempMap = new Map(chCount),
            goodString = true;
        
        for (let ch of word) {
            if (!tempMap.has(ch) || tempMap.get(ch) === 0) {
                goodString = false;
                break;
            } else {
                tempMap.set(ch, tempMap.get(ch) - 1);
            }
        }
        
        if (goodString) {
            sumOfLengths += word.length;
        }
    }
    
    return sumOfLengths;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 6: cat, hat.
console.log(countCharacters(["cat","bt","hat","tree"], "atach"));
// 10: hello, world
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr"));
