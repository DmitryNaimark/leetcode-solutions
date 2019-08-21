// https://leetcode.com/problems/power-of-three/
// ---------------------------------------------------

// Runtime Complexity: O(log3(n))
// Space Complexity: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    if (n < 1) {
        return false;
    }
    
    while (n >= 3) {
        n /= 3;
    }
    
    return n === 1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true
console.log(isPowerOfThree(1));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(81));
// false
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(10));

