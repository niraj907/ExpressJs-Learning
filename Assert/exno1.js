// The assert module in Node.js is used for writing tests 
//or verifying conditions in your code.

import assert from 'assert';
let x = 12;
let y = 5;
try{
    // checking condition
    assert(x === y);
    console.log('Condition has been checked');
}
catch{
    console.log(`${x} ix not eyqual ${y}`);
}