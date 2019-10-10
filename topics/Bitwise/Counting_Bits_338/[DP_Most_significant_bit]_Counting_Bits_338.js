// https://leetcode.com/problems/counting-bits/
// ---------------------------------------------------

// Runtime Complexity: O(num)
// Space Complexity: O(num)
/**
 * @param {number} num
 * @return {number[]}
 */
function countBits(num) {
    let ans = new Array(num + 1).fill(0);
    let i = 0,
        b = 1;
    
    while (b <= num) {
        while (i < b && i + b <= num) {
            // console.log(i, b);
            ans[i + b] = ans[i] + 1;
            i++;
        }
        i = 0;
        b <<= 1;
    }
    
    return ans;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [0, 1, 1]
console.log(countBits(2));
// [0, 1, 1, 2, 1, 2]
console.log(countBits(5));
