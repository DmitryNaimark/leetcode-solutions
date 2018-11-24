// https://leetcode.com/problems/reorder-log-files/
// ---------------------------------------------------
// You have an array of logs.  Each log is a space delimited string of words.
//
// For each log, the first word in each log is an alphanumeric identifier.  Then, either:
//     Each word after the identifier will consist only of lowercase letters, or;
//     Each word after the identifier will consist only of digits.
//
// We will call these two varieties of logs letter-logs and digit-logs.
// It is guaranteed that each log has at least one word after its identifier.
//
// Reorder the logs so that all of the letter-logs come before any digit-log.
// The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.
// The digit-logs should be put in their original order.
// Return the final order of the logs.
//
// Example 1:
//     Input: ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
//     Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
//
// Note:
//     0 <= logs.length <= 100
//     3 <= logs[i].length <= 100
//     logs[i] is guaranteed to have an identifier, and a word after the identifier.
// ---------------------------------------------------

/**
 * @param {string[]} logs
 * @return {string[]}
 */
function reorderLogFiles(logs) {
    let numsArr = [];
    
    for (let i = 0; i < logs.length; i++) {
        let log = logs[i];
        let iFirstChar = log.indexOf(' ') + 1;
        
        if (isDigit(log[iFirstChar])) {
            numsArr.push(log);
            
            // Remove numeric log from original array.
            logs.splice(i, 1);
            i--;
        }
    }
    
    return logs.sort(comparer).concat(numsArr);
}

function isDigit(ch) {
    return ch >= '0' && ch <= '9';
}

function comparer(str1, str2) {
    let substr1 = str1.substring(str1.indexOf(' ') + 1);
    let substr2 = str2.substring(str2.indexOf(' ') + 1);
    
    if (substr1 > substr2) {
        return 1;
    } else if (substr1 < substr2) {
        return -1;
    } else {
        // Compare by identifiers(which come first in the string).
        if (str1 > str2) {
            return 1;
        } else {
            return -1;
        }
    }
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// ["g1 act car", "a8 act zoo", "ab1 off key dog", "a1 9 2 3 1", "zo4 4 7"]
console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));

// Sort same substrings by identifier(first characters).
// ["a1 abc def", "a2 abc def"]
console.log(reorderLogFiles(["a2 abc def", "a1 abc def"]));