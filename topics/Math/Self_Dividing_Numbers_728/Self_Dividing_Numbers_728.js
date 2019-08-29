// https://leetcode.com/problems/self-dividing-numbers/
// ---------------------------------------------------

// Runtime Complexity: O(?)
// Space Complexity: O(?)
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
function selfDividingNumbers(left, right) {
    let selfDividingNumbers = [];
    
    for (let number = left; number <= right; number++) {
        if (isSelfDividingNumber(number)) {
            selfDividingNumbers.push(number);
        }
    }
    
    return selfDividingNumbers;
}

function isSelfDividingNumber(number) {
    let originalNumber = number;
    
    while (number > 0) {
        let digit = number % 10;
        
        if (digit === 0 || (originalNumber % digit !== 0)) {
            return false;
        }
        
        // Or number = Math.floor(number / 10);
        number = (number - digit) / 10;
    }
    
    return true;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
console.log(selfDividingNumbers(1, 22));
