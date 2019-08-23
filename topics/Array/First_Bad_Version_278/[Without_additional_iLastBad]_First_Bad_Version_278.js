// https://leetcode.com/problems/first-bad-version/
// ---------------------------------------------------

// Runtime Complexity: O(log(N))
// Space Complexity: O(1)
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 0,
            hi = n,
            mid;
        
        // (!) < instead of <=
        while (lo < hi) {
            mid = lo + Math.floor((hi - lo) / 2);
            
            if (isBadVersion(mid)) {
                hi = mid;
            } else {
                lo = mid + 1;
            }
        }
        
        // Could return lo or hi, they are equal.
        // (!) Can't use mid, since mid contains previous value.
        return lo;
    };
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);
