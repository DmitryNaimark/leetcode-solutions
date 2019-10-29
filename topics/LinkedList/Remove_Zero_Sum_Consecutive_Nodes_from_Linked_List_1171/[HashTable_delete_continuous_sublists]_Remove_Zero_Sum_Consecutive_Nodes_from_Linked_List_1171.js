// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
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
 * @param {ListNode} head
 * @return {ListNode}
 */
function removeZeroSumSublists(head) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    
    let prefixSumToNodeMap = new Map([[0, dummyHead]]),
        curSum = 0;
    
    while (head != null) {
        curSum += head.val;
        
        if (prefixSumToNodeMap.has(curSum)) {
            let nodeToStay = prefixSumToNodeMap.get(curSum);
            
            while (nodeToStay.next !== head.next) {
                curSum += nodeToStay.next.val;
                
                if (nodeToStay.next !== head) {
                    prefixSumToNodeMap.delete(curSum);
                }
                
                nodeToStay.next = nodeToStay.next.next;
            }
        } else {
            prefixSumToNodeMap.set(curSum, head);
        }
        
        head = head.next;
    }
    
    return dummyHead.next;
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
// [3, 1]
console.log(createArrayFromLinkedList(removeZeroSumSublists(createLinkedListFromArray([1,2,-3,3,1]))));
// [1, 2, 4]
console.log(createArrayFromLinkedList(removeZeroSumSublists(createLinkedListFromArray([1,2,3,-3,4]))));
// [1]
console.log(createArrayFromLinkedList(removeZeroSumSublists(createLinkedListFromArray([1,2,3,-3,-2]))));
// [1]
console.log(createArrayFromLinkedList(removeZeroSumSublists(createLinkedListFromArray([2, -2, 1]))));
// null
console.log(createArrayFromLinkedList(removeZeroSumSublists(createLinkedListFromArray([0, 0, 0]))));
