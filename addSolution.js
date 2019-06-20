const readline = require('readline');
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let expect = "<Problem number>. <Problem name>";

console.log('Enter "<Problem number>. <Problem name>" (copy it from LeetCode problem page)');

rl.on('line', (line) => {
    // Expects manually copied line: "771. Jewels and Stones"
    if (expect === "<Problem number>. <Problem name>") {
        let dotIndex = line.indexOf('.');
        let problemNumber = line.substring(0, dotIndex);
        let problemName = line.substring(dotIndex + 2);
        
        expect = "Topic";
        console.log(`Provide main topic folder (for example: "HashTable" or "DynamicProgramming")`)
    } else if (expect === "Topic") {
        const topicFolderRelativePath = line;
        
        if (fs.existsSync(topicFolderRelativePath)) {
            console.log(`Folder exists!`);
            exitApplication();
        } else {
            console.log(`Specified folder doesn't exist in "leetcode-solutions"`);
            console.log(`Provide main topic folder (for example: "HashTable" or "DynamicProgramming")`)
        }
    }
});


function exitApplication() {
    rl.close();
    process.exit();
}