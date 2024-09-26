import EventEmitter from 'events';
const event = new EventEmitter(); // object to create events 

// event.on('sayHello', () => {
//     console.log('Hello world');
// });
// event.on('sayHello', () => {
//     console.log('Hey world');
// });
// event.on('sayHello', () => {
//     console.log('Hiii world');
// });
// event.emit("sayHello"); 


event.on('checkpage', (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`);
});

event.emit('checkpage', 200, 'ok'); // Emit the correct event name and arguments