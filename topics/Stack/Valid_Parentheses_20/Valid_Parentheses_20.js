// https://leetcode.com/problems/valid-parentheses/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // If string length is odd, there is no way it is valid.
    if (s.length % 2 !== 0) {
        return false;
    }
    
    let brStack = [];
    
    for (let brace of s) {
        if (isOpenedBrace(brace)) {
            brStack.push(brace);
        } else {
            if (brStack.length > 0 && brStack[brStack.length - 1] === getOpenedBraceForClosed(brace)) {
                brStack.pop();
            } else {
                return false;
            }
        }
    }
    
    return brStack.length === 0;
}

function isOpenedBrace(brace) {
    const openedBracesSet = new Set(['{', '[', '(']);
    
    return openedBracesSet.has(brace);
}

function getOpenedBraceForClosed(closedBrace) {
    const openedBraceForClosed = new Map([['}', '{'], [')', '('], [']', '[']]);
    
    return openedBraceForClosed.get(closedBrace);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
