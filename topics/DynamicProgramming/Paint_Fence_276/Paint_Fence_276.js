// https://leetcode.com/problems/paint-fence/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function numWays(n, k) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return k;
    }
    
    let sameColor = k;
    let diffColor = k * (k - 1);
    
    for (let i = 2; i < n; i++) {
        let tmp = diffColor;
        diffColor = (sameColor + diffColor) * (k - 1);
        sameColor = tmp;
    }
    
    return sameColor + diffColor;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 6
console.log(numWays(3, 2));
