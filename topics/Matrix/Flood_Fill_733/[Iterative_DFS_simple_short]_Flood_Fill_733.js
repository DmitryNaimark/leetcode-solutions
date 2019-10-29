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
    
    let stack = [[sr, sc]];
    while (stack.length > 0) {
        let [r, c] = stack.pop();
        
        image[r][c] = newColor;
        for (let [dr, dc] of [[-1, 0], [0, 1], [1, 0], [0, -1]]) {
            if (isValidCell(r + dr, c + dc, rows, cols) && image[r + dr][c + dc] === color) {
                stack.push([r + dr, c + dc]);
            }
        }
    }
    
    return image;
}

function isValidCell(r, c, rows, cols) {
    return r >= 0 && c >= 0 && r < rows && c < cols;
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
