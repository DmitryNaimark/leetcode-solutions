// https://leetcode.com/problems/koko-eating-bananas/
// ---------------------------------------------------

// Runtime Complexity: O(N * log2(max_pile))
// Space Complexity: O(1)
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
function minEatingSpeed(piles, H) {
    let max = Math.max(...piles);
    
    // Invariants:
    // (-Inf, iLow] - speed is too slow
    // [iHigh, Inf) - speed is enough or better
    // (iLow, iHigh) - not inspected yet.
    let iLow = 0,
        iHigh = max;
    
    while (iHigh - iLow > 1) {
        let iMid = iLow + Math.floor((iHigh - iLow) / 2);
        
        let hours = countHours(piles, iMid);
        
        if (hours > H) {
            iLow = iMid;
        } else {
            iHigh = iMid;
        }
    }
    
    return iHigh;
}

function countHours(piles, speed) {
    let hours = 0;
    
    for (let pile of piles) {
        hours += Math.ceil(pile / speed);
    }
    
    return hours;
    
    // Or, we can use reduce:
    // return piles.reduce((hours, pile) => hours + Math.ceil(pile / speed), 0);
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 4
console.log(minEatingSpeed([3,6,7,11], 8));
