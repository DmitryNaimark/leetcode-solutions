// https://leetcode.com/problems/convert-bst-to-greater-tree/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_height), which is O(N) in worst case of skewed tree, O(log(N)) for balanced tree.
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function convertBST(root) {
    convertBSTRecursively(root, 0);
    return root;
}

function convertBSTRecursively(node, parentSum) {
    if (node == null) {
        return 0;
    }
    
    let originalValue = node.val;
    
    node.val += parentSum;
    let rightSum = convertBSTRecursively(node.right, parentSum);
    node.val += rightSum;
    let leftSum = convertBSTRecursively(node.left, parentSum + rightSum + originalValue);
    
    return originalValue + rightSum + leftSum;
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
// [18,20,13]
console.log(createArrayFromBinaryTree(convertBST(createBinaryTreeFromArray([5, 2, 13]))));
// [5,6,3,2,6]
console.log(createArrayFromBinaryTree(convertBST(createBinaryTreeFromArray([2, 0, 3, -4, 1]))));
// [8,8,4,6,null,7]
console.log(createArrayFromBinaryTree(convertBST(createBinaryTreeFromArray([1, 0, 4, -2, null, 3]))));
