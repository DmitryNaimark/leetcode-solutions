// https://leetcode.com/problems/nim-game/
// ---------------------------------------------------

// Runtime Complexity: O(1)
// Space Complexity: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
function canWinNim(n) {
    // 1 - win
    // 2 - win
    // 3 - win
    // 4 - lose
    // 5 - make 4 - win
    // 6 - make 4 - win
    // 7 - make 4 - win
    // 8 - lose
    // 9 - make 8 - win
    // 10 - make 8 - win
    // 11 - make 8 - win
    // 12 - lose
    // . . .
    return (n % 4 !== 0);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
for (let i = 1; i < 20; i++) {
    console.log(i, canWinNim(i));
}
