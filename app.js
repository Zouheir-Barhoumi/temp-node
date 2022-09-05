const http = require("node:http");

// create server and make use of its even emitter

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcom!");
});

server.listen(5000);
