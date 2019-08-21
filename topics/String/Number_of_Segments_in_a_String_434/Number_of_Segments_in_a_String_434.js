// https://leetcode.com/problems/number-of-segments-in-a-string/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {string} s
 * @return {number}
 */
function countSegments(s) {
    let res = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ' && (s[i - 1] === ' ' || i === 0)) {
            res++;
        }
    }
    
    return res;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 5
console.log(countSegments("    Hello, my name is John    "));
