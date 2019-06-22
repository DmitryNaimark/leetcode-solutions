// https://leetcode.com/problems/add-two-numbers/description/
// ---------------------------------------------------
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// Example:
//     Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
//     Output: 7 -> 0 -> 8
//     Explanation: 342 + 465 = 807.
// ---------------------------------------------------

/** Definition for singly-linked list. **/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let andOne = 0;
    
    let resultingList,
        r;
    while (l1 != null || l2 != null) {
        let val1 = l1 ? l1.val : 0,
            val2 = l2 ? l2.val : 0;
        
        let curSum = val1 + val2 + andOne;
        if (curSum >= 10) {
            andOne = true;
            curSum -= 10;
        } else {
            andOne = false;
        }
        
        if (resultingList === undefined) {
            resultingList = new ListNode(curSum);
            r = resultingList;
        } else {
            r.next = new ListNode(curSum);
            r = r.next;
        }
        
        if (l1 != null) {
            l1 = l1.next;
        }
        if (l2 != null) {
            l2 = l2.next;
        }
    }
    if (andOne) {
        r.next = new ListNode(1);
    }
    
    return resultingList;
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