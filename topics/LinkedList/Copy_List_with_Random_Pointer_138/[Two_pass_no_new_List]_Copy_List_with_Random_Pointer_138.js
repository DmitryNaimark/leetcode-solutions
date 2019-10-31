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
    
    let node = head;
    while (node != null) {
        mapOldNew.set(node, new Node(node.val));
        node = node.next;
    }
    
    node = head;
    while (node != null) {
        mapOldNew.get(node).next = mapOldNew.get(node.next) || null;
        mapOldNew.get(node).random = mapOldNew.get(node.random) || null;
        node = node.next;
    }
    
    return mapOldNew.get(head) || null;
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
