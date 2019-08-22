const readline = require('readline');
const fs = require("fs");
const replaceInFile = require('replace-in-file');
const klawSync = require('klaw-sync');

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
    // "topics/HashTable/Jewels_and_Stones_771/Jewels_and_Stones_771.js"
    problemFileFullPath,
    // Used only if Problem Folder already exists.
    // "topics/HashTable/Jewels_and_Stones_771/"
    problemFolderFullPath;

console.log('Enter "<Problem number>. <Problem name>" (copy it from LeetCode problem page)');

rl.on('line', (line) => {
    // Expects manually copied line: "771. Jewels and Stones"
    if (expect === "<Problem number>. <Problem name>") {
        let dotIndex = line.indexOf('.');
        if (dotIndex >= 0) {
            problemNumber = line.substring(0, dotIndex);
        }
        problemName = line.substring(dotIndex + 2);
        
        // Check if Problem Folder already exists.
        // In that case request comment in brackets and add new JS file.
        problemFolderFullPath = findProblemFolder(problemName);
    
        // If Problem Folder exists, meaning at least one solution was already created.
        if (problemFolderFullPath != null) {
            console.log(`Problem Folder exists, new Solution file will be created.`);
            console.log(`\nProvide description in brackets for new Solution file`);
            expect = 'Description in brackets for new Soltuion File';
            
            // Set correct full name in case user provided partial name of already existing Problem Folder.
            let splittedPath = problemFolderFullPath.split('\\');
            // Get Problem Name from Problem Folder(by removing number at the end).
            let problemNameWithNumber = splittedPath[splittedPath.length - 1];
            problemName = problemNameWithNumber.substring(0, problemNameWithNumber.lastIndexOf('_'));
        }
        // If Problem Folder doesn't exist yet (user wants to create Problem Folder and first solution)
        else {
            expect = "Topic";
            console.log(`Problem Folder doesn't exist, it will be created.`);
            console.log(`\nProvide main Topic folder (for example: "HashTable" or "DynamicProgramming")`)
        }
    }
    // This will be executed if Problem Folder doesn't exist, therefore we want to create Problem Folder.
    else if (expect === "Topic") {
        topicFolderName = line;
        
        // Check if Topic Folder already exists(which is expected).
        if (fs.existsSync('topics/' + topicFolderName)) {
            console.log(`\nTopic folder exists (good)`);
            
            // Create Problem folder
            problemNameUnderscores = problemName.replace(/ /g, '_');
            problemFolderName = `${problemNameUnderscores}_${problemNumber}`;
            createProblemFolder();
            
            // Create Problem file (using "templateSolution.js" as a template).
            problemFileName = `${problemFolderName}.js`;
            problemFileFullPath = `topics/${topicFolderName}/${problemFolderName}/${problemFileName}`;
            copyFile("templateSolution.js", problemFileFullPath, function(exception) {
                if (exception) {
                    throw exception;
                }
    
                console.log(`"templateSolution.js" was copied to ${problemFileFullPath}`);
    
                // Add URL inside the Problem file.
                replaceUrlInProblemFile();
    
                exitApplication();
            });
        } else {
            console.log(`Specified Topic folder doesn't exist in "leetcode-solutions"`);
            console.log(`\nProvide main Topic folder (for example: "HashTable" or "DynamicProgramming")`)
        }
    }
    // This will be executed if Problem Folder already exists, therefore we want to add new Solution file.
    else if (expect === 'Description in brackets for new Soltuion File') {
        let splittedPath = problemFolderFullPath.split('\\');
        while (splittedPath[0] !== 'topics') {
            splittedPath.shift();
        }
        problemFolderFullPath = splittedPath.join('/');
        problemFolderName = splittedPath[splittedPath.length - 1];
        
        let descriptionInBracketsUnderscores = line.replace(/ /g, '_');
        
        let problemFileName = `[${descriptionInBracketsUnderscores}]_${problemFolderName}.js`;
        problemFileFullPath = `${problemFolderFullPath}/${problemFileName}`;
        copyFile("templateSolution.js", problemFileFullPath, function(exception) {
            if (exception) {
                throw exception;
            }
    
            console.log(`"templateSolution.js" was copied to ${problemFileFullPath}`);
    
            // Add URL inside the Problem file.
            replaceUrlInProblemFile();
    
            exitApplication();
        });
    }
});

// Creates Problem Folder inside Topic Folder.
function createProblemFolder() {
    try {
        createFolderRecursivelyIfDoesntExist(`topics/${topicFolderName}/${problemFolderName}`);
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
function copyFile(sourceFilePath, destinationFilePath, callback) {
    // "destinationFilePath" will be created or overwritten by default.
    fs.copyFile(sourceFilePath, destinationFilePath, callback);
}

// Replaces URL in Problem file
function replaceUrlInProblemFile() {
    problemNameDashed = problemName.toLowerCase().replace(/ /g, '-');
    let problemUrl = `https://leetcode.com/problems/${problemNameDashed}/`;
    
    const options = {
        files: problemFileFullPath,
        from: /LeetCode Problem URL/,
        to: problemUrl,
        // This is used, because otherwise filename "[something]_" isn't found by replace-in-file.
        disableGlobs: true
    };
    
    try {
        const results = replaceInFile.sync(options);
        // console.log('Replacement results:', results);
        console.log('URL was successfully set in Problem file');
    }
    catch (error) {
        console.error('Error occurred during URL replacement:', error);
    }
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
    
    console.log(`\nSearching for "${problemNameUnderscoresLowerCase}" Problem Folder inside "/topics/..."`);
    let foundProblemDirs = dirs.filter((dir) => dir.path.toLowerCase() === problemNameUnderscoresLowerCase);
    let foundProblemDir;
    
    // Problem Folder wasn't found
    if (foundProblemDirs.length === 0) {
        return null;
    }
    // Problem folder was found
    else {
        foundProblemDir = foundProblemDirs[0];
        return foundProblemDir.path;
    }
}

// Exits NodeJS Application.
function exitApplication() {
    rl.close();
    process.exit();
}
