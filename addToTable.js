const readline = require('readline');
const fs = require("fs");
const replaceInFile = require('replace-in-file');
const klawSync = require('klaw-sync');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let expect = "Problem name",
    // ...\leetcode-solutions\topics\HashTable\Jewels_and_Stones_771
    problemFolderFullPath,
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
    mySolutionsPaths,
    mySolutionsFileNames,
    otherSolutionsUrls,
    iOtherSolution = 0;

// Text in columns, which will be programmatically generated.
// ![][easy]
let difficultyColumn,
    // [771. Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/description/)
    titleColumn,
    // `HashTable`, `DP`, `Reverse`, `Palindrome`
    tagsColumn,
    // If there are several "My solutions", there will be space between them.
    // [![Some tooltip if needed](./images/solution.png)](HashTable/Jewels_and_Stones_771/Jewels_and_Stones_771.js)
    mySolutionsColumn,
    // [![](./images/solution.png)](https://leetcode.com/problems/jewels-and-stones/solution/)
    leetCodeSolutionColumn,
    // Single string, where each solution is separated by ", <br><br>"
    // 1) [Generating permut-s in descending order](https://leetcode.com/problems/largest-time-for-given-digits/discuss/201564/C%2B%2B-4-lines-0-ms-prev_permutation), <br><br>
    // 2) [Using 3 for loops instead of permut-s](https://leetcode.com/problems/largest-time-for-given-digits/discuss/200693/Java-11-liner-O(64)-w-comment-6-ms.), <br><br>
    // 3) [Interesting idea with limits in separate array](Array/Largest_Time_for_Given_Digits_949/[NOT_MINE_Interesting_idea_with_limits]_Largest_Time_for_Given_Digits_949.js)
    otherCoolSolutionsColumn,
    // Comment, which will help to determine in the future how much attention should be paid while resolving the problem.
    solvedOnMyOwnColumn,
    // Date when this Problem was added to README.md.
    dateColumn;

console.log(`Enter solved Problem Name (without problem number. Can be partial unique name)`);

rl.on('line', (line) => {
    // Expects "Jewels and Stones" or "Jewels_and_Stones".
    if (expect === "Problem name") {
        // Find Problem Folder
        problemFolderFullPath = findProblemFolder(line);
        
        // Problem Folder wasn't found
        if (problemFolderFullPath == null) {
            console.log(`Enter Problem name (without problem number)`);
        } else {
            console.log('Problem Folder was found(good)');
            console.log(`\t${problemFolderFullPath}`);
            
            // Request necessary info from user and generate text for each column inside README.md table.
            console.log('\nEnter Problem Difficulty: easy(e), medium(m), hard(h)');
            expect = "Difficulty";
        }
    } else if (expect === "Difficulty") {
        let difficulty;
        switch (line[0]) {
            case 'e':
                difficulty = 'easy';
                break;
            case 'm':
                difficulty = 'medium';
                break;
            case 'h':
                difficulty = 'hard';
                break;
        }
    
        // Provided difficulty was invalid.
        if (difficulty === undefined) {
            console.log('Enter Problem Difficulty (easy(e), medium(m), hard(h))');
        } else {
            difficultyColumn = `![][${difficulty}]`;
        
            let splittedPath = problemFolderFullPath.split('\\');
            problemFolderName = splittedPath[splittedPath.length - 1];
            topicFolderName = splittedPath[splittedPath.length - 2];
        
            let words = problemFolderName.split('_');
            problemNumber = words[words.length - 1];
            // Remove problem number.
            words.pop();
            problemName = words.join(' ');
            problemNameUnderscores = words.join('_');
            problemNameDashed = words.join('-').toLowerCase();

            titleColumn = `[${problemNumber}. ${problemName}](https://leetcode.com/problems/${problemNameDashed}/description/)`;
    
            // Request from user necessary info and generate text for each column inside README.md table.
            console.log(`\nAdd additional tags using "," as separator ("${getTagFromTopicName(topicFolderName)}" tag was already set automatically)`);
            expect = 'Tags';
        }
    } else if (expect === 'Tags') {
        let mainTopicTag = getTagFromTopicName(topicFolderName);
        let tags = [mainTopicTag];
    
        // If user has entered Additional Tags.
        if (line !== '') {
            // Get tags from user input.
            let additionalTags = line.split(',').map((tag) => getTagFromTopicName(tag.trim()));
            tags = removeArrayDuplicates(tags.concat(additionalTags));
        }
    
        tagsColumn = tags.join(', ');
    
        
        // Retrieve list of JS files(Problem Solutions) inside Problem Folder.
        let problemFilesFullPaths = findProblemFiles(problemFolderFullPath);
        // Get relative paths starting from 'topics\...'.
        mySolutionsPaths = problemFilesFullPaths.map(function(fullPath) {
            let relativePath = fullPath.substring(fullPath.indexOf('topics'));
            // Replace '\' with '/'
            return relativePath.replace(/\\/g, '/')
        });
        mySolutionsFileNames = mySolutionsPaths.map((fullPath) => fullPath.substring(fullPath.lastIndexOf('/') + 1));
        
        mySolutionsColumn = '';
        console.log(`\nEnter Tooltip for file "${mySolutionsFileNames[0]}" (when hovering over solution icon)`);
        expect = "MySolution Tooltip";
    } else if (expect === "MySolution Tooltip") {
        mySolutionsColumn += `[![${line}](./images/solution.png)](${mySolutionsPaths[0]})`;
    
        mySolutionsPaths.shift();
        mySolutionsFileNames.shift();
        
        if (mySolutionsPaths.length > 0) {
            mySolutionsColumn += ' ';
            console.log(`Enter Tooltip for file "${mySolutionsFileNames[0]}" (when hovering over solution icon)`);
        } else {
            console.log('\nIs there official LeetCode solution for this problem? (yes(y) / no(n))');
            expect = "Is there official LeetCode solution answer";
        }
    } else if (expect === "Is there official LeetCode solution answer") {
        // If official solution exists, generate URL for it.
        if (line[0] === 'y') {
            leetCodeSolutionColumn = `[![](./images/solution.png)](https://leetcode.com/problems/${problemNameDashed}/solution/)`;
        } else {
            leetCodeSolutionColumn = '-';
        }
    
    
        console.log(`\nAdd URLs for Other Cool Solutions using "," as separator`);
        expect = 'Other cool solutions URLs';
    } else if (expect === 'Other cool solutions URLs') {
    
        // If user has entered Other Cool Solutions URLs.
        if (line !== '') {
            otherSolutionsUrls = line.split(',').map((url) => url.trim());
            otherCoolSolutionsColumn = '';
            console.log(`\nEnter Description for Other Solution "${otherSolutionsUrls[0]}"`);
            expect = "Other Solutions Description";
        } else {
            otherCoolSolutionsColumn = '';
            console.log('\nSolved on my own?');
            expect = "Solved on my own answer";
        }
    } else if (expect === "Other Solutions Description") {
        // Example of generated string:
        // 1) [Generating permut-s in descending order](https://leetcode.com/problems/largest-time-for-given-digits/discuss/201564/C%2B%2B-4-lines-0-ms-prev_permutation), <br><br>
        otherCoolSolutionsColumn += `${iOtherSolution + 1}) [${line}](${otherSolutionsUrls[iOtherSolution]})`;
        iOtherSolution++;
        
        // Request Tooltips for Other Cool Soluions.
        if (iOtherSolution < otherSolutionsUrls.length) {
            otherCoolSolutionsColumn += ', <br><br>';
            console.log(`\nEnter Tooltip for file "${otherSolutionsUrls[0]}" (when hovering over solution icon)`);
        } else {
            console.log('\nSolved on my own?');
            expect = "Solved on my own answer";
        }
    } else if (expect === "Solved on my own answer") {
        solvedOnMyOwnColumn = line;
        
        dateColumn = getTodayString();

        // Add URL inside the Problem file.
        addTableRecordInReadmeFile();
        
        exitApplication();
    }
});

function addTableRecordInReadmeFile() {
    let readmeTableRecord = `| ${difficultyColumn} | ${titleColumn} | ${tagsColumn} | ${mySolutionsColumn} | ${leetCodeSolutionColumn} | ${otherCoolSolutionsColumn} | ${solvedOnMyOwnColumn} | ${dateColumn}`;
    // console.log(readmeTableRecord);
    
    const options = {
        files: 'README.md',
        from: /<!-- Placeholder Helper for new solutions\(used to programmaticaly insert new solutions here\) -->/,
        to: `${readmeTableRecord}\n<!-- Placeholder Helper for new solutions(used to programmaticaly insert new solutions here) -->`
    };
    
    try {
        const results = replaceInFile.sync(options);
        // console.log('Replacement results:', results);
        console.log('\nTable record was successfully added into README.md file!');
    }
    catch (error) {
        console.error('\nError occurred while adding Table record', error);
    }
}

// Returns today string in format "2019-07-24".
function getTodayString() {
    let now = new Date();
    let year = now.getFullYear();
    
    let month = now.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }
    
    let day = now.getDate();
    if (day < 10) {
        day = '0' + day;
    }
    
    return `\`${year}-${month}-${day}\``;
}

// Returns array, which doesn't contain duplicates.
function removeArrayDuplicates(arr) {
    return Array.from(new Set(arr));
}

function getTagFromTopicName(topicName) {
    let topicNameToTag = new Map([
        ['Dynamic Programming', 'DP'],
        ['DynamicProgramming', 'DP'],
        // Dash is necessary, since there is a limited amount of letters fit for column.
        ['Permutations', 'Permu-tations']
    ]);
    
    if (topicNameToTag.has(topicName)) {
        return '`' + topicNameToTag.get(topicName) + '`';
    }
    return '`' + topicName + '`';
}

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
    
    console.log(`\nSearching for "${problemNameUnderscoresLowerCase}" Problem Folder inside "/topics/..."`);
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