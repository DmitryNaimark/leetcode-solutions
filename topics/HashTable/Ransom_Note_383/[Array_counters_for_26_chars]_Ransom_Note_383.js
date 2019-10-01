// https://leetcode.com/problems/ransom-note/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(26) => O(1)
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    let chCount = new Array(26).fill(0),
        aCode = 'a'.charCodeAt(0);
    
    for (let ch of magazine) {
        chCount[ch.charCodeAt(0) - aCode]++;
    }
    
    for (let ch of ransomNote) {
        if (--chCount[ch.charCodeAt(0) - aCode] < 0) {
            return false;
        }
    }
    
    return true;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// false
console.log(canConstruct("a", "b"));
// false
console.log(canConstruct("aa", "ab"));
// true
console.log(canConstruct("aa", "aab"));
