const http = require('http');

const Server = http.createServer((req, res) => {
    if (req.url === '/') {
        const dateNow = new Date();
        const response = {
            date:dateNow.toISOString()
        };

        res.statusCode = 200;
        res.end(JSON.stringify(response));
    
    } else if (req.url === '/hello') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end('Hello, World!');
    } else {
        res.statusCode = 404;
        res.end('page not found')
    }
})

Server.listen(3007, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
})