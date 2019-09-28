// https://leetcode.com/problems/moving-average-from-data-stream/
// ---------------------------------------------------

// Runtime Complexity: 
//     .next: O(1) (faster than using array)
// Space Complexity: O(size)
function MovingAverage(size) {
    this.maxSize = size;
    this.listSize = 0;
    this.sum = 0;
    
    this.head = null;
    this.tail = null;
}

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.head == null) {
        this.head = new ListNode(val);
        this.tail = this.head;
        this.listSize++;
    } else {
        // Add node to tail
        this.tail.next = new ListNode(val);
        this.tail = this.tail.next;
        this.listSize++;
        
        if (this.listSize > this.maxSize) {
            // Remove head node
            this.sum -= this.head.val;
            
            let node = this.head;
            this.head = this.head.next;
            
            node.next = null;
            
            this.listSize--;
        }
    }
    this.sum += val;
    
    return this.sum / this.listSize;
};

function ListNode(val, next) {
    this.val = val;
    this.next = next;
}


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
