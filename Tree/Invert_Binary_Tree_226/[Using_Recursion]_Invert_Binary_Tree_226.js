// https://leetcode.com/problems/invert-binary-tree/
// ---------------------------------------------------
// Invert a binary tree.
//
// Example:
//
//     Input:
//           4
//         /   \
//       2     7
//      / \   / \
//     1   3 6   9
//
//     Output:
//           4
//         /   \
//       7      2
//      / \   / \
//     9   6 3   1
//
// Trivia:
//     This problem was inspired by this original tweet by Max Howell:
//
//     Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
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
 * @return {TreeNode}
 */
function invertTree(root) {
    if (root == null) {
        return root;
    }
    
    let left = root.left;
    root.left = root.right;
    root.right = left;
    
    if (root.left != null) {
        invertTree(root.left);
    }
    if (root.right != null) {
        invertTree(root.right);
    }
    
    return root;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------
// Constructor function, which represents Binary Tree Node with val.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
let tree = createBinaryTreeFromArray([4,2,7,1,3,6,9]);
let invertedTree = invertTree(tree);
// [4,7,2,9,6,3,1]
console.log(JSON.stringify(createArrayFromBinaryTree(invertedTree)));



// ---------------------------------------------------
//            Test Cases use DN functions:
// ---------------------------------------------------
// Creates Binary Tree from passed array of items. Item's value will be stored in .val property of a node.
// If null is passed, then tree will store null and not a TreeNode with null value (null might occur even above the last line of nodes).
function createBinaryTreeFromArray(arr) {
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

// Creates Array from passed Binary Tree (each node is a TreeNode object with .left, .right, .val values).
// Each TreeNode.val goes as an item to array. if node equals to null, it will be present in array.
function createArrayFromBinaryTree(root) {
    let nodesQueue = [root],
        arr = [];
    
    while (nodesQueue.length > 0) {
        let removedNode = nodesQueue.shift();
        
        if (removedNode != null) {
            nodesQueue.push(removedNode.left);
            nodesQueue.push(removedNode.right);
            arr.push(removedNode.val);
        } else {
            arr.push(null);
        }
    }
    
    // Remove all null-s at the end, because they don't make a difference, TreeNode's child is null by default.
    // Although null-s in the middle should not be removed, since tree might not have some branches.
    while (arr[arr.length - 1] == null) {
        arr.pop();
    }
    
    return arr;
}