// It is a similar to the stream method is a easy way of pipe method less code
import fs from 'fs';    
import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
    const rstream = fs.createReadStream('some.txt');
    rstream.pipe(res);

    rstream.on('error', (err) => {
        console.error('Error reading the file:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    });
});

server.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000");
});
