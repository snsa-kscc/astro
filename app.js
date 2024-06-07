const http = require("http");
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`Hello World! I am your new NodeJS app - time ${Date.now()} - port ${port}! \n`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
