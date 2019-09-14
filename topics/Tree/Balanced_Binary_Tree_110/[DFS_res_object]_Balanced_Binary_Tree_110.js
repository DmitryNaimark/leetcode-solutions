// https://leetcode.com/problems/balanced-binary-tree/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_depth) or O(log(N))
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    let res = {isBalanced: true};
    isBalancedRecursively(root, res);
    
    return res.isBalanced;
}

function isBalancedRecursively(node, res) {
    if (node == null) {
        return 0;
    }
    
    let distLeft = Math.max(isBalancedRecursively(node.left, res));
    let distRight = Math.max(isBalancedRecursively(node.right, res));
    
    if (Math.abs(distLeft - distRight) > 1) {
        res.isBalanced = false;
    }
    
    return 1 + Math.max(distLeft, distRight);
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
console.log(isBalanced(createBinaryTreeFromArray([3,9,20,null,null,15,7])));
console.log(isBalanced(createBinaryTreeFromArray([1,2,2,3,3,null,null,4,4])));
