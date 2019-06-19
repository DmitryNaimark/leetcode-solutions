// LeetCode link
// ---------------------------------------------------
// Description
// ---------------------------------------------------

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    if (matrix.length === 0) {
        return false;
    }
    
    let r = 0,
        columnsCount = matrix[0].length,
        iLastColumn = columnsCount - 1;
    
    while (r < matrix.length && matrix[r][0] <= target) {
        if (matrix[r][0] === target || matrix[r][iLastColumn] === target) {
            return true;
        } else if (matrix[r][iLastColumn] < target) {
            r++;
            continue;
        }
        
        let lo = 0,
            hi = iLastColumn,
            row = matrix[r];
        
        while (lo <= hi) {
            let mid = Math.floor((hi + lo) / 2);
            
            if (row[mid] === target) {
                return true;
            } else if (row[mid] > target) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        
        r++;
    }
    
    return false;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
let matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
console.log(searchMatrix(matrix, 5));



// ---------------------------------------------------
//            Test Cases use DN functions:
// ---------------------------------------------------
