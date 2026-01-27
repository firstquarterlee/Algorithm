const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0].trimEnd();
    str2 = input[1].trimStart();
    
    
    console.log(`${str1}${str2}`)
});