// https://leetcode.com/problems/fizz-buzz/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1), res array isn't counted(it seems, according to official solution).
/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
    
    let res = [];
    
    for (let i = 1; i <= n; i++) {
        let isMultipleOf3 = (i % 3 === 0),
            isMultipleOf5 = (i % 5 === 0);
        
        // This can be changed to i % 15, since 3 and 5 are prime numbers (I think).
        if (isMultipleOf3 && isMultipleOf5) {
            res.push("FizzBuzz");
        } else if (isMultipleOf3) {
            res.push("Fizz");
        } else if (isMultipleOf5) {
            res.push("Buzz");
        } else {
            res.push(i.toString());
        }
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(fizzBuzz(15));
