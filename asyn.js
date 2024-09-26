const fs = require('fs');
// asynchronous function 
// const data = fs.readFileSync('read.txt','utf-8');
// console.log(data);


// synchronous function
const data = fs.readFile('read.txt', 'utf-8',(error,data)=>{
    if (error) {
        console.error('Error reading the file:', error);
        return;
    }
    console.log(data);
});
console.log('after the data');