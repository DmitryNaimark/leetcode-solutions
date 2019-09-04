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
        let outputStr = (i % 3 === 0) ? "Fizz" : "";
        
        if (i % 5 === 0) {
            outputStr += "Buzz";
        }
        if (outputStr === "") {
            outputStr = i.toString();
        }
        
        res.push(outputStr);
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(fizzBuzz(15));
