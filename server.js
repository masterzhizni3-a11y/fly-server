const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Fly.io server is running 🚀");
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
