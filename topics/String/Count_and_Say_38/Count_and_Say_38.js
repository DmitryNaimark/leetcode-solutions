// https://leetcode.com/problems/count-and-say/
// ---------------------------------------------------

// Runtime Complexity: 
//     O(N * M), where M is the length of previous sequence (average/max sequence length?)
//     OR, according to this video: https://www.youtube.com/watch?v=LpjX3kHXcR0, it's
//     O(1.3 ^ k), where is the length of n-th string.
// Space Complexity: O(longest_k)
/**
 * @param {number} n
 * @return {string}
 */
function countAndSay(n) {
    let numStr = "1",
        res = "";
    for (let i = 2; i <= n; i++) {
        numStr = getCountAndSayString(numStr);
    }
    
    return numStr;
}

function getCountAndSayString(numStr) {
    let numCount = 0,
        res = '';
    
    for (let i = 0; i < numStr.length; i++) {
        if (i > 0 && numStr[i] !== numStr[i - 1]) {
            res += `${numCount}${numStr[i - 1]}`;
            numCount = 1;
        } else {
            numCount++;
        }
    }
    res += `${numCount}${numStr[numStr.length - 1]}`;
    
    return res;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(countAndSay(1));
console.log(countAndSay(2));
console.log(countAndSay(3));
console.log(countAndSay(4));
console.log(countAndSay(5));
console.log(countAndSay(6));
