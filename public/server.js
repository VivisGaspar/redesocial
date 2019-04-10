const fs = require('fs'),
    http = require('http'),
    url = require('url');

http.createServer(function (req, res) {
  fs.readFile(__dirname + url.parse(req.url).pathname, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(8080);