// https://leetcode.com/problems/range-sum-of-bst/
// ---------------------------------------------------
// Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).
//
// The binary search tree is guaranteed to have unique values.
//
// Example 1:
//     Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
//     Output: 32
//
// Example 2:
//     Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
//     Output: 23
//
//
// Note:
//     The number of nodes in the tree is at most 10000.
//     The final answer is guaranteed to be less than 2^31.
// ---------------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var sum;

function rangeSumBST(root, L, R) {
    sum = 0;
    
    checkSumRecursively(root, L, R);
    return sum;
}

function checkSumRecursively(node, L, R) {
    if (node.val >= L && node.val <= R) {
        sum += node.val;
    }
    
    if (node.left != null && node.val > L) {
        checkSumRecursively(node.left, L, R);
    }
    if (node.right != null && node.val < R) {
        checkSumRecursively(node.right, L, R);
    }
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let rootNode = new TreeNode(10);
rootNode.left = new TreeNode(5);
rootNode.right = new TreeNode(15);

rootNode.left.left = new TreeNode(3);
rootNode.left.right = new TreeNode(7);
rootNode.right.left = new TreeNode(null);
rootNode.right.right = new TreeNode(18);

// 32
console.log(rangeSumBST(rootNode, 7, 15));