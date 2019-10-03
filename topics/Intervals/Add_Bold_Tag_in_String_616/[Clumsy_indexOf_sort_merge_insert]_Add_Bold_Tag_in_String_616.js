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
    let pointers = new Array(dict.length).fill(0),
        intervals = [];
    
    let finishedSearches = new Array(pointers.length).fill(false),
        finishedCount = 0;
    
    // Find substrings indexes.
    // Instead of array of pointers, we could just go word by word and add indexes for every word.
    // Since later we'd anyway sort and merge intervals.
    while (finishedCount < pointers.length) {
        for (let iPointer = 0; iPointer < pointers.length; iPointer++) {
            if (!finishedSearches[iPointer] && dict[iPointer].length > s.length) {
                finishedSearches[iPointer] = true;
                finishedCount++;
            }
            
            let iCh = pointers[iPointer];
            if (!finishedSearches[iPointer] && iCh < s.length - dict[iPointer].length + 1) {
                let iStart = s.indexOf(dict[iPointer], iCh);
                
                // Move till the end.
                if (iStart === -1) {
                    pointers[iPointer] = s.length;
                    finishedSearches[iPointer] = true;
                    finishedCount++;
                } else {
                    intervals.push([iStart, iStart + dict[iPointer].length - 1]);
                    pointers[iPointer] = iStart + 1;
                    if (pointers[iPointer] >= s.length - dict[iPointer].length + 1) {
                        finishedSearches[iPointer] = true;
                        finishedCount++;
                    }
                }
            }
            
        }
    }
    
    if (intervals.length === 0) {
        return s;
    }
    
    // Sort intervals by start
    intervals.sort((in1, in2) => in1[0] - in2[0]);
    // console.log(intervals);
    
    // Merge intervals
    let mergedIntervals = [],
        iStart = intervals[0][0],
        iEnd = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][1] <= iEnd) {
            continue;
        }
        
        if (intervals[i][0] - 1 <= iEnd) {
            iEnd = intervals[i][1];
        } else {
            mergedIntervals.push([iStart, iEnd]);
            iStart = intervals[i][0];
            iEnd = intervals[i][1];
        }
    }
    
    if (mergedIntervals.length === 0 || mergedIntervals[mergedIntervals.length - 1][1] !== iEnd) {
        mergedIntervals.push([iStart, iEnd]);
    }
    
    // console.log(mergedIntervals);
    
    // Insert "<b>" before start of interval and "</b>" after end of interval.
    let chars = s.split('');
    
    for (let iInterval = mergedIntervals.length - 1; iInterval >= 0; iInterval--) {
        let interval = mergedIntervals[iInterval];
        
        chars.splice(interval[1] + 1, 0, `</b>`);
        chars.splice(interval[0], 0, `<b>`);
    }
    
    return chars.join('');
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "<b>abc</b>xyz<b>123</b>"
console.log(addBoldTag("abcxyz123", ["abc", "123"]));

// "<b>aaabbc</b>c"
console.log(addBoldTag("aaabbcc", ["aaa", "aab", "bc"]));
