var http = require('http');

var app = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello world!");
});

app.listen(1688);
//node 03-node.js
//127.0.0.1:1688
