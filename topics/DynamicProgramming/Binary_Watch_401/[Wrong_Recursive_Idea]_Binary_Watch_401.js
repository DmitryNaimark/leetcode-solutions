// LeetCode link
// ---------------------------------------------------
// Description
// ---------------------------------------------------

/**
 * @param {number} num
 * @return {string[]}
 */
const TWELVE_HOURS_IN_MINUTES = 720;

function readBinaryWatch(num) {
    if (num === 0) {
        return ['0:00'];
    }
    let leds = [1, 2, 4, 8, 16, 32, 60, 120, 240, 480];
    
    let totalMinutesSet = new Set();
    
    calcAllPossibleTotalMinutes(leds, totalMinutesSet, num, 0, 0);
    
    return Array.from(totalMinutesSet).map(printBinaryTime);
}

function calcAllPossibleTotalMinutes(leds, totalMinutesSet, remainingLeds, start, score) {
    for (let i = start; i < leds.length; i++) {
        if (remainingLeds === 1 && score + leds[i] < TWELVE_HOURS_IN_MINUTES && score + leds[i] !== 60) {
            if (score + leds[i] === 60) {
                console.log('noooo', score, leds[i], i);
            }
            totalMinutesSet.add(score + leds[i]);
        } else {
            calcAllPossibleTotalMinutes(leds, totalMinutesSet, remainingLeds - 1, i + 1, score + leds[i]);
        }
    }
}

function printBinaryTime(totalMinutes) {
    let minutes = totalMinutes % 60;
    let hours = (totalMinutes - minutes) / 60;
    
    let minutesPrefix = minutes < 10 ? '0' : '';
    return `${hours}:${minutesPrefix}${minutes}`;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(JSON.stringify(readBinaryWatch(4)));