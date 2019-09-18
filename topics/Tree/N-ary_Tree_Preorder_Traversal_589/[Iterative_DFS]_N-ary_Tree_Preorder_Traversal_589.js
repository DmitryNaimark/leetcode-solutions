// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(max_depth), which is O(N) if tree is skewed or O(log(N)) if it is balanced.
/**
 * @param {Node} root
 * @return {number[]}
 */
function preorder(root) {
    if (root == null) {
        return [];
    }
    
    let stack = [root],
        res = [];
    
    while (stack.length > 0) {
        let node = stack.pop();
        res.push(node.val);
        
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);
