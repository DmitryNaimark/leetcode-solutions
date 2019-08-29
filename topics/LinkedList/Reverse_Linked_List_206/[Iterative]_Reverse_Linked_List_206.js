// https://leetcode.com/problems/reverse-linked-list/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    // Not needed even if head == null OR head.next == null, it will be handled.
    // if (head == null || head.next == null) {
    //     return head;
    // }
    
    let prev = null,
        cur = head;
    
    while (cur != null) {
        let next = cur.next;
        
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    
    return prev;
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
