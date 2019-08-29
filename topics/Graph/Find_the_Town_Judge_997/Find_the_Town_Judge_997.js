// https://leetcode.com/problems/find-the-town-judge/
// ---------------------------------------------------

// Runtime Complexity: O(N)
// Space Complexity: O(N)
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(N, trust) {
    if (N === 1) {
        return 1;
    }
    
    let trustCountForPerson = new Map();
    
    for ([personWhoTrusts, trustedPerson] of trust) {
        trustCountForPerson.set(trustedPerson, (trustCountForPerson.get(trustedPerson) || 0) + 1);
        trustCountForPerson.set(personWhoTrusts, (trustCountForPerson.get(personWhoTrusts) || 0) - 1);
    }
    
    for (let [personNumber, trustCount] of trustCountForPerson.entries()) {
        if (trustCount === N - 1) {
            return personNumber;
        }
    }
    
    return -1;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
// 1
console.log(findJudge(1, []));
// 2
console.log(findJudge(2, [[1,2]]));
// 2
console.log(findJudge(2, [[1,2]]));
// -1
console.log(findJudge(3, [[1,3],[2,3],[3,1]]));
