// https://leetcode.com/problems/moving-average-from-data-stream/
// ---------------------------------------------------

// Runtime Complexity: 
//     .next: O(1) amortized
// Space Complexity: O(size)
function MovingAverage(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
}

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.queue.length === this.size) {
        this.sum -= this.queue.shift();
    }
    this.queue.push(val);
    this.sum += val;
    
    return this.sum / this.queue.length;
};


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
let movingAvg = new MovingAverage(3);
// 10
console.log(movingAvg.next(10));
// 15
console.log(movingAvg.next(20));
// 20
console.log(movingAvg.next(30));
// 16.66
console.log(movingAvg.next(0));
// 10
console.log(movingAvg.next(0));
