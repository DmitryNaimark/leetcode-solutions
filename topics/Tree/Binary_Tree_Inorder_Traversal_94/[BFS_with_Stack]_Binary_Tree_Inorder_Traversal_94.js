// https://leetcode.com/problems/binary-tree-inorder-traversal/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
    let res = [];
    
    let cur = root,
        stack = [];
    while (cur != null || stack.length > 0) {
        if (cur != null) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            res.push(cur.val);
            cur = cur.right;
        }
    }
    
    return res;
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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [1, 3, 2]
console.log(inorderTraversal(createBinaryTreeFromArray([1, null, 2, 3])));
// [4, 2, 5, 1, 6, 3, 7] 
console.log(inorderTraversal(createBinaryTreeFromArray([1, 2, 3, 4, 5, 6, 7])));
