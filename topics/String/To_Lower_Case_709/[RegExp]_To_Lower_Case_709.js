// https://leetcode.com/problems/to-lower-case/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N), since I assume .replace uses char array for efficiency.
/**
 * @param {string} str
 * @return {string}
 */
function toLowerCase(str) {
    return str.replace(/[A-Z]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) + 32));
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "jumping message!"
console.log(toLowerCase('JuMPing MesSage!'));
