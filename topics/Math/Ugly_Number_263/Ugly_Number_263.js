// https://leetcode.com/problems/ugly-number/
// ---------------------------------------------------

// Runtime Complexity: O(log2(N) + log3(N) + log5(N)) => O(log(N))
// Space Complexity: O(1)
/**
 * @param {number} num
 * @return {boolean}
 */
function isUgly(num) {
    for (let uglyPrime of [2, 3, 5]) {
        // Keep dividing by all ugly primes specified.
        while (num > 0 && num % uglyPrime === 0) {
            num /= uglyPrime;
        }
    }
    
    return num === 1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true (ugly)
console.log(isUgly(1));
console.log(isUgly(2));
console.log(isUgly(3));
console.log(isUgly(5));
console.log(isUgly(6));
console.log(isUgly(8));
console.log(isUgly(20));
console.log(isUgly(4));

// false (not ugly)
console.log(isUgly(0));
console.log(isUgly(7));
console.log(isUgly(42));
console.log(isUgly(49));

