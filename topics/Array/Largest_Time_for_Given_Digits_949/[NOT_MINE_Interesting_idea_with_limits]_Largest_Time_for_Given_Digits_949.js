/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    var max;
    var index;
    var time = "";
    var limit = [3,4,6,10];
    var nums = A.slice();
    
    for (var i = 0; i < 4; i++) {
        max = -1;
        for (var j = 0; j < nums.length; j++) {
            if (nums[j] < limit[i] && nums[j] > max) {
                max = nums[j];
                index = j;
            }
        }
        
        if (max === -1) {
            if (i > 0 && time[0] === "2") {
                i = -1;
                time = "";
                nums = A.slice();
                limit[0]--;
                continue;
            }
            break;
        }
        
        if (i === 0 && max < 2) {
            limit[1] = 10;
        } else if (i === 2) {
            time += ":";
        }
        
        time += max;
        nums.splice(index, 1);
    }
    
    return time.length === 5 ? time : "";
};


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// "23:41"
console.log(largestTimeFromDigits([1, 2, 3, 4]));
// "23:41"
console.log(largestTimeFromDigits([4, 2, 1, 3]));
// "23:59"
console.log(largestTimeFromDigits([9, 2, 3, 5]));
// "00:00"
console.log(largestTimeFromDigits([0, 0, 0, 0]));
// ""
console.log(largestTimeFromDigits([3, 3, 3, 8]));