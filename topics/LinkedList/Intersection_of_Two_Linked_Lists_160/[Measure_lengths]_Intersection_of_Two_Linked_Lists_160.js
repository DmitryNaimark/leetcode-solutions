// https://leetcode.com/problems/intersection-of-two-linked-lists/
// ---------------------------------------------------

// Runtime Complexity: O(l1 + l2)
// Space Complexity: O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
    if (headA == null || headB == null) {
        return null;
    }
    
    let aLength = findLength(headA),
        bLength = findLength(headB);
    
    
    let lengthsDiff = Math.abs(aLength - bLength);
    if (aLength > bLength) {
        for (let i = 0; i < lengthsDiff; i++) {
            headA = headA.next;
        }
    } else {
        for (let i = 0; i < lengthsDiff; i++) {
            headB = headB.next;
        }
    }
    // Or, we could do this to move pointer in the longer list.
    // while (aLength > bLength) {
    //     headA = headA.next;
    //     aLength--;
    // }
    // while (bLength > aLength) {
    //     headB = headB.next;
    //     bLength--;
    // }
    
    while (headA !== headB) {
        headA = headA.next;
        headB = headB.next;
    }
    
    return headA;
}

function findLength(head) {
    let length = 0;
    while (head != null) {
        length++;
        head = head.next;
    }
    
    return length;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);
