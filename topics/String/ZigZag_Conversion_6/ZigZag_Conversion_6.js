// https://leetcode.com/problems/zigzag-conversion/description/
// ---------------------------------------------------
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
//
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string s, int numRows);
//
// Example 1:
//     Input: s = "PAYPALISHIRING", numRows = 3
//     Output: "PAHNAPLSIIGYIR"
//
// Example 2:
//     Input: s = "PAYPALISHIRING", numRows = 4
//     Output: "PINALSIGYAHRPI"
//     Explanation:
//         P     I    N
//         A   L S  I G
//         Y A   H R
//         P     I
// ---------------------------------------------------

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows === 1) {
        return s
    }
    
    let iLine = 0,
        direction = 1,
        strings = [];
    
    for (let i = 0; i < numRows; i++) {
        strings[i] = '';
    }
    
    for (let ch of s) {
        strings[iLine] += ch;
        
        if (iLine === 0) {
            direction = 1;
        } else if (iLine === numRows - 1) {
            direction = -1;
        }
        
        iLine += direction;
    }
    
    let resString = '';
    for (let i = 0; i < numRows; i++) {
        resString += strings[i];
    }
    
    return resString;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 'PAHNAPLSIIGYIR'
console.log(convert('PAYPALISHIRING', 3));
// 'PINALSIGYAHRPI'
console.log(convert('PAYPALISHIRING', 4));