// https://leetcode.com/problems/binary-gap/
// ---------------------------------------------------

// Runtime Complexity: O(32) => O(1)
// Space Complexity: O(1)
/**
 * @param {number} N
 * @return {number}
 */
function binaryGap(N) {
    let maxDistance = 0,
        prevOnePosition;
    
    // NOTE: In JS bitwise operators use 32 bits only, so we suppose that number is 32bits max. 
    //     Because of this checking 33rd byte can return "surprising" results. 
    for (let bit = 0; bit < 32; bit++) {
        if ((N & (1 << bit)) > 0) {
            if (prevOnePosition !== undefined) {
                maxDistance = Math.max(bit - prevOnePosition, maxDistance);
            }
            prevOnePosition = bit;
        }
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
