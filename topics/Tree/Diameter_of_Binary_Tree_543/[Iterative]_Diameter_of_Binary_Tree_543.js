// https://leetcode.com/problems/diameter-of-binary-tree/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N), since we use map, which stores all nodes
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function diameterOfBinaryTree(root) {
    if (root == null) {
        return 0;
    }
    
    let stack = [root],
        maxDiameter = 0,
        nodeBranchDepth = new Map();
    
    while (stack.length > 0) {
        let lastNode = stack[stack.length - 1];
        
        if (lastNode.left != null && !nodeBranchDepth.has(lastNode.left)) {
            stack.push(lastNode.left);
        } else if (lastNode.right != null && !nodeBranchDepth.has(lastNode.right)) {
            stack.push(lastNode.right);
        }
        // (left == null || in map) && (right == null || in map)
        else {
            let leftPath = nodeBranchDepth.get(lastNode.left) || 0;
            let rightPath = nodeBranchDepth.get(lastNode.right) || 0;
            
            maxDiameter = Math.max(leftPath + rightPath, maxDiameter);
            nodeBranchDepth.set(lastNode, Math.max(leftPath, rightPath) + 1);
            stack.pop();
        }
    }
    
    return maxDiameter; 
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------
// Creates Binary Tree from passed array of items. Item's value will be stored in .val property of a node.
// If null is passed, then tree will store null and not a TreeNode with null value (null might occur even above the last line of nodes).
function createBinaryTreeFromArray(arr) {
    if (arr === null || arr.length === 0) {
        return null;
    }
    
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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 3
console.log(diameterOfBinaryTree(createBinaryTreeFromArray([1,2,3,4,5])));
// 0
console.log(diameterOfBinaryTree(createBinaryTreeFromArray([])));
