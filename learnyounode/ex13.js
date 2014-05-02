var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  if(req.method==='GET' && req.url != '/favicon.ico'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var parsedUrl = url.parse(req.url, true);
    var json = {};
    switch(parsedUrl.pathname){
      case '/api/parsetime':
        var date = new Date(parsedUrl.query.iso);
        json.hour = date.getHours();
        json.minute = date.getMinutes();
        json.second = date.getSeconds();
        res.write(JSON.stringify(json));
        break;
      case '/api/unixtime':
        json.unixtime = new Date().getTime();
        res.write(JSON.stringify(json));
        break;
    }
  }
  res.end();
});

server.listen(process.argv[2]);
