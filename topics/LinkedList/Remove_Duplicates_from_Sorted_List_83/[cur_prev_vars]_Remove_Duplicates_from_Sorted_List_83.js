// https://leetcode.com/problems/remove-duplicates-from-sorted-list/
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
function deleteDuplicates(head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    let prev = head,
        cur = head.next;
    while (cur != null) {
        if (cur.val === prev.val) {
            prev.next = cur.next;
            // Handle memory leak.
            cur.next = null;
        } else {
            prev = cur;
        }
        
        cur = cur.next;
    }
    
    return head;
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
// [1, 2]
console.log(createArrayFromLinkedList(deleteDuplicates(createLinkedListFromArray([1,1,2]))));
