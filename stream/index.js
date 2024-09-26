import fs from 'fs';    
import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
    // method 1
//     fs.readFile("input.txt",'utf-8', (err, data) => {
//         if (err) {
//             console.error('Error in reading the text file', err);
//             res.statusCode = 500;
//             res.end('Internal Server Error');
//             return;
//         }
//         console.log('Text file read successfully');
//         res.end(data);
//     });


// method 2 using stream
    const rstream = fs.createReadStream('input.txt');
    rstream.on('data', (chunk) => {
        res.write(chunk);
    });
    rstream.on('end', () => {
        res.end();
    });
    rstream.on('error', (err) => {
        console.error('Error reading the file:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    });
});


server.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000");
});
