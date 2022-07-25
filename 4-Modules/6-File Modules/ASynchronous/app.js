const fs = require('fs');

var first;
var second;
fs.readFile('./content/first.txt', 'utf8', (err,result) => {
    if(err) {
        console.log('Error: ', err);
        return;
    }
    first = result;
});

fs.readFile('./content/second.txt', 'utf8', (err,result) => {
    if(err) {
        console.log('Error: ', err);
        return;
    }
    second = result;
});

fs.writeFile('./content/result-async.txt', `Result : ${first}, ${second}`, (err, result)=>{
    if(err) {
        console.log(err);
        return;
    }
    console.log(result); 
});