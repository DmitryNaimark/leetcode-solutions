# LeetCode-solutions
This repository contains list of LeetCode problems I've solved, my JavaScript solutions and overal progress.

| # | Difficulty | Title | Tags | My Solutions | LeetCode Solution | Other cool solutions | Solved on my own? | Date |
|:-:|:----------:|-------|------|:------------:|:-----------------:|:--------------------:|:-----------------:|:----:|
| 1 | ![][easy] | [Two Sum](https://leetcode.com/problems/two-sum/description/) | `Map`, `Array` | [![](./images/solution.png)](Map/Two_Sum_1/Two_Sum_1.js) | [![](./images/solution.png)](https://leetcode.com/problems/two-sum/solution/#) | | Yes | `2018-10-01`
| 7 | ![][easy] | [Reverse Integer](https://leetcode.com/problems/reverse-integer/description/) | `Reverse`, `Math`, `String` | [![Using string](./images/solution.png)](String/Reverse_Integer_7/[Using_String]_Reverse_Integer_7.js) [![Using Math](./images/solution.png)](Math/Reverse_Integer_7/[Using_Math]_Reverse_Integer_7.js)| [![](./images/solution.png)](https://leetcode.com/problems/reverse-integer/solution/#) | | Yes | `2018-10-02`
| 9 | ![][easy] | [Palindrome Number](https://leetcode.com/problems/palindrome-number/description/) | `Reverse`, `Math`, `Palindrome` | [![](./images/solution.png)](Math/Palindrome_Number_9/Palindrome_Number_9.js) [![](./images/solution.png)](Math/Palindrome_Number_9/[Reversing_Half_the_Number]_Palindrome_Number_9.js) | [![](./images/solution.png)](https://leetcode.com/problems/palindrome-number/solution/#) | | Yes | `2018-10-02`
| 13 | ![][easy] | [Roman to Integer](https://leetcode.com/problems/roman-to-integer/description/) | `Map`, `Math` | [![](./images/solution.png)](Map/Roman_to_Integer_13/Roman_to_Integer_13.js) [![](./images/solution.png)](Map/Roman_to_Integer_13/[Using_Single_Characters_Only]_Roman_to_Integer_13.js) | - | | Yes | `2018-10-03`
| 14 | ![][easy] | [Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix/description/) | `String` | [![](./images/solution.png)](String/Longest_Common_Prefix_14/Longest_Common_Prefix_14.js) | [![](./images/solution.png)](https://leetcode.com/problems/longest-common-prefix/solution/#) | | Yes | `2018-10-03`
| 914 | ![][easy] | [X of a Kind in a Deck of cards](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/description/) | `GCD`, `Math`, `Map` | [![](./images/solution.png)](Math/X_of_a_Kind_in_a_Deck_of_Cards_914/X_of_a_Kind_in_a_Deck_of_Cards_914.js) | [![](./images/solution.png)](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solution/#) | | No, almost (couldn't figure good GCD formula) | `2018-10-07`
| 2 | ![][medium] | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/) | `LinkedList` | [![](./images/solution.png)](LinkedList/Add_Two_Numbers_2/Add_Two_Numbers_2.js) | [![](./images/solution.png)](https://leetcode.com/problems/add-two-numbers/solution/#) | | Yes | `2018-10-07`
| 3 | ![][medium] | [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/description/) | `String`, `Map` | [![](./images/solution.png)](String/Longest_Substring_Without_Repeating_Characters_3/Longest_Substring_Without_Repeating_Characters_3.js) | [![](./images/solution.png)](https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/#) | | Yes, but suboptimal | `2018-10-11`
| 4 | ![][hard] | [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/description/) | `Array`, `Median` | [![](./images/solution.png)](Array/Median_of_Two_Sorted_Arrays_4/Median_of_Two_Sorted_Arrays_4.js) | [![](./images/solution.png)](https://leetcode.com/problems/median-of-two-sorted-arrays/solution/#) | [[YouTube] Median of two sorted arrays - standard solution](https://www.youtube.com/watch?v=CMjAo8_8JYM) | Yes, creative fast solution | `2018-10-12`

## Glossary
### Math
* **GCD** - [Greatest Common Divisor](https://en.wikipedia.org/wiki/Greatest_common_divisor).
    * GCD for `6` and `9` is `3`.  
    Other names: greatest common factor(**gcf**), highest common factor(**hcf**), greatest common measure(**gcm**), highest common divisor(**hcd**).  
    GCD between two numbers can be found using [Euclidian Algorithm](https://www.youtube.com/watch?v=JUzYl1TYMcU).
    
### Algorithms
* **[Sliding window](https://wcipeg.com/wiki/Sliding_window)** - abstract concept commonly [used in array/string problems](https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/#)  
    * A window is a range of elements in the array/string which usually defined by the start and end indices, i.e. `[i,j)` (left-closed, right-open).  
    A sliding window is when a window "slides" its two boundaries to the certain direction.  
    For example, if we slide `[i,j)` to the right by 1 element, then it becomes `[i+1,j+1)` (left-closed, right-open).  
    We can slide only start or only end, window can change its size.
    

<!-- References to images, which can be used in markdown -->
[easy]: ./images/easy.png
[medium]: ./images/medium.png
[hard]: ./images/hard.png