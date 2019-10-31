// https://leetcode.com/problems/copy-list-with-random-pointer/
// ---------------------------------------------------

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

// Runtime Complexity: O(N)
// Space Complexity: O(N)
function copyRandomList(head) {
    let mapOldNew = new Map();
    return copyRandomListRecursively(head);
    
    function copyRandomListRecursively(node) {
        if (node == null) {
            return null;
        }
        
        if (mapOldNew.has(node)) {
            return mapOldNew.get(node);
        }
        
        let newNode = new Node(node.val);
        mapOldNew.set(node, newNode);
        
        newNode.next = copyRandomListRecursively(node.next);
        newNode.random = copyRandomListRecursively(node.random);
        
        return newNode;
    }
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// Unfortunately, since LeetCode used "Node" instead of "ListNode", I can't use my helper functions
// "createLinkedListFromArray" and "createArrayFromLinkedList", so let's just create the list of "Node"-s manually.
//
// Create node1 -> node2 -> node3 -> None list
//        r->n3    r->n1    r->n3
let node1 = new Node(1, null, null);
let node2 = new Node(2, null, null);
let node3 = new Node(3, null, null);
node1.next = node2;
node2.next = node3;
node1.random = node3;
node2.random = node1;
node3.random = node3;

let res = copyRandomList(node1);
