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
    let curA = headA,
        curB = headB;
    
    while (curA !== curB) {
        curA = (curA == null) ? headB : curA.next;
        curB = (curB == null) ? headA : curB.next;
    }
    
    return curA;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);
