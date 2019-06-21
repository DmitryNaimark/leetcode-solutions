const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let expect = "<Problem number>. <Problem name>",
    problemNumber,
    problemName,
    problemNameUnderscores,
    topicFolderName,
    problemFolderName;

console.log('Enter "<Problem number>. <Problem name>" (copy it from LeetCode problem page)');

rl.on('line', (line) => {
    // Expects manually copied line: "771. Jewels and Stones"
    if (expect === "<Problem number>. <Problem name>") {
        let dotIndex = line.indexOf('.');
        problemNumber = line.substring(0, dotIndex);
        problemName = line.substring(dotIndex + 2);
        
        expect = "Topic";
        console.log(`Provide main Topic folder (for example: "HashTable" or "DynamicProgramming")`)
    } else if (expect === "Topic") {
        topicFolderName = line;
        
        // Check if Topic Folder already exists(which is expected).
        if (fs.existsSync(topicFolderName)) {
            console.log(`Topic folder exists (good)`);
            
            problemNameUnderscores = problemName.replace(' ', '_');
            problemFolderName = `${problemNameUnderscores}_${problemNumber}`;
            console.log(`Creating Problem folder "${problemFolderName}" inside Topic folder "${topicFolderName}"`);
    
            createProblemFolder();
            
            exitApplication();
        } else {
            console.log(`Specified Topic folder doesn't exist in "leetcode-solutions"`);
            console.log(`Provide main Topic folder (for example: "HashTable" or "DynamicProgramming")`)
        }
    }
});

// Creates Problem Folder inside Topic Folder.
function createProblemFolder() {
    try {
        createFolderRecursivelyIfDoesntExist(`${topicFolderName}/${problemFolderName}`);
        console.log(`Problem folder "${problemFolderName}" was created inside Topic folder "${topicFolderName}"`);
    } catch (err) {
        console.log(`Couldn't create Problem folder, error:`);
        console.error(err)
    }
}

// Creates folder(you can provide relative path using slash: 'parentFolder/childFolder".
function createFolderRecursivelyIfDoesntExist(folderPath) {
    try {
        fs.mkdirSync(folderPath, { recursive: true });
    } catch (exception) {
        if (exception.code !== 'EEXIST') {
            throw exception;
        }
    }
}

// Exits NodeJS Application.
function exitApplication() {
    rl.close();
    process.exit();
}