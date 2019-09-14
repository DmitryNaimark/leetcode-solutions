// https://leetcode.com/problems/balanced-binary-tree/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_depth) or O(log(N))
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isBalanced(root) {
    let stack = [],
        node = root,
        last,
        depths = new Map();
    
    while (stack.length > 0 || node != null) {
        if (node != null) {
            stack.push(node);
            node = node.left;
        } else {
            node = stack[stack.length - 1];
            if (node.right == null || last === node.right) {
                node = stack.pop();
                let left = depths.get(node.left) || 0;
                let right = depths.get(node.right) || 0;
                
                if (Math.abs(left - right) > 1) {
                    return false;
                }
                
                depths.set(node, 1 + Math.max(left, right));
                last = node;
                node = null;
            } else {
                node = node.right;
            }
        }
    }
    
    return true;
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
