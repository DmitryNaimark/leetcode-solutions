// https://leetcode.com/problems/sum-root-to-leaf-numbers/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_depth), which is O(N) in worst case(skewed Tree) or O(max_depth) in case of balanced tree.
function sumNumbers(node, sum=0) {
    if (node == null) {
        return 0;
    }
    
    sum = sum * 10 + node.val;
    if (node.left == null && node.right == null) {
        return sum;
    }
    
    return sumNumbers(node.left, sum) + sumNumbers(node.right, sum);
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
// 25
console.log(sumNumbers(createBinaryTreeFromArray([1, 2, 3])));
// 1026
console.log(sumNumbers(createBinaryTreeFromArray([4, 9, 0, 5, 1])));
