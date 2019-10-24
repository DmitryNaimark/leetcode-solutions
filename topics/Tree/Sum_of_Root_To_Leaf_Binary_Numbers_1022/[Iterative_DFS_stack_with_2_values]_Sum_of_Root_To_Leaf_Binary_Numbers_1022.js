// https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_depth), which is O(N) in worst case(skewed Tree) or O(max_depth) in case of balanced tree.
function sumRootToLeaf(root) {
    if (root == null) {
        return 0;
    }
    
    let stack = [root, root.val],
        res = 0;
    
    while (stack.length > 0) {
        let sum = stack.pop();
        let node = stack.pop();
        
        if (node.left == null && node.right == null) {
            res += sum;
            continue;
        }
        
        if (node.left != null) {
            stack.push(node.left);
            stack.push(sum * 2 + node.left.val);
        }
        if (node.right != null) {
            stack.push(node.right);
            stack.push(sum * 2 + node.right.val);
        }
    }
    
    return res;
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
console.log(sumRootToLeaf(createBinaryTreeFromArray([1,0,1,0,1,0,1])));
