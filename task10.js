const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    
    const data = {
        message: 'Hello, world',
        timeStamp: new Date(),
    };

    res.end(JSON.stringify(data));
});

server.listen(3000, "127.0.0.1", () => {
    console.log('Server running at http://localhost:3000');
});
