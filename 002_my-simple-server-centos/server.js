const http = require("http");
const hostname = "0.0.0.0";
const port = 80;

// create http server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  res.end("Hello World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http:\\${hostname}:${port}`);
});
