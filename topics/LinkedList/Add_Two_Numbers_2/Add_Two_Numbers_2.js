// https://leetcode.com/problems/add-two-numbers/description/
// ---------------------------------------------------

// Runtime Complexity: O(Longest_list)
// Space Complexity: O(1) if we don't count the resulting list.
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let carry = 0;
    
    let head,
        tail;
    while (l1 != null || l2 != null) {
        let val1 = l1 ? l1.val : 0,
            val2 = l2 ? l2.val : 0;
        
        let curSum = val1 + val2 + carry;
        if (curSum >= 10) {
            carry = true;
            curSum -= 10;
        } else {
            carry = false;
        }
        
        if (head === undefined) {
            head = new ListNode(curSum);
            tail = head;
        } else {
            tail.next = new ListNode(curSum);
            tail = tail.next;
        }
        
        if (l1 != null) {
            l1 = l1.next;
        }
        if (l2 != null) {
            l2 = l2.next;
        }
    }
    if (carry) {
        tail.next = new ListNode(1);
    }
    
    return head;
}

/** Definition for singly-linked list. **/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
let l1 = new ListNode(2),
    l1Head = l1;
l1.next = new ListNode(4);
l1 = l1.next;
l1.next = new ListNode(3);
l1 = l1.next;

let l2 = new ListNode(5),
    l2Head = l2;
l2.next = new ListNode(6);
l2 = l2.next;
l2.next = new ListNode(4);
l2 = l2.next;

// 7 -> 0 -> 8
console.log(addTwoNumbers(l1Head, l2Head));
