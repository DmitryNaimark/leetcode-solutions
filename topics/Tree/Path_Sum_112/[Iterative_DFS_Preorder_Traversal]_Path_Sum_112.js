// https://leetcode.com/problems/path-sum/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N) if tree is unbalanced, O(log(N)) if it is balanced.
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, sum) {
    if (root == null) {
        return false;
    }
    
    let nodesStack = [root],
        sumStack = [root.val];
    
    while (nodesStack.length > 0) {
        let node = nodesStack.pop();
        let pathSum = sumStack.pop();
        
        if (node.left == null && node.right == null && pathSum === sum) {
            return true;
        }
        
        // Since we push the right node first, that means that left nodes will always be inspected before right nodes. 
        // So, it's pre-order iterative DFS traversal.
        if (node.right != null) {
            nodesStack.push(node.right);
            sumStack.push(pathSum + node.right.val);
        }
        if (node.left != null) {
            nodesStack.push(node.left);
            sumStack.push(pathSum + node.left.val);
        }
    }
    
    return false;
}


// ---------------------------------------------------
//                Uses DN functions:
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

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true
console.log(hasPathSum(createBinaryTreeFromArray([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22));
// false
console.log(hasPathSum(createBinaryTreeFromArray([1,2]), 1));
