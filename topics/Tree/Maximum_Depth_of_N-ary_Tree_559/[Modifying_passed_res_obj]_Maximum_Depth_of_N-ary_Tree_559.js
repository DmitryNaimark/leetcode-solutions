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
    
    let res = {maxDepth: 0};
    maxDepthRecursively(root, 1, res);
    
    return res.maxDepth;
}

function maxDepthRecursively(node, depth, res) {
    for (let i = 0; i < node.children.length; i++) {
        maxDepthRecursively(node.children[i], depth + 1, res);
    }
    
    res.maxDepth = Math.max(depth, res.maxDepth);
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);
