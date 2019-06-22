const readline = require('readline');
const fs = require("fs");
const replaceInFile = require('replace-in-file');
const klawSync = require('klaw-sync')

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
        // Replace spaces with underscores.
        problemNameUnderscores = line.replace(/ /g, '_');
        
        // Trim "_" from start and end.
        problemNameUnderscores = problemNameUnderscores.replace(/^_+|_+$/g, '');
        
        let dirsAndFiles = klawSync('.');
        console.log(paths.map((obj) => obj.path));
    }
});

// Exits NodeJS Application.
function exitApplication() {
    rl.close();
    process.exit();
}