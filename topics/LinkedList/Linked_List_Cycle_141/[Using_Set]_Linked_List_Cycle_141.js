// https://leetcode.com/problems/linked-list-cycle/
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
 * @return {boolean}
 */
function hasCycle(head) {
    let visitedNodesSet = new Set();
    
    while (head != null) {
        if (visitedNodesSet.has(head)) {
            return false;
        }
        
        visitedNodesSet.add(head);
        head = head.next;
    }
    
    return false;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(/**/);
