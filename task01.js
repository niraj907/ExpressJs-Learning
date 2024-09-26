// importing requied modules
const fs = require('fs');
const path = require('path');

// creating the file Path
const filePath = path.join(__dirname, 'example.txt'); // __dirname is a special variable 
console.log(__dirname);
console.log(filePath);
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});
