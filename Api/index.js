// Importing the HTTP module using import
import http from 'http';
import fs from 'fs';
// Creating the server
const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Hello, world!");

    } else if (req.url === "/about") {
        res.statusCode = 200; // Set the status code for the About page as well
        res.setHeader('Content-Type', 'text/plain');
        res.end("Welcome to About page");
    } else if (req.url === "/userapi") {
        fs.readFile('./userapi.json', 'utf8', (error, data) => {
            if (error) {
                console.error('Error reading JSON file:', error);
                res.statusCode = 500; // Internal Server Error
                res.setHeader('Content-Type', 'text/plain');
                res.end("Internal Server Error");
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json'); // Set content type to JSON
           console.log(data);
           const objData = JSON.parse(data);
           res.end(objData[2].name);
           
        });
    } else {
        res.statusCode = 404; // Handle unknown URLs
        res.setHeader('Content-Type', 'text/plain');
        res.end("404 Not Found");
    }
});

server.listen(3000, "localhost", () => {
    console.log("Server running at http://localhost:3000");
});
