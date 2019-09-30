// https://leetcode.com/problems/count-primes/
// ---------------------------------------------------

// Runtime Complexity: O(n log log n) ?
//     Time Complexity is not very clear, even according to https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
// Space Complexity: O(N)
/**
 * @param {number} n
 * @return {number}
 */
function countPrimes(n) {
    let primesCount = 0;
    
    let prime = new Array(n).fill(true);
    prime[0] = false;
    prime[1] = false;
    
    for (let i = 2; i < n; i++) {
        if (prime[i]) {
            primesCount++;
            
            for (let j = 2; i * j < n; j++) {
                prime[i * j] = false;
            }
        }
    }
    
    return primesCount;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 4
console.log(countPrimes(10));
// 9
console.log(countPrimes(26));
