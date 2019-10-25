// https://leetcode.com/problems/binary-tree-maximum-path-sum/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(tree_height), which is O(N) in worst case of skewed tree and O(log(N)) in case of balanced tree.
function maxPathSum(root) {
    let sharedObj = {
        maxSum: -Infinity
    };
    maxPathSumRecursively(root, sharedObj);
    
    return sharedObj.maxSum;
}

function maxPathSumRecursively(node, sharedObj) {
    if (node == null) {
        return 0;
    }
    
    let leftSum = Math.max(maxPathSumRecursively(node.left, sharedObj), 0);
    let rightSum = Math.max(maxPathSumRecursively(node.right, sharedObj), 0);
    
    sharedObj.maxSum = Math.max(leftSum + rightSum + node.val, sharedObj.maxSum);
    return Math.max(leftSum, rightSum) + node.val;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------
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
// 6
console.log(maxPathSum(createBinaryTreeFromArray([1, 2, 3])));
// 42
console.log(maxPathSum(createBinaryTreeFromArray([-10, 9, 20, null, null, 15, 7])));
// -3
console.log(maxPathSum(createBinaryTreeFromArray([-3])));
// 2
console.log(maxPathSum(createBinaryTreeFromArray([2, -1])));
// 4
console.log(maxPathSum(createBinaryTreeFromArray([1, -2, 3])));
// 16
console.log(maxPathSum(createBinaryTreeFromArray([9, 6, -3, null, null, -6, 2, null, null, 2, null, -6, -6, -6])));
