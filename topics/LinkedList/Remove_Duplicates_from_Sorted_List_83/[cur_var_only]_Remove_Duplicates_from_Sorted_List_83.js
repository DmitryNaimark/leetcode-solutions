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
    let cur = head;
    
    while (cur != null && cur.next != null) {
        if (cur.next.val === cur.val) {
            // Notice that cur.next.next will still point somewhere, which could create memory leak.
            // Since GC won't collect the node.
            cur.next = cur.next.next;
            
            // To get rid of memory leak:
            // let nextAfterDuplicate = cur.next.next;
            // cur.next.next = null;
            // cur.next = nextAfterDuplicate;
        } else {
            cur = cur.next;
        }
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
