// https://leetcode.com/problems/diameter-of-binary-tree/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(Height), in worst case it's O(N) (skewed tree)
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
    
    let res = {
        longestPath: 0
    };
    
    findLongestPathRecursively(root, res);
    
    return res.longestPath;
}

function findLongestPathRecursively(node, res) {
    if (node == null) {
        return 0;
    }
    
    let leftChildrenCount = findLongestPathRecursively(node.left, res);
    let rightChildrenCount = findLongestPathRecursively(node.right, res);
    
    res.longestPath = Math.max(leftChildrenCount + rightChildrenCount, res.longestPath);
    
    // Longest branch
    return Math.max(leftChildrenCount, rightChildrenCount) + 1;
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
