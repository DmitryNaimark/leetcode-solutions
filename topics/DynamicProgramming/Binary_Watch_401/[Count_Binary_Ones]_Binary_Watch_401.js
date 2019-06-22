// LeetCode link
// ---------------------------------------------------
// Description
// ---------------------------------------------------

/**
 * @param {number} num
 * @return {string[]}
 */
function readBinaryWatch(num) {
    let res = [];
    
    for (let h = 0; h <= 11; h++) {
        for (let m = 0; m <= 59; m++) {
            if (countOnesInBinary(h * 64 + m) === num) {
                res.push(`${h}:${m < 10 ? '0' + m : m}`);
            }
        }
    }
    
    return res;
}

function countOnesInBinary(num) {
    let binaryString = Number(num).toString(2);
    
    let onesCount = 0;
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            onesCount++;
        }
    }
    return onesCount;
}

// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(JSON.stringify(readBinaryWatch(2)));