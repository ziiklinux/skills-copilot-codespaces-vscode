// Create web server
// Create a server that listens on port 3000 and responds with "Hello, World!" to all requests.

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, World!');
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});