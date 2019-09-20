// https://leetcode.com/problems/to-lower-case/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N) for chars array.
/**
 * @param {string} str
 * @return {string}
 */
function toLowerCase(str) {
    let chars = str.split('');
    
    for (let i = 0; i < chars.length; i++) {
        let charCode = chars[i].charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            chars[i] = String.fromCharCode(charCode + 32);
        }
    }
    
    return chars.join('');
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "jumping message!"
console.log(toLowerCase('JuMPing MesSage!'));
