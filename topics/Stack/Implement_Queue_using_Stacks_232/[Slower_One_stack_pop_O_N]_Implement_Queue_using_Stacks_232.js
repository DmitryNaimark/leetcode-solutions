// https://leetcode.com/problems/implement-queue-using-stacks/
// ---------------------------------------------------

// Runtime Complexity:
//     push: O(1)
//     pop: O(N)
//     peek: O(1)
//     empty: O(1)
// Space Complexity: O(N)
/**
 * Initialize your data structure here.
 */
function MyQueue () {
    this.s1 = [];
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
    let tempStack = [];
    while (this.s1.length > 0) {
        tempStack.push(this.s1.pop());
    }
    
    let popped = tempStack.pop();
    this.front = (tempStack.length > 0) 
        ? tempStack[tempStack.length - 1] 
        : null;
    
    while (tempStack.length > 0) {
        this.s1.push(tempStack.pop());
    }
    
    return popped;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.front;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s1.length === 0
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
