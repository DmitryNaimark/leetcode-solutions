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
    
    if (root.left == null && root.right == null) {
        return sum === root.val;
    }
    
    sum -= root.val;
    
    return hasPathSum(root.left, sum) ||
        hasPathSum(root.right, sum);
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
