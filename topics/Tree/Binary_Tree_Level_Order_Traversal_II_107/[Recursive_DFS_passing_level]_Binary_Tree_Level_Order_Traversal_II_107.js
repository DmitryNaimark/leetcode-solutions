// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_height), which could be O(N) for skewed Tree and O(log(N)) for balanced Tree.
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
    let res = [];
    if (root == null) {
        return res;
    }
    
    dfs(root, 0, res);
    
    return res;
}

function dfs(node, level, res) {
    if (node == null) {
        return;
    }
    
    if (level >= res.length) {
        res.unshift([]);
    }
    
    res[res.length - 1 - level].push(node.val);
    dfs(node.left, level + 1, res);
    dfs(node.right, level + 1, res);
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
console.log(levelOrderBottom(createBinaryTreeFromArray([3, 9, 20, null, null, 15, 7])));
