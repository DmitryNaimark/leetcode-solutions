// https://leetcode.com/problems/next-greater-element-i/
// ---------------------------------------------------

// Runtime Complexity: O(nums2 + nums1)
// Space Complexity: O(nums2), if we don't count res
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    let stack = [],
        nextGreater = new Map();
    
    for (let num of nums2) {
        while (stack.length > 0 && num > stack[stack.length - 1]) {
            nextGreater.set(stack.pop(), num);
        }
        
        stack.push(num);
    }
    
    let res = new Array(nums1.length);
    for (let i = 0; i < nums1.length; i++) {
        res[i] = nextGreater.has(nums1[i])
            ? nextGreater.get(nums1[i])
            : -1;
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// [-1, 3, -1]
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
// [3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
