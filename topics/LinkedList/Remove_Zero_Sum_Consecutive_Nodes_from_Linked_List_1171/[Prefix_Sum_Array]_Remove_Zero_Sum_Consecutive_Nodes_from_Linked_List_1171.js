// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/
// ---------------------------------------------------

// Runtime Complexity: O(N), but it will potentially iterate a lot of times over the same 
//     starting nodes, and prefix sum items, after some nodes are removed.
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
    let prefixSums = createPrefixSumsFromLinkedList(head);
    
    let nodesWereRemoved;
    do {
        nodesWereRemoved = false;
        
        let numIndex = new Map();
        for (let i = 0; i < prefixSums.length; i++) {
            let num = prefixSums[i];
        
            if (numIndex.has(num)) {
                let iNumPrevious = numIndex.get(num);
            
                prefixSums.splice(iNumPrevious, i - iNumPrevious);
                head = removeListNodes(head, iNumPrevious, i - iNumPrevious);
                nodesWereRemoved = true;
                break;
            }
            numIndex.set(num, i);
        }
    } while (nodesWereRemoved);
    
    return head;
}

function removeListNodes(head, iStart, count) {
    if (iStart === 0) {
        for (let i = 0; i < count && head != null; i++) {
            head = head.next;
        }
    } else {
        // Example
        // 0 -> 1 -> 2 -> 3 -> 4
        // h
        //                     c
        //      p
        // 
        // iStart = 2
        // count = 2
        let cur = head;
        for (let i = 0; i < iStart - 1 && cur != null; i++) {
             cur = cur.next;
        }
    
        let prev = cur;
        for (let i = 0; i < count + 1 && cur != null; i++) {
            cur = cur.next;
        }
        prev.next = cur;
    }
    
    return head;
}

function createPrefixSumsFromLinkedList(head) {
    let prefixSums = [0];
    
    while (head != null) {
        prefixSums.push(prefixSums[prefixSums.length - 1] + head.val);
        head = head.next;
    }
    
    return prefixSums;
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
console.log(createArrayFromLinkedList(removeZeroSumSublists(createLinkedListFromArray([1,2,-3,3,1]))));
console.log(createArrayFromLinkedList(removeZeroSumSublists(createLinkedListFromArray([1,2,3,-3,4]))));
console.log(createArrayFromLinkedList(removeZeroSumSublists(createLinkedListFromArray([1,2,3,-3,-2]))));
