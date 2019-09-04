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
    let wordForNumberMap = new Map([
        [3, "Fizz"],
        [5, "Buzz"]
    ]);
    
    for (let i = 1; i <= n; i++) {
        let outputStr = "";
        
        for (let [divisor, word] of wordForNumberMap.entries()) {
            if (i % divisor === 0) {
                outputStr += word;
            }
        }
        
        res.push(outputStr || i.toString());
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(fizzBuzz(15));
