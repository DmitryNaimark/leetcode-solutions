// https://leetcode.com/problems/first-unique-character-in-a-string/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(Distinct(N))
/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
    let chPositionMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (chPositionMap.has(s[i])) {
            chPositionMap.set(s[i], -1);
        } else {
            chPositionMap.set(s[i], i);
        }
    }
    
    let minPos = Number.MAX_SAFE_INTEGER;
    for (let [ch, pos] of chPositionMap.entries()) {
        if (pos >= 0) {
            minPos = Math.min(minPos, pos);
        }
    }
    
    return minPos === Number.MAX_SAFE_INTEGER ? -1 : minPos;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 0
console.log(firstUniqChar("leetcode"));
// 2
console.log(firstUniqChar("loveleetcode"));
// -1
console.log(firstUniqChar("somesome"));
