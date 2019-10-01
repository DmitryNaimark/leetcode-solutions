// https://leetcode.com/problems/ransom-note/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(Distinct(N)), which is O(26) for a-z.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
    let chCount = new Map();
    for (let ch of magazine) {
        chCount.set(ch, (chCount.get(ch) || 0) + 1);
    }
    
    for (let ch of ransomNote) {
        if (!chCount.has(ch) || chCount.get(ch) < 1) {
            return false;
        }
        chCount.set(ch, chCount.get(ch) - 1);
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
