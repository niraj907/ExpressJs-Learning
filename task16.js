const path = require('node:path');
const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1); // myfile.html
const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a2); // C:\temp
a3 = path.extname(__filename)
console.log(a3); // .js
console.log(__filename,a3); // C:\Users\pc\Desktop\Nodejs\task16.js .js