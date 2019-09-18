// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_depth), which is O(N) if tree is skewed or O(log(N)) if it is balanced.
/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
    let arr = [];
    preorderRecursively(root, arr);
    return arr;
}

function preorderRecursively(node, arr) {
    if (node == null) {
        return;
    }
    
    arr.push(node.val);
    for (let child of node.children) {
        preorderRecursively(child, arr);
    }
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);
