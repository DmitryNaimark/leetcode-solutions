// https://leetcode.com/problems/hamming-distance/
// ---------------------------------------------------

// Runtime Complexity: O(1)
// Space Complexity: O(1)
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
    let xor = x ^ y,
        hammingDist = 0;
    
    while (xor > 0) {
        hammingDist++;
        xor &= (xor - 1);
    }
    
    return hammingDist;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 2
console.log(hammingDistance(7, 1));
// 16
console.log(hammingDistance(1577962638, 1727613287));
// 19
console.log(hammingDistance(680142203, 1111953568));
