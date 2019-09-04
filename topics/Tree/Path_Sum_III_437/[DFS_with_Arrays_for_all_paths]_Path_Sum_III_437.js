// https://leetcode.com/problems/path-sum-iii/
// ---------------------------------------------------

// Runtime Complexity: O(N * depth) => O(N * log(N)), we multiply by log(N), because with each layer
//     we iterate through +1 item(all previous paths), which will give us O(N * log(N)) or O(N * depth). 
// Space Complexity: O(depth^2) (For each depth, we add another array with +1 item,
//     so number of items in callstack is arithmetic progression: depth / 2 * (depth + 1), which is depth^2.
//     Depth is log2(N).
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
function pathSum(root, sum) {
    return findPathsForSumRecursively(root, sum, []);
}

function findPathsForSumRecursively(node, sum, allPaths) {
    if (node == null) {
        return 0;
    }
    
    allPaths = allPaths.slice();
    let totalPaths = 0;
    for (let i = 0; i < allPaths.length; i++) {
        allPaths[i] += node.val;
        if (allPaths[i] === sum) {
            totalPaths++;
        }
    }
    allPaths.push(node.val);
    if (node.val === sum) {
        totalPaths++;
    }
    
    return totalPaths + findPathsForSumRecursively(node.left, sum, allPaths) +
        findPathsForSumRecursively(node.right, sum, allPaths);
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
// 3 - paths that sum up to 8
console.log(pathSum(createBinaryTreeFromArray([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1]), 8));
