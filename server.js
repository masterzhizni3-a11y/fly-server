const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(Buffer.from("Мой первый сервер работает!", "utf8"));
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
