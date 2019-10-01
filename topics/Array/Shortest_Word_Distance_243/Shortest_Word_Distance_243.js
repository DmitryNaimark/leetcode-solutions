// https://leetcode.com/problems/shortest-word-distance/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
function shortestDistance(words, word1, word2) {
    let minDist = Infinity,
        iWord1,
        iWord2;
    
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1 || words[i] === word2) {
            if (words[i] === word1) {
                iWord1 = i;
            } else {
                iWord2 = i;
            }
            
            if (iWord1 != null && iWord2 != null) {
                minDist = Math.min(Math.abs(iWord1 - iWord2), minDist);
            }
        }
    }
    
    return minDist;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice"));
// 1
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding"));
