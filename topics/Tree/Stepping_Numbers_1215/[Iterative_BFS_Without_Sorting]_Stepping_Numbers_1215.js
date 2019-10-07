// https://leetcode.com/problems/stepping-numbers/
// ---------------------------------------------------

// Runtime Complexity: O(10 * 2^log10(high)) => O(2^log10(high))
// Space Complexity: O(10 * 2^log10(high) / 2) - divided by 2, since we're interested in the "last layer" of bfs tree
//     => 2^log(10)(high) 
/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
function countSteppingNumbers(low, high) {
    let res = [],
        q = [];
    
    // 0 is handled separately, because in the queue it will go by the same path as 1 goes:
    // 0 -> 1 -> 12 -> . . .
    if (low === 0) {
        res.push(0);
    }
    
    for (let i = 1; i < 10; i++) {
        q.push(i);
    }
    
    while (q.length > 0) {
        console.log(q.length);
        let num = q.shift();
        
        if (num >= low && num <= high) {
            res.push(num);
        }
        if (num >= high) {
            continue;
        }
        
        let lastDigit = num % 10;
        if (lastDigit > 0) {
            q.push(num * 10 + lastDigit - 1);
        }
        if (lastDigit < 9) {
            q.push(num * 10 + lastDigit + 1);
        }
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [0,1,2,3,4,5,6,7,8,9,10,12,21]
console.log(countSteppingNumbers(0, 21));
// countSteppingNumbers(0, 100);
