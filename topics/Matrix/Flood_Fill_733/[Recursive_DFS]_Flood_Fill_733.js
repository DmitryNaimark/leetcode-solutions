// https://leetcode.com/problems/flood-fill/
// ---------------------------------------------------

// Runtime Complexity: O(N), where N is the amount of same-colored neighbors
// Space Complexity: O(N) in worst case, if same-colored neighbors are in positioned as continuous line.
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    const rows = image.length,
        cols = image[0].length,
        color = image[sr][sc];
    
    if (newColor === color) {
        return image;
    }
    
    function floodFillRecursively(r, c) {
        if (image[r][c] !== color) {
            return;
        }
    
        image[r][c] = newColor;
    
        if (r > 0) floodFillRecursively(r - 1, c);
        if (r < rows - 1) floodFillRecursively(r + 1, c);
        if (c > 0) floodFillRecursively(r, c - 1);
        if (c < cols - 1) floodFillRecursively(r, c + 1);
    }
    
    floodFillRecursively(sr, sc);
    
    return image;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
//   [2,2,2],
//   [2,2,0],
//   [2,0,1]
console.log(floodFill([
    [1,1,1],
    [1,1,0],
    [1,0,1]], 1, 1, 2));
