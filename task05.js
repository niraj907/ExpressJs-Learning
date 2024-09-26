// The os module in Node.js is used to interact with
//  the operating system in various ways. It provides a number
//   of utility methods and properties for accessing information about the 
// operating system and performing operations related to it.



const os = require('node:os');
console.log('Operating system info');
console.log(os.EOL); // line break we can use thess as well \n 
console.log(os.availableParallelism()) // 8 output 
console.log(`Platform: ${os.platform()}`);
console.log(`OS realease : ${os.release()}`);
console.log(`Arch: ${os.arch()}`)

const freeMemory = os.freemem();
console.log(`Free memory: ${(freeMemory / 1024 / 1024 / 1024).toFixed(2)} GB`);
const totalMemory = os.totalmem();
console.log(`Free memory: ${(totalMemory / 1024 / 1024 / 1024).toFixed(2)} GB`);

console.log(`Hostname: ${os.hostname()}`)
console.log(`Tmpdir: ${os.tmpdir()}`)
console.log(`Type: ${os.type()}`)