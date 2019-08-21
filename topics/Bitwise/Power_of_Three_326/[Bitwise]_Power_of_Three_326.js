// https://leetcode.com/problems/power-of-three/
// ---------------------------------------------------

// Runtime Complexity: O(1)
// Space Complexity: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    if (n < 1) {
        return false;
    }
    
    // The problem states that we'd only use signed 32bit numbers.
    // This is the max. number we could have in this problem.
    const maxSigned32BitNumber = Math.pow(2, 32);
    
    // This is the max number, which is a power of 3 and at the same time it's <= maxSigned32BitNumber.
    const maxPowerOfTreeSigned32Bit = Math.pow(3, 20);
    
    // We can use modulo only because the base if prime(3), we wouldn't use it if base is 4, 6 etc.
    return (maxPowerOfTreeSigned32Bit % n === 0);
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
console.log(isPowerOfThree(-1));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(2));
console.log(isPowerOfThree(10));

