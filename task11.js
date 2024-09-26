const http = require('http');
const axios = require('axios');

const server = http.createServer(async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const data = response.data;

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        
        const responseData = {
            message: 'Hello, world',
            timeStamp: new Date(),
            users: data
        };

        res.end(JSON.stringify(responseData));
    } catch (error) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Failed to fetch data' }));
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log('Server running at http://localhost:3000');
});
