//Importing Required Modules
const fs = require('fs');
const EventEmitter = require('events'); // 
const fileEmitter = new EventEmitter(); // object created fileEmitter

fileEmitter.on('fileRead',(data)=>{
    console.log('file contents : ', data);

});

fs.readFile("example.txt", "utf8", function(err, data) {
    if (err) {
        console.error('error reading file', err);
        return;
    }
    fileEmitter.emit('fileRead', data);
});
