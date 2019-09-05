// https://leetcode.com/problems/delete-node-in-a-linked-list/
// ---------------------------------------------------

// Runtime Complexity: O(1)
// Space Complexity: O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
    node.val = node.next.val;
    node.next = node.next.next;
}


// ---------------------------------------------------
//                Uses DN functions:
// ---------------------------------------------------
function createLinkedListFromArray(arr) {
    if (arr.length === 0) {
        return null;
    }
    
    let head = new ListNode(arr[0]),
        cur = head;
    
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    
    return head;
}

function createArrayFromLinkedList(head) {
    let res = [];
    
    while (head != null) {
        res.push(head.val);
        head = head.next;
    }
    
    return res;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
let head = createLinkedListFromArray([4, 5, 1, 9]);
let secondNode = head.next;
deleteNode(secondNode);
// [4, 1, 9]
console.log(createArrayFromLinkedList(head));

