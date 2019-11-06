// https://leetcode.com/problems/split-array-with-equal-sum/
// ---------------------------------------------------

// Runtime Complexity: O(n^3)
// Space Complexity: O(1)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function splitArray(nums) {
    const n = nums.length;
    
    let p_sum = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        p_sum[i + 1] = p_sum[i] + nums[i];
    }
    
    function getSumInclusive(i, j) {
        return p_sum[j + 1] - p_sum[i];
    }
    
    for (let i = 1; i < n - 5; i++) {
        let iSum = getSumInclusive(0, i - 1);
        for (let j = i + 2; j < n - 3; j++) {
            let jSum = getSumInclusive(i + 1, j - 1);
            if (iSum === jSum) {
                for (let k = j + 2; k < n - 1; k++) {
                    let kSum = getSumInclusive(j + 1, k - 1);
                    let lastSum = getSumInclusive(k + 1, n - 1);
                    if (jSum === kSum && kSum === lastSum) {
                        return true;
                    }
                }
            }
        }
    }
    
    return false;
}



// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// true
console.log(splitArray([1, 2, 1, 2, 1, 2, 1]));
// false
console.log(splitArray([2, 4, 5, 7, 3, 4, 5, 6, 1, 2, 3, 4, 3, 2, 1, 5, 6, 7]));
// false
console.log(splitArray([3, 5, 3, 5, 3, 5, 3, 5, 3, 6, 5, 7, 4, 5, 6, 5]));
// false
console.log(splitArray(
    [6284, 2052, 4671, 7951, 8299, 4321, 9980, 9495, -8844, 9634, 7087, 2707, 1527, 9889, 4452, 7149, 2654, -2848,
        -8766, 9700, 2262, 8111, 2233, 6734, -8715, 9838, 5685, 5564, 4896, -6429, 2047, -3720, 9, 7813, 5169, 2152, -6319,
        -7131, -9838, 6080, 4319, 1789, 1717, 2991, -3474, 3536, -4327, 1484, 2782, 5384, 5063, 2888, 5344, 8280, 4758,
        3287, 5395, -5620, 9745, 2374, 2344, -5749, 7750, 5945, 4976, -5311, 9009, 9486, -970, 2191, -6896, 7781, 9284,
        3504, 5055, 266, 8206, 8196, 9346, 6964, 4582, 4298, 6918, 6448, 2149, 6542, 4093, 8479, 3564, 518, 6917, 2905,
        6444, 2592, 3644, 3626, 4906, 3394, 4351, 1281, 8009, 2874, -4299, 7068, 1575, 8846, 8418, 2212, 8674, 5150, 2864,
        8031]));
