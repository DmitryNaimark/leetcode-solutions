// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(depth)
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
    
    return maxDepthRecursively(root, 1);
}

function maxDepthRecursively(node, depth, res) {
    let maxDepth = depth;
    
    for (let i = 0; i < node.children.length; i++) {
        maxDepth = Math.max(maxDepthRecursively(node.children[i], depth + 1, res), maxDepth);
    }
    
    return maxDepth;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);
