// https://leetcode.com/problems/flip-game/
// ---------------------------------------------------

// Runtime Complexity: O(N^2), since we're also using substring.
// Space Complexity: O(N) for substrings (if we don't count res for the Space).
/**
 * @param {string} s
 * @return {string[]}
 */
function generatePossibleNextMoves(s) {
    let res = [];
    
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '+' && s[i + 1] === '+') {
            res.push(s.substring(0, i) + '--' + s.substring(i + 2));
        }
    }
    
    return res;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// ["--++", "+--+", "++--"]
console.log(generatePossibleNextMoves('++++'));
