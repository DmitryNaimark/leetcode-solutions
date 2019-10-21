// https://leetcode.com/problems/check-if-it-is-a-straight-line/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
function checkStraightLine(coordinates) {
    let [x1, y1] = coordinates[0],
        [x2, y2] = coordinates[1];
    
    for (let i = 2; i < coordinates.length; i++) {
        let [x3, y3] = coordinates[i];
        
        // if ((x3 - x1) / (y3 - y1) !== (x3 - x2) / (y3 - y2)) {
        if ((x3 - x1) * (y3 - y2) !== (x3 - x2) * (y3 - y1)) {
            return false;
        } 
    }
    
    return true;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
