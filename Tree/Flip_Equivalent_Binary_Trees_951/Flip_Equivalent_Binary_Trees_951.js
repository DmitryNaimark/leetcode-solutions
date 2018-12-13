// https://leetcode.com/problems/flip-equivalent-binary-trees/
// ---------------------------------------------------
// For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.
//
// A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.
//
// Write a function that determines whether two binary trees are flip equivalent.
// The trees are given by root nodes root1 and root2.
//
//
// Example 1:
//     Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
//     Output: true
//     Explanation: We flipped at nodes with values 1, 3, and 5.
//     <Flipped Trees Diagram> (see web link at the top)
//
//
// Note:
//     Each tree will have at most 100 nodes.
//     Each value in each tree will be a unique integer in the range [0, 99].
// ---------------------------------------------------

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node1
 * @param {TreeNode} node2
 * @return {boolean}
 */
function flipEquiv(node1, node2) {
    if (node1 == null && node2 != null) {
        return false;
    } else if (node1 != null && node2 == null) {
        return false;
    } else if (node1 == null && node2 == null) {
        return true;
    } else if (node1.val !== node2.val) {
        return false;
    }
    
    if (flipEquiv(node1.left, node2.left) && flipEquiv(node1.right, node2.right)) {
        return true;
    } else if (flipEquiv(node1.right, node2.left) && flipEquiv(node1.left, node2.right)) {
        return true;
    }
    
    return false;
}

// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function createTreeFromArray(arr) {
    let rootNode = new TreeNode(arr.shift());
    
    let nodesInCurrentLine = [rootNode];
    let nodesInNextLine = [];
    
    // Copy array, so we won't modify passed array.
    arr = arr.slice();
    while (arr.length > 0) {
        while (nodesInCurrentLine.length > 0) {
            // Skip null nodes(it could be that we have null nodes not in the last line.
            if (nodesInCurrentLine[0] == null) {
                nodesInCurrentLine.shift();
                continue;
            }
            
            // Create node out of the next array value and push it to "nodesInNextLine".
            let nodeValue = arr.shift();
            nodesInCurrentLine[0].left = (nodeValue != null)
                ? new TreeNode(nodeValue)
                : null;
                
            nodesInNextLine.push(nodesInCurrentLine[0].left);
    
            // Create node out of the next array value and push it to "nodesInNextLine".
            nodeValue = arr.shift();
            nodesInCurrentLine[0].right = (nodeValue != null)
                ? new TreeNode(nodeValue)
                : null;
            nodesInNextLine.push(nodesInCurrentLine[0].right);
    
            nodesInCurrentLine.shift();
        }
        nodesInCurrentLine = nodesInNextLine;
        nodesInNextLine = [];
    }
    
    return rootNode;
}
// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------

let root1 = createTreeFromArray([1,2,3,4,5,6,null,null,null,7,8]);
let root2 = createTreeFromArray([1,3,2,null,6,4,5,null,null,null,null,8,7]);

// true
console.log(flipEquiv(root1, root2));