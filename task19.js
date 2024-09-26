// notes : asynchronous function call we have to use 

const { error } = require('console');
const fs = require('fs');
// fs.writeFile('index.txt','today is a awesome day: ',
// (err)=>{
// if(err){
//     console.error('Error writing to file ',err);
// }else{
// console.log('File written successfully');
// }
// });

// fs.appendFile('index.txt','Please enter your name and email',(error)=>{
//   if(error){
//     console.error('Error writing to file ',error);
// }else{
// console.log('File written successfully');
// }  
// });

const data = fs.readFile('index.txt','UTF-8',(error,data)=>{
    if (error) {
        console.error('Error reading the file:', error);
        return;
    }
    console.log(data);
})

