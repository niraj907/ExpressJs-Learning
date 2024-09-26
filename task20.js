// How to create and export our modules 

const {add,sub,mult,div,name} = require('./task21');

console.log(`Add: ${add(12,5)}`);
console.log(`Sub: ${sub(12,5)}`);
console.log(`Mult: ${mult(12,5)}`);
console.log(`Div: ${div(12,2)}`);
console.log(`Name : ${name}`)