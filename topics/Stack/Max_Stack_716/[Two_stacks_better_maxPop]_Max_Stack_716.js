// https://leetcode.com/problems/max-stack/
// ---------------------------------------------------

// Runtime Complexity:
// push(x)      - O(1) (amortized O(1))
// pop()        - O(1) (amortized O(1))
// top()        - O(1)
// peekMax()    - O(1)
// popMax()     - O(N), since we need to find the top-most max and then recalculate all
// Space Complexity: O(N + N) => O(N)
/**
 * initialize your data structure here.
 */
function MaxStack() {
    this.stack = [];
    this.maxStack = [];
}

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    let max = (this.maxStack.length === 0)
        ? x
        : Math.max(this.maxStack[this.maxStack.length - 1], x);
    
    this.maxStack.push(max);
    this.stack.push(x);
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    let max = this.peekMax();
    let buffer = [];
    
    while (this.top() !== max) {
        buffer.push(this.pop());
    }
    this.pop();
    // This handles setting of max inside the "push" method(see above).
    while (buffer.length > 0) {
        this.push(buffer.pop());
    }
    
    return max;
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    this.maxStack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.maxStack[this.maxStack.length - 1];
};


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

// Note: this is one huge test-case, where I had a hard-to-find problem: 
//     "this.maxStack[j - 1] || -Infinity" - if first part is 0, it just used -Infinity.
let actions = ["push","push","top","top","top","peekMax","push","push","push","push","push","push","pop","popMax","pop","peekMax","popMax","push","popMax","push","push","push","pop","popMax","popMax","peekMax","peekMax","push","popMax","push","top","push","peekMax","pop","top","push","pop","pop","popMax","push","push","popMax","pop","push","push","top","popMax","push","push","top","push","push","push","popMax","push","top","push","push","pop","peekMax","push","push","pop","top","peekMax","push","top","push","peekMax","push","push","push","push","push","peekMax","push","peekMax","push","popMax","push","peekMax","push","push","push","push","push","top","pop","push","push","top","peekMax","popMax","pop","popMax","pop","push","peekMax","pop","push","push","peekMax","push","peekMax","peekMax","popMax","top","top","popMax","peekMax","popMax","push","pop","push","push","push","top","popMax","push","push","popMax","pop","push","push","pop","pop","peekMax","popMax","push","peekMax","push","push","peekMax","peekMax","push","push","popMax","push","popMax","peekMax","top","popMax","push","popMax","push","peekMax","push","peekMax","push","push","pop","pop","push","pop","peekMax","peekMax","pop","peekMax","push","push","push","push","peekMax","push","peekMax","push","push","push","pop","top","pop","push","push","popMax","push","top","peekMax","push","pop","top","push","top","pop","peekMax","push","push","push","top","top","push","push","push","popMax","pop","popMax","pop","top","push","peekMax","pop","top","peekMax","push","pop","push","push","push","pop","popMax","top","popMax","pop","push","push","top","peekMax","push","top","push","top","peekMax","push","push","top","peekMax","push","peekMax","push","pop","peekMax","top","popMax","top","peekMax","push","push","push","pop","pop","popMax","popMax","push","top","top","push","push","peekMax","popMax","top","push","push","pop","popMax","push","push","popMax","push","pop","push","popMax","push","popMax","popMax","push","push","push","peekMax","top","push","popMax","push","popMax","top","pop","peekMax","top","push","peekMax","top","push","popMax","push","popMax","popMax","push","popMax","pop","popMax","top","pop","push","push","popMax","push","push","popMax","pop","peekMax","peekMax","push","top","pop","push","push","peekMax","pop","push","top","popMax","popMax","peekMax","push","push","push","popMax","popMax","popMax","push","push","push","push","push","push","push","push","push","top","push","push","push","push","push","top","push","push","push","push","popMax","push","push","push","push","push","popMax","pop","push","push","push","top","pop","push","push","push","top","pop","popMax","pop","popMax","popMax","push","popMax","peekMax","popMax","popMax","push","push","push","pop","top","popMax","push","push","push","pop","top","peekMax","push","popMax","push","pop","pop","push","peekMax","push","peekMax","push","push","peekMax","peekMax","push","top","push","popMax","pop","push","peekMax","peekMax","pop","pop","peekMax","push","top","pop","push","pop","push","popMax","push","peekMax","push","peekMax","pop","popMax","push","popMax","push","top","push","pop","pop","popMax","push","push","push","top","push","pop","popMax","push","top","pop","push","popMax","push","peekMax","top","popMax","top","pop","popMax","peekMax","top","push","push","pop","pop","pop","push","peekMax","popMax","top","push","top","push","top","top","top","pop","push","push","top","top","push","top","top","push","pop","peekMax","push","pop","push","top","peekMax","push","push","peekMax","popMax","pop","push","popMax","popMax","popMax","peekMax","push","push","push","push","top","push","push","pop","peekMax","push","pop","pop","pop","push","top","push","top","pop","push","popMax","peekMax","push","top","peekMax","popMax","push","popMax","push","push","popMax","pop","push","push","top","push","push","peekMax","push","peekMax","top","push","peekMax","push","peekMax","popMax","popMax","pop","pop","push","push","top","push","peekMax","popMax","push","push","top","push","top","push","peekMax","popMax","push","push","peekMax","top","push","peekMax","popMax","peekMax","peekMax","push","peekMax","top","push","peekMax","popMax","push","pop","peekMax","push","peekMax","top","top","push","push","pop","push","peekMax","popMax","top","push","push","peekMax","top","push","pop","peekMax","push","push","push","pop","peekMax","pop","popMax","push","pop","peekMax","peekMax","push","top","push","top","pop","push","push","push","peekMax","top","push","popMax","top","peekMax","popMax","push","peekMax","popMax","popMax","peekMax","peekMax","push","peekMax","popMax","top","push","popMax","top","popMax","push","push","top","push","popMax","popMax","push","push","popMax","push","top","push","popMax","popMax","push","peekMax","push","push","push","push","push","pop","push","push","push","push","push","top","push","popMax","push","pop","top","pop","peekMax","popMax","push","push","peekMax","push","push","push","push","peekMax","popMax","popMax","top","pop","push","push","push","peekMax","popMax","peekMax","pop","top","push","push","push","push","push","top","popMax","pop","push","pop","push","push","push","push","push","peekMax","push","peekMax","push","pop","popMax","peekMax","push","popMax","push","popMax","popMax","popMax","pop","peekMax","top","peekMax","push","pop","pop","peekMax","top","top","push","push","top","push","popMax","push","pop","pop","push","peekMax","top","push","pop","push","popMax","top","push","pop","popMax","push","push","push","popMax","peekMax","push","push","push","push","push","popMax","popMax","top","peekMax","popMax","top","push","pop","push","top","pop","push","push","popMax","top","push","push","pop","popMax","push","peekMax","push","top","pop","top","popMax","top","peekMax","push","top","push","push","push","popMax","push","push","push","push","top","push","push","push","popMax","pop","top","top","pop","pop","push","push","push","top","pop","top","pop","push","pop","push","peekMax","popMax","pop","push","pop","top","peekMax","popMax","push","top","popMax","pop","popMax","popMax","push","popMax","popMax","top","peekMax","peekMax","pop","top","top","pop","pop","push","push","popMax","push","push","push","popMax","peekMax","push","popMax","peekMax","push","push","peekMax","push","push","peekMax","push","peekMax","push","peekMax","push","push","push","pop","top","push","pop","push","pop","top","peekMax","popMax","peekMax","push","push","popMax","push","peekMax","pop","popMax","push","top","top","top","top","top","push","peekMax","push","pop","top","push","push","push","push","pop","top","top","pop","push","push","top","push","peekMax","push","peekMax","pop","push","top","push","push","peekMax","push","push","top","top","top","pop","popMax","pop","push","push","pop"];
let data = [-55,80,null,null,null,null,-49,-70,27,28,-23,9,null,null,null,null,null,77,null,48,24,-89,null,null,null,null,null,-42,null,44,null,-58,null,null,null,-1,null,null,null,-92,74,null,null,-43,-39,null,null,-18,-64,null,46,82,74,null,33,null,-65,-58,null,null,27,-18,null,null,null,-62,null,-31,null,30,-24,-51,71,-93,null,-96,null,-71,null,-90,null,-22,-63,-99,22,51,null,null,65,-20,null,null,null,null,null,null,-68,null,null,-85,-26,null,25,null,null,null,null,null,null,null,null,-68,null,58,-38,-35,null,null,-3,-83,null,null,74,-2,null,null,null,null,65,null,-32,23,null,null,85,84,null,14,null,null,null,null,-93,null,2,null,-29,null,-10,-3,null,null,-12,null,null,null,null,null,-6,-71,-66,-86,null,20,null,22,-88,84,null,null,null,-81,48,null,-97,null,null,55,null,null,-64,null,null,null,-55,27,-48,null,null,11,21,52,null,null,null,null,null,-20,null,null,null,null,62,null,90,28,-97,null,null,null,null,null,-21,78,null,null,-100,null,74,null,null,-85,-86,null,null,-14,null,-7,null,null,null,null,null,null,5,31,89,null,null,null,null,-67,null,null,-47,-18,null,null,null,7,-12,null,null,-91,35,null,-19,null,-82,null,-26,null,null,-90,-9,-32,null,null,8,null,2,null,null,null,null,null,-86,null,null,65,null,18,null,null,76,null,null,null,null,null,-23,-42,null,-7,49,null,null,null,null,6,null,null,-81,-52,null,null,-96,null,null,null,null,21,-6,-2,null,null,null,69,-55,-88,-82,-36,39,75,96,-68,null,-68,-82,25,-80,-44,null,11,-81,-98,1,null,94,46,-23,10,75,null,null,68,-57,-24,null,null,-49,17,-58,null,null,null,null,null,null,-29,null,null,null,null,-55,-49,-35,null,null,null,-67,34,70,null,null,null,60,null,-38,null,null,-90,null,35,null,30,39,null,null,88,null,-78,null,null,-78,null,null,null,null,null,11,null,null,-2,null,-5,null,-24,null,-18,null,null,null,-98,null,34,null,94,null,null,null,69,-49,-11,null,-26,null,null,45,null,null,-31,null,-86,null,null,null,null,null,null,null,null,-56,-44,null,null,null,63,null,null,null,-26,null,91,null,null,null,null,25,-9,null,null,44,null,null,-69,null,null,76,null,-60,null,null,75,49,null,null,null,5,null,null,null,null,39,74,87,-47,null,67,-65,null,null,44,null,null,null,-46,null,14,null,null,44,null,null,74,null,null,null,-80,null,-82,26,null,null,59,-41,null,67,54,null,-36,null,null,-41,null,-43,null,null,null,null,null,-43,-20,null,-33,null,null,-99,51,null,-30,null,57,null,null,-14,-25,null,null,-65,null,null,null,null,29,null,null,-35,null,null,75,null,null,-93,null,null,null,-50,-7,null,84,null,null,null,71,82,null,null,83,null,null,35,-61,38,null,null,null,null,-27,null,null,null,87,null,-13,null,null,-45,40,-56,null,null,-96,null,null,null,null,11,null,null,null,null,null,-86,null,null,null,-96,null,null,null,63,40,null,17,null,null,-54,53,null,-95,null,39,null,null,-3,null,-92,47,-10,7,-19,null,68,84,-60,61,32,null,35,null,86,null,null,null,null,null,-40,-37,null,-8,-59,32,88,null,null,null,null,null,1,61,69,null,null,null,null,null,21,12,-80,-69,-16,null,null,null,-52,null,12,-55,0,-68,-70,null,48,null,-81,null,null,null,78,null,-4,null,null,null,null,null,null,null,33,null,null,null,null,null,-38,81,null,77,null,-80,null,null,-3,null,null,47,null,-57,null,null,40,null,null,8,94,-66,null,null,62,-2,-54,45,81,null,null,null,null,null,null,1,null,-68,null,null,-17,-63,null,null,86,84,null,null,75,null,-84,null,null,null,null,null,null,-44,null,-8,89,85,null,35,95,-39,84,null,-18,-11,-39,null,null,null,null,null,null,-51,-81,-25,null,null,null,null,-77,null,-81,null,null,null,66,null,null,null,null,56,null,null,null,null,null,-43,null,null,null,null,null,null,null,null,null,null,28,-96,null,-36,-15,61,null,null,87,null,null,41,-82,null,11,80,null,77,null,67,null,-85,74,43,null,null,-44,null,76,null,null,null,null,null,-76,-47,null,-80,null,null,null,95,null,null,null,null,null,64,null,60,null,null,-30,-75,-5,63,null,null,null,null,19,6,null,72,null,-25,null,null,92,null,-20,54,null,-96,-59,null,null,null,null,null,null,-7,-38,null];
    
let maxStack = new MaxStack();
let expected = [null,null,80,80,80,80,null,null,null,null,null,null,9,80,-23,28,28,null,77,null,null,null,-89,48,27,24,24,null,24,null,44,null,44,-58,44,null,-1,44,-42,null,null,74,-92,null,null,-39,-39,null,null,-64,null,null,null,82,null,33,null,null,-58,74,null,null,-18,27,74,null,-62,null,74,null,null,null,null,null,74,null,74,null,74,null,71,null,null,null,null,null,51,51,null,null,-20,71,71,-20,65,22,null,46,-68,null,null,46,null,46,46,46,25,25,33,30,30,null,-68,null,null,null,-35,58,null,null,27,-83,null,null,-2,74,25,25,null,65,null,null,65,65,null,null,85,null,84,65,14,65,null,23,null,14,null,14,null,null,-3,-10,null,-12,14,14,-29,14,null,null,null,null,14,null,20,null,null,null,84,-88,-88,null,null,48,null,-97,22,null,55,-97,null,-64,-64,22,null,null,null,-48,-48,null,null,null,52,21,27,11,-48,null,22,-20,-48,22,null,62,null,null,null,-97,90,28,28,-48,null,null,78,78,null,-100,null,74,78,null,null,-86,78,null,78,null,-7,78,-14,78,-14,74,null,null,null,89,31,74,22,null,-67,-67,null,null,20,20,-18,null,null,-12,14,null,null,35,null,-19,null,7,null,5,2,null,null,null,-3,-32,null,8,null,2,-32,-32,-3,-9,null,-3,-86,null,65,null,18,-3,null,76,-86,-6,-9,-9,null,null,-14,null,null,49,-7,-18,-18,null,6,6,null,null,-18,-52,null,-96,-18,-18,-21,null,null,null,21,-2,-6,null,null,null,null,null,null,null,null,null,-68,null,null,null,null,null,-44,null,null,null,null,96,null,null,null,null,null,94,75,null,null,null,-24,-24,null,null,null,-58,-58,75,17,69,68,null,46,39,39,25,null,null,null,-35,-49,11,null,null,null,70,34,34,null,60,null,-38,34,null,10,null,35,null,null,39,39,null,88,null,88,-78,null,39,39,-78,39,35,null,11,11,null,-2,null,35,null,30,null,30,-18,30,null,10,null,34,null,94,34,1,null,null,null,-11,null,-26,69,null,45,45,null,-5,null,-11,-86,-11,-86,-86,-21,-22,-31,null,null,-44,-56,-31,null,63,63,-49,null,-26,null,91,91,91,91,null,null,-9,-9,null,44,44,null,-69,44,null,76,null,-60,44,null,null,75,75,49,null,44,25,5,-9,null,null,null,null,-47,null,null,-65,87,null,44,67,-47,null,-46,null,14,14,null,87,74,null,74,74,74,null,74,null,null,44,26,null,null,-41,null,null,67,null,67,-36,null,67,null,67,67,59,-43,-41,null,null,-20,null,54,54,null,null,51,null,-30,null,57,57,null,null,51,-25,null,51,51,39,39,null,39,29,null,39,39,null,75,29,null,29,-93,-93,null,null,-7,null,84,84,-50,null,null,82,82,null,83,82,null,null,null,38,82,-61,82,null,-27,71,71,null,87,null,-13,-13,null,null,null,87,-56,null,87,-96,71,71,null,40,40,35,29,29,null,29,29,-86,null,11,-96,-9,null,null,40,null,63,40,null,null,53,null,-95,null,39,17,null,-3,null,null,null,null,null,-19,null,null,null,null,null,32,null,84,null,86,35,35,68,68,null,null,61,null,null,null,null,88,88,61,32,32,null,null,null,69,69,61,61,1,null,null,null,null,null,-16,47,-16,null,-52,null,null,null,null,null,32,null,48,null,-81,48,32,null,78,null,32,21,12,-4,12,-70,12,null,33,-70,12,-68,-68,null,null,81,null,81,null,-80,77,null,12,-3,null,47,null,12,-57,null,40,7,null,null,null,94,8,null,null,null,null,null,81,62,45,45,45,-54,null,1,null,-68,-68,null,null,8,-63,null,null,84,86,null,75,null,-84,-84,75,75,-63,1,null,-44,null,null,null,89,null,null,null,null,84,null,null,null,95,-39,-11,-11,-11,-18,null,null,null,-25,-25,-81,-81,null,-77,null,85,85,-81,null,66,-51,84,84,null,56,56,-51,35,1,null,0,-2,-43,-3,-3,-43,-39,-39,-39,-8,null,null,28,null,null,null,61,-3,null,87,-3,null,null,41,null,null,80,null,80,null,80,null,null,null,43,74,null,-44,null,76,74,80,80,77,null,null,77,null,74,-80,74,null,95,95,95,95,95,null,95,null,60,64,null,null,null,null,63,-5,-5,-5,null,null,6,null,95,null,95,-25,null,92,null,null,95,null,null,-59,-59,-59,-59,95,-96,null,null,-38];
for (let i = 0; i < actions.length; i++) {
    let action = actions[i];
    let datum = data[i];
    console.log('------', i, '------');
    console.log(`${action}(${datum == null ? '' : datum})`);
    
    console.log('before action');
    console.log(JSON.stringify(maxStack.stack));
    console.log(JSON.stringify(maxStack.maxStack));
    
    console.log('result');
    console.log(maxStack[action](datum));
    // console.log(expected[i]);
    
    console.log('after action');
    console.log(JSON.stringify(maxStack.stack));
    console.log(JSON.stringify(maxStack.maxStack));
}
