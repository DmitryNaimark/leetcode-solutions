// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/
// ---------------------------------------------------

// Runtime Complexity: O(T * log(T) + T), where T is total chars in folder.
// T * log(T) to sort all strings alphabetically. + T(actually more like +2T) to compare strings.
// Space Complexity: O(N * m), m is average size of string.
function removeSubfolders(folder) {
    folder.sort((s1, s2) => s1.localeCompare(s2));
    
    let res = [];
    
    let parent = ' /';
    let pLength = 2;
    
    for (let path of folder) {
        if (path.length === pLength || path.substring(0, pLength) !== parent) {
            parent = path + '/';
            pLength = parent.length;
            res.push(parent);
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
