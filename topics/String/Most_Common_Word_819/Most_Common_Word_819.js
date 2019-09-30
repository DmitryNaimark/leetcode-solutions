// https://leetcode.com/problems/most-common-word/
// ---------------------------------------------------

// Runtime Complexity: O(paragraph + banned)
// Space Complexity: O(Distinct(words)) => O(words) in worst case
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
function mostCommonWord(paragraph, banned) {
    // It's possible to split by [^a-zA-Z] - *not* characters.
    // After split there could be a '' string, it can be handled via .filter or checked later.
    let words = paragraph.split(/[ !?',;.]+/).map(str => str.toLowerCase());
    
    let wordCount = new Map(),
        mostFreqWord,
        mostFreqCount = 0,
        bannedWordsSet = new Set(banned);
    
    for (let word of words) {
        if (word !== '' && !bannedWordsSet.has(word)) {
            let newWordCount = (wordCount.get(word) || 0) + 1;
            wordCount.set(word, newWordCount);
            
            if (newWordCount > mostFreqCount) {
                mostFreqCount = newWordCount;
                mostFreqWord = word;
            }
        }
    }
    
    return mostFreqWord;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "ball"
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
