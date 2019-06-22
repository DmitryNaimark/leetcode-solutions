// LeetCode link
// ---------------------------------------------------
// Description
// ---------------------------------------------------

/**
 * @param {number[][]} A
 * @return {number}
 */
function matrixScore(A) {
    const R = A.length,
        C = A[0].length;
    
    // Flip row, if first bit is zero (to maximize the number).
    for (let r = 0; r < R; r++) {
        if (A[r][0] === 0) {
            flipRow(A, r, C);
        }
    }
    
    
}

function flipRow(A, iRow, C) {
    for (let c = 0; c < C; c++) {
        A[iRow][c] ^= 1;
    }
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);