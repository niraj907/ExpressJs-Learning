// we have to create a server and 
// write code for the read request and return response.
// Importing the HTTP module using import

import http from 'http';

// Creating the server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello, world!");
});

server.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000");
});
