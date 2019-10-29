// https://leetcode.com/problems/string-compression/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(log10(max_count))
/**
 * @param {string[]} chars
 * @return {number}
 */
function compress(chars) {
    let iStart = 0,
        i = 1,
        charCount = 1;
    
    while (i <= chars.length) {
        // If end of array is reached or chars aren't the same
        if (i === chars.length || chars[i] !== chars[i - 1]) {
            if (charCount > 1) {
                let countStr = charCount.toString();
                
                chars[iStart] = chars[i - 1];
                iStart++;
                for (let j = 0; j < countStr.length; j++, iStart++) {
                    chars[iStart] = countStr[j];
                }
                charCount = 1;
            } else {
                chars[iStart] = chars[i - 1];
                iStart++;
            }
        } else {
            charCount++;
        }
        
        i++;
    }
    
    return iStart;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(compress(["a","b","b","b","b","b","b","b","c","c", "b","d","b","k","k","b","b","b"]));
