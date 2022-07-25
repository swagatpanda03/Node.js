const fs = require('fs');

const readFileSync = fs.readFileSync;
const writeFileSync = fs.writeFileSync;

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first);
console.log(second);

//either create or overwrite existing file.

writeFileSync('./content/result-sync.txt', `Result: ${first}, ${second}`);

//append the file.

writeFileSync('./content/result-sync.txt', `Result: ${first}, ${second}`, {flag: 'a'});
