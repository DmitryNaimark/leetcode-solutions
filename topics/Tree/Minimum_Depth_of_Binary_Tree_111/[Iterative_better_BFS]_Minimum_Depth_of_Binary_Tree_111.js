// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N / 2) in worst case(balanced tree), so O(N)
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
    if (root == null) {
        return 0;
    }
    
    let q = [root],
        depth = 1;
    
    // Iterative BFS method is better for this task, because it check level by level from the top, and
    // Recursive DFS goes into max depth, which is not efficient.
    while (q.length > 0) {
        let n = q.length;
        
        for (let i = 0; i < n; i++) {
            let node = q.shift();
            if (node.left == null && node.right == null) {
                return depth;
            }
            
            if (node.left != null) {
                q.push(node.left);
            }
            if (node.right != null) {
                q.push(node.right);
            }
        }
    
        depth++;
    }
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
// 2
console.log(minDepth(createBinaryTreeFromArray([3, 9, 20, null, null, 15, 7])));
