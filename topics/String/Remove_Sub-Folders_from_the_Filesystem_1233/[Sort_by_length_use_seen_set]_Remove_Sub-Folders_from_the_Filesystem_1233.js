// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/
// ---------------------------------------------------

// Runtime Complexity: O(N * log(N) + N * m), where N is folder length, m is average size of string
// Space Complexity: O(N * m)
function removeSubfolders(folder) {
    folder.sort((s1, s2) => s1.length - s2.length);
    
    let res = [],
        seen = new Set();
        
    for (let path of folder) {
        let i = 0;
        for (; i < path.length; i++) {
            if (path[i] === '/' && seen.has(path.substring(0, i))) {
                break;
            }
        }
        if (i >= path.length) {
            seen.add(path);
            res.push(path);
        }
    }
    
    return res;
}


// ---------------------------------------------------
//                    Test Cases
// ---------------------------------------------------
console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]));
console.log(removeSubfolders(["/a", "/a/b/c", "/a/b/d"]));
console.log(removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"]));
