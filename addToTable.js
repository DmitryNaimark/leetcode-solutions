const readline = require('readline');
const fs = require("fs");
const replaceInFile = require('replace-in-file');
const klawSync = require('klaw-sync');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let expect = "Problem name",
    // "771"
    problemNumber,
    // "Jewels and Stones"
    problemName,
    // "Jewels_and_Stones"
    problemNameUnderscores,
    // "jewels-and-stones"
    problemNameDashed,
    // "HashTable"
    topicFolderName,
    // "Jewels_and_Stones_771"
    problemFolderName,
    // "Jewels_and_Stones_771.js"
    problemFileName,
    // "HashTable/Jewels_and_Stones_771/Jewels_and_Stones_771.js"
    problemFileFullPath;

console.log(`Enter Problem name (without problem number)`);

rl.on('line', (line) => {
    // Expects "Jewels and Stones" or "Jewels_and_Stones".
    if (expect === "Problem name") {
        // Find Problem Folder
        let problemFolderFullPath = findProblemFolder(line);
        
        // Problem Folder wasn't found
        if (problemFolderFullPath == null) {
            console.log(`Enter Problem name (without problem number)`);
        } else {
            console.log('Problem Folder was found(good)');
            console.log(`\t${problemFolderFullPath}`);
            
            // Retrieve list of JS files(Problem Solutions) inside Problem Folder.
            let problemFilesFullPaths = findProblemFiles(problemFolderFullPath);
        }
    }
});

function findProblemFiles(problemFolderFullPath) {
    let problemFiles = klawSync(problemFolderFullPath, {nodir: true});
    return problemFiles.map((problemFile) => problemFile.path);
}

// Returns full path for provided Problem Folder name.
// problemName: case insensitive, spaces or underscores, without problem number.
function findProblemFolder(problemName) {
    let dirs = klawSync('./topics', {nofile: true, depthLimit: 1});
    
    // Replace spaces with underscores.
    problemNameUnderscores = problemName.replace(/ /g, '_');
    
    // Trim "_" from start and end.
    problemNameUnderscores = problemNameUnderscores.replace(/^_+|_+$/g, '');
    
    let problemNameUnderscoresLowerCase = problemNameUnderscores.toLowerCase();
    
    console.log(`Searching for "${problemNameUnderscoresLowerCase}" Problem Folder inside "/topics/..."`);
    let foundProblemDirs = dirs.filter((dir) => dir.path.toLowerCase().indexOf(problemNameUnderscoresLowerCase) >= 0);
    let foundProblemDir;
    
    // Problem Folder wasn't found
    if (foundProblemDirs.length === 0) {
        console.error(`Couldn't find specified Problem Folder. Make sure such folder exists inside some Topic Folder (search is case insensitive)`);
        return null;
    }
    // Problem folder was found
    else {
        foundProblemDir = foundProblemDirs[0];
        // console.log(dirs.map((obj) => obj.path));
        // console.log('foundProblemDir.path', foundProblemDir.path);
        return foundProblemDir.path;
    }
}

// Exits NodeJS Application.
function exitApplication() {
    rl.close();
    process.exit();
}