// https://leetcode.com/problems/number-of-recent-calls/
// ---------------------------------------------------
// Write a class RecentCounter to count recent requests.
//
// It has only one method: ping(int t), where t represents some time in milliseconds.
//
// Return the number of pings that have been made from 3000 milliseconds ago until now.
// Any ping with time in [t - 3000, t] will count, including the current ping.
// It is guaranteed that every call to ping uses a strictly larger value of t than before.
//
// Example 1:
//     Input: inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
//     Output: [null,1,2,3,3]
//
// Note:
//     Each test case will have at most 10000 calls to ping.
//     Each test case will call ping with strictly increasing values of t.
//     Each call to ping will have 1 <= t <= 10^9.
// ---------------------------------------------------

var RecentCounter = function() {
    this.recentCalls = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.recentCalls.push(t);
    let minCall = t - 3000,
        recentCallsCount = 0;

    // This is naive solution.
    // It's better to use queue(space complexity is better), or at least store the index of "already in the past" call.
    for (let call of this.recentCalls) {
        if (call >= minCall) {
            recentCallsCount++;
        }
    }
    return recentCallsCount;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = Object.create(RecentCounter).createNew()
 * var param_1 = obj.ping(t)
 */

// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
let recentCounter = new RecentCounter();
// 1
console.log(recentCounter.ping(100));
// 2
console.log(recentCounter.ping(3000));
// 3
console.log(recentCounter.ping(3100));
// 3
console.log(recentCounter.ping(3101));
// 1
console.log(recentCounter.ping(7000));