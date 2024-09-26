const fs = require('fs');
// fs.writeFile('bio.txt', 'Good night everyone', (error,fix) => {
//     if (error) {
//         console.error('Error writing file', error);
//         return;
//     }
//     console.log('File data written successfully');
// });


// fs.appendFile('bio.txt', 'It has been too late please sleep', (error,fix) => {
//     if (error) {
//         console.error('Error writing file', error);
//         return;
//     }
//     console.log('append has been successfully');
// });


// const data = fs.readFile('bio.txt','utf-8', (error,fix) => {
//     if (error) {
//         console.error('Error writing file', error);
//         return;
//     }
//     console.log('reading file has been successfully: ',fix);
// });


// fs.rename('bio.txt', 'myBio.txt', (error,fix) => {
//     if (error) {
//         console.error('Error writing file', error);
//         return;
//     }
//     console.log('Rename file has been successfully: ',fix);
// });


fs.unlink( 'myBio.txt', (error,fix) => {
    if (error) {
        console.error('Error writing file', error);
        return;
    }
    console.log('remove file has been successfully ');
});