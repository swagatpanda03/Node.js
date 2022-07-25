const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/') {
        res.end('Welcome to Home Page');
    }
    if(req.url === '/about') {
        res.end('Welcome to About Page');
    }
    res.end(`
        <html>
        <body>
        <h1>Oops!</h1>
        <p>Page Not Found Error 404</p>
        <a href = "/">Home</a>
        </body>
        </html>
        `);
});

server.listen(5000);