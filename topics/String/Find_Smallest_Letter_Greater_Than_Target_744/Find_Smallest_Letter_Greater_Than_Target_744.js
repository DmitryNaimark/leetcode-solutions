// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
// ---------------------------------------------------

// Runtime Complexity: O(log(N))
// Space Complexity: O(1)
/**
 * @param {string[]} letters
 * @param {string} target
 * @return {string}
 */
function nextGreatestLetter(letters, target) {
    if (target >= letters[letters.length - 1]) {
        return letters[0];
    }
    
    let iLeft = -1,
        iRight = letters.length;
    
    // Invariants:
    // Binary search has 3 "ranges":
    //     - [-Infinity, iLeft] <= target
    //     - [iRight..Infinity] > target
    //     - Elements between iLeft and iRight - remain to be inspected and moved to the right or left range.    
    while (iRight - iLeft > 1) {
        let iMid = iLeft + Math.floor((iRight - iLeft) / 2);
        
        if (letters[iMid] <= target) {
            iLeft = iMid;
        } else {
            iRight = iMid;
        }
    }
    
    return letters[iRight];
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 'c'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'));
// 'f'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
// 'f'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'd'));
// 'j'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'g'));
// 'j'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'j'));
// 'k'
console.log(nextGreatestLetter(['c', 'f', 'j'], 'k'));

