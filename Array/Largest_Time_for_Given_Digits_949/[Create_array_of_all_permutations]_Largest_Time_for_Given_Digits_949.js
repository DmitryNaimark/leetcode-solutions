// https://leetcode.com/problems/largest-time-for-given-digits/
// ---------------------------------------------------
// Given an array of 4 digits, return the largest 24 hour time that can be made.
//
// The smallest 24 hour time is 00:00, and the largest is 23:59.
// Starting from 00:00, a time is larger if more time has elapsed since midnight.
//
// Return the answer as a string of length 5.  If no valid time can be made, return an empty string.
//
// Example 1:
//     Input: [1,2,3,4]
//     Output: "23:41"
//
//
// Example 2:
//     Input: [5,5,5,5]
//     Output: ""
//
//
// Note:
//     A.length == 4
//     0 <= A[i] <= 9
// ---------------------------------------------------
/**
 * @param {number[]} a
 * @return {string}
 */
function largestTimeFromDigits(a) {
    // Sort Descending
    a.sort(function(a, b) {
        return b - a;
    });
    
    // We get permutations in DESCENDING order ([4, 3, 2, 1], then [4, 3, 1, 2], then [4, 2, 3, 1] etc.)
    // Which means that the first valid time is also the largest valid time(we don't need to check every permutation).
    let permutations = getArrayPermutations(a);
    
    for (let p of permutations) {
        let hours = p[0] * 10 + p[1];
        let minutes = p[2] * 10 + p[3];
        
        // If time is valid
        if (hours <= 23 && minutes <= 59) {
            // Return time, since this is the largest valid permutation.
            let resString = '';
            if (hours < 10) {
                resString += '0';
            }
            resString += hours + ':';
            if (minutes < 10) {
                resString += '0';
            }
            resString += minutes;
            return resString;
        }
    }
    
    return '';
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------
function getArrayPermutations(arr) {
    let permutations = [];
    
    getArrayPermutationsRecursively([], arr, permutations);
    
    return permutations;
    
    function getArrayPermutationsRecursively(taken, remaining, permutations) {
        if (remaining.length === 0) {
            permutations.push(taken);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            let newRemaining = spliceWithoutMutation(remaining, i);
            let newTaken = taken.concat(remaining[i]);
            
            getArrayPermutationsRecursively(newTaken, newRemaining, permutations);
        }
    }
}

function spliceWithoutMutation(arr, indexToRemove) {
    if (indexToRemove < 0 || indexToRemove >= arr.length) {
        // Return copy of original array
        return arr.slice();
    }
    
    return arr.slice(0, indexToRemove)
        .concat(arr.slice(indexToRemove + 1));
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "23:41"
console.log(largestTimeFromDigits([1, 2, 3, 4]));
// "23:41"
console.log(largestTimeFromDigits([4, 2, 1, 3]));
// "23:59"
console.log(largestTimeFromDigits([9, 2, 3, 5]));
// "00:00"
console.log(largestTimeFromDigits([0, 0, 0, 0]));
// ""
console.log(largestTimeFromDigits([3, 3, 3, 8]));
