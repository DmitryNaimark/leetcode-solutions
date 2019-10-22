// https://leetcode.com/problems/implement-queue-using-stacks/
// ---------------------------------------------------

// Runtime Complexity:
//     push: O(1)
//     pop: O(1) amortized
//     peek: O(1)
//     empty: O(1)
// Space Complexity: O(N)
/**
 * Initialize your data structure here.
 */
function MyQueue () {
    this.s1 = [];
    this.s2 = [];
    this.front = null;
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.s1.length === 0) {
        this.front = x;
    }
    
    this.s1.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.s2.length > 0) {
        return this.s2.pop();
    }
    
    while (this.s1.length > 0) {
        this.s2.push(this.s1.pop());
    }
    
    return this.s2.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.s2.length > 0) {
        return this.s2[this.s2.length - 1];
    }
    
    return this.front;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0
};



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
let q = new MyQueue();
q.push(1);
q.push(2);
// 1
console.log(q.peek());
// 1 - since we pop from the front(left)
console.log(q.pop());
// false
console.log(q.empty());
