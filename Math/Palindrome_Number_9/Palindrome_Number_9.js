// https://leetcode.com/problems/palindrome-number/description/
// ---------------------------------------------------
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
// Example 1:
//
// Input: 121
// Output: true
//
// Example 2:
//
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
//
// Example 3:
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//
// Follow up:
//
// Coud you solve it without converting the integer to a string?
// ---------------------------------------------------

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    
    let originalNumber = x;
    let reversedNumber = 0;
    
    while(x > 0) {
        let remainder = x % 10;
        x = (x - remainder) / 10;
        reversedNumber = reversedNumber * 10 + remainder;
    }
    
    return (reversedNumber === originalNumber);
}

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(1221));
// Since 0 is at the end, it can't be a Palindrome.
console.log(isPalindrome(128210));