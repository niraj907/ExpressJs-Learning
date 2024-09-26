// importing modules
const fs = require('fs');
const path = require('path');
// we are using synchronous function or block functions
// create a new file 
fs.writeFileSync('read.text',"Welcome to niraj , he  comapany to connect ");
fs.appendFileSync('read.text',"\n How are you I am find Thanks you");

// const buf_data = fs.readFileSync('read.text');
// original_data = buf_data.toString();
// console.log(original_data);

// fs.renameSync('read.text','read.txt');

// // Generate the file path
const filePath = path.join(__dirname, 'read.text'); // __dirname is a special variable that contains the directory of the current module

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});