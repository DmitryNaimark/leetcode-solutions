// https://leetcode.com/problems/trim-a-binary-search-tree/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
function trimBST(root, L, R) {
    if (root == null) {
        return null;
    }
    
    // Find new root node.
    let cur = root;
    while (cur != null && (cur.val < L || cur.val > R)) {
        if (cur.val < L) {
            cur = cur.right;
        } else if (cur.val > R) {
            cur = cur.left;
        }
    }
    
    if (cur === null) {
        return null;
    }
    let newRoot = cur;
    
    // Remove left branches nodes
    cur = newRoot;
    while (cur != null) {
        if (cur.left != null && cur.left.val < L) {
            cur.left = cur.left.right;
        } else {
            cur = cur.left;
        }
    }
    
    // Remove right branches nodes
    cur = newRoot;
    while (cur != null) {
        if (cur.right != null && cur.right.val > R) {
            cur.right = cur.right.left;
        } else {
            cur = cur.right;
        }
    }
    
    return newRoot;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------
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
// [1, null, 2]
console.log(createArrayFromBinaryTree(trimBST(createBinaryTreeFromArray([1, 0, 2]), 1, 2)));
// 3, 2, null, 1]
console.log(createArrayFromBinaryTree(trimBST(createBinaryTreeFromArray([3,0,4,null,2,null,null,1]), 1, 3)));
