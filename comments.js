const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
 
 The above code creates a simple HTTP server that listens on port 3000 and responds with "Hello, World!" when you visit it in your browser. 
 To run the server, save the file and run the following command in the terminal: 
 node comments.js
 
 You should see the message  Server running at http://
 
 This is a simple server that listens on port 3000 and responds with a 200 status code and a “Hello, World!” message. 
 Let’s add the following code to the  app.js  file: