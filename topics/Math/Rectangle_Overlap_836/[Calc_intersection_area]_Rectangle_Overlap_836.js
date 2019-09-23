// https://leetcode.com/problems/rectangle-overlap/
// ---------------------------------------------------

// Runtime Complexity: O(1)
// Space Complexity: O(1)
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
function isRectangleOverlap(rec1, rec2) {
    let [x1, y1, x2, y2] = rec1,
        [x3, y3, x4, y4] = rec2;
    
    return Math.min(x2, x4) > Math.max(x1, x3) &&
        Math.min(y2, y4) > Math.max(y1, y3);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true
console.log(isRectangleOverlap([0,0,2,2], [1,1,3,3]));
// false
console.log(isRectangleOverlap([0,0,1,1], [1,0,2,1]));
