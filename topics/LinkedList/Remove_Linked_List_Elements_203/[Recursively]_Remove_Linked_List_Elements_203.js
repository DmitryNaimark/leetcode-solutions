// https://leetcode.com/problems/remove-linked-list-elements/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    if (head == null) {
        return null;
    }
    
    if (head.val === val) {
        return removeElements(head.next, val);
    }
    
    head.next = removeElements(head.next, val);
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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createArrayFromLinkedList(head) {
    let res = [];
    
    while (head != null) {
        res.push(head.val);
        head = head.next;
    }
    
    return res;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [1, 2, 3, 4, 5]
console.log(createArrayFromLinkedList(removeElements(createLinkedListFromArray([1, 2, 6, 3, 4, 5, 6]), 6)));
