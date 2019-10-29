// https://leetcode.com/problems/string-compression/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(log10(max_count)) 
/**
 * @param {string[]} chars
 * @return {number}
 */
function compress(chars) {
    let left = 0,
        count = 0;
    
    for (let [i, ch] of chars.entries()) {
        count++;
        
        if (i + 1 === chars.length || chars[i + 1] !== ch) {
            chars[left] = ch;
            left++;
            if (count > 1) {
                let digits = count.toString();
                for (let digit of digits) {
                    chars[left] = digit;
                    left++;
                }
            }
            count = 0;
        }
    }
    
    // console.log(chars.slice(0, left));
    return left;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]));
console.log(compress(["a","b","b","b","b","b","b","b","c","c", "b","d","b","k","k","b","b","b"]));
