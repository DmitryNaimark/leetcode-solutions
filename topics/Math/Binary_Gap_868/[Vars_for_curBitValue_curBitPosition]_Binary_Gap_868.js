// https://leetcode.com/problems/binary-gap/
// ---------------------------------------------------

// Runtime Complexity: O(log2(N))
// Space Complexity: O(1)
/**
 * @param {number} N
 * @return {number}
 */
function binaryGap(N) {
    let curBitValue = 1,
        curBitPosition = 0,
        prevBitPosition,
        maxDistance = 0;
    
    while (curBitValue <= N) {
        if ((N & curBitValue) > 0) {
            if (prevBitPosition !== undefined) {
                maxDistance = Math.max(curBitPosition - prevBitPosition, maxDistance);
            }
            
            prevBitPosition = curBitPosition;
        }
        
        curBitPosition++;
        // Same as curBitValue *= 2 
        curBitValue = curBitValue << 1;
    }
    
    return maxDistance;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 22 is 10110, distance in 101 is 2 (according to task).
console.log(binaryGap(22));
// 8 is 1000, distance is 0.
console.log(binaryGap(8));
