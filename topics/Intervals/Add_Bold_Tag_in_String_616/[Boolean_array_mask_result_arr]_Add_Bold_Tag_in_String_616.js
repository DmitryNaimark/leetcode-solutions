// https://leetcode.com/problems/add-bold-tag-in-string/
// ---------------------------------------------------

// Runtime Complexity: O(s * sum(dict_words))
// Space Complexity: O(N)
/**
 * @param {string} s
 * @param {string[]} dict
 * @return {string}
 */
function addBoldTag(s, dict) {
    let bolds = new Array(s.length).fill(false);
    
    for (let word of dict) {
        let iStart;
        while ((iStart = s.indexOf(word, iStart)) !== -1) {
            for (let i = iStart; i < iStart + word.length; i++) {
                bolds[i] = true;
            }
            iStart++;
        }
    }
    
    let result = [];
    for (let i = 0; i < bolds.length; i++) {
        if (bolds[i] && (i === 0 || !bolds[i - 1])) {
            result.push('<b>');
    
            while (i < bolds.length && bolds[i]) {
                result.push(s[i]);
                i++;
            }
            result.push('</b>');
            i--;
        } else {
            result.push(s[i]);
        }
    }
    
    return result.join('');
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "<b>abc</b>xyz<b>123</b>"
console.log(addBoldTag("abcxyz123", ["abc", "123"]));

// "<b>aaabbc</b>c"
console.log(addBoldTag("aaabbcc", ["aaa", "aab", "bc"]));
