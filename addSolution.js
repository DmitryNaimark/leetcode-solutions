const readline = require('readline');
const fs = require("fs");
const replaceInFile = require('replace-in-file');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let expect = "<Problem number>. <Problem name>",
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
            
            // Create Problem folder
            problemNameUnderscores = problemName.replace(/ /g, '_');
            problemFolderName = `${problemNameUnderscores}_${problemNumber}`;
            createProblemFolder();
            
            // Create Problem file (using "templateSolution.js" as a template).
            problemFileName = `${problemFolderName}.js`;
            problemFileFullPath = `${topicFolderName}/${problemFolderName}/${problemFileName}`;
            copyFile("templateSolution.js", problemFileFullPath);
            
            // Add URL inside the Problem file.
            replaceUrlInProblemFile();
            
            // exitApplication();
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

// Copies file from one folder to another with possibility to rename the file.
function copyFile(sourceFilePath, destinationFilePath) {
    // "destinationFilePath" will be created or overwritten by default.
    fs.copyFile(sourceFilePath, destinationFilePath, function(exception) {
        if (exception) {
            throw exception;
        }
        
        console.log(`${sourceFilePath} was copied to ${destinationFilePath}`);
    });
}

// Replaces URL in Problem file
function replaceUrlInProblemFile() {
    problemNameDashed = problemName.toLowerCase().replace(/ /g, '-');
    let problemUrl = `https://leetcode.com/problems/${problemNameDashed}/`;
    
    const options = {
        files: problemFileFullPath,
        from: /LeetCode Problem URL/,
        to: problemUrl
    };
    
    try {
        const results = replaceInFile.sync(options);
        // console.log('Replacement results:', results);
    }
    catch (error) {
        console.error('Error occurred during URL replacement:', error);
    }
}

// Exits NodeJS Application.
function exitApplication() {
    rl.close();
    process.exit();
}