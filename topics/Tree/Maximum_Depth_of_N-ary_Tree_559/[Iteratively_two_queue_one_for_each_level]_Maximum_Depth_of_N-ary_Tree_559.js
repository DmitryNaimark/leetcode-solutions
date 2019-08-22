// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_nodes_count_in_one_level)
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
function maxDepth(root) {
    if (root == null) {
        return 0;
    }
    
    let queue = [root],
        nextQueue = [],
        depth = 0;
    while (queue.length > 0) {
        for (let i = 0; i < queue.length; i++) {
            for (let child of queue[i].children) {
                nextQueue.push(child);
            }
        }
        
        queue = nextQueue;
        nextQueue = [];
        
        depth++;
    }
    
    return depth;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);
