// https://leetcode.com/problems/number-of-segments-in-a-string/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {string} s
 * @return {number}
 */
function countSegments(s) {
    // .trim() 
    // is the same as replacing spaces at the start and at the end. 
    // .replace(/^ *| *$/g, '') 
    s = s.trim();
    if (s === '') {
        return 0;
    }
    
    return s.split(/ +/).length;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 5
console.log(countSegments("    Hello, my name is John    "));
// 0
console.log(countSegments(""));
