// https://leetcode.com/problems/excel-sheet-column-number/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {string} s
 * @return {number}
 */
function titleToNumber(s) {
    // Or, we could just pre-generate this map/object.
    let charCodeMap = generateCharCodeMap();
    
    let bit = 0,
        sum = 0;
    for (let iCh = s.length - 1; iCh >= 0; iCh--) {
        sum += charCodeMap.get(s[iCh]) * Math.pow(26, bit);
        bit++;
    }
    
    return sum;
}

function generateCharCodeMap() {
    let charCodeMap = new Map();
    
    let curCharCode = 'A'.charCodeAt(0);
    for (let i = 1; i <= 26; i++) {
        charCodeMap.set(String.fromCharCode(curCharCode), i);
        curCharCode++;
    }
    
    return charCodeMap;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 1
console.log(titleToNumber("A"));
// 28
console.log(titleToNumber("AB"));
// 701
console.log(titleToNumber("ZY"));
