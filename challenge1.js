const fs = require('fs');

// Write to the file
fs.writeFileSync('bio.txt', 'Hello, my name is Niraj Chaudary. I am from Herald College, Kathmandu.');

// Append to the file
fs.appendFileSync('bio.txt', '\nI am in level 6.');

const buf_data = fs.readFileSync('bio.txt','utf-8');
console.log(buf_data);
// const original_data = buf_data.toString();
// console.log(`Original data: ${original_data}`);
fs.renameSync('bio.txt','mybio.txt');

fs.unlinkSync('mybio.txt'); // remove or delete