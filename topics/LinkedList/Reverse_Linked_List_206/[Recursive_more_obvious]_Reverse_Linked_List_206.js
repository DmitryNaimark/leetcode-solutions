// https://leetcode.com/problems/reverse-linked-list/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {ListNode}
 */
function reverseList(node) {
    return reverseRecursively(null, node);
}

function reverseRecursively(prev, cur) {
    if (cur == null) {
        return prev;
    }
    
    let next = cur.next;
    cur.next = prev;
    return reverseRecursively(cur, next);
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
// [ 5, 4, 3, 2, 1 ]
console.log(createArrayFromLinkedList(reverseList(createLinkedListFromArray([1, 2, 3, 4, 5]))));
