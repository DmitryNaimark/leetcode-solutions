// https://leetcode.com/problems/remove-linked-list-elements/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(1)
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(head, val) {
    // Keep moving head to the right if head.val === val. 
    while (head != null && head.val === val) {
        let next = head.next;
        
        // Manually set .next to null, so there will be no memory leak.
        head.next = null;
        head = next;
    }
    
    if (head == null) {
        return head;
    }
    
    let node = head;
    while (node.next != null) {
        if (node.next.val === val) {
            node.next = node.next.next;
        } else {
            node = node.next;
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
