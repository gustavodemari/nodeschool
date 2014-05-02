var http = require('http');

var server = http.createServer(function(req, res){
  if(req.method==='POST'){
    var result = '';
    req.on('data', function(data){
      result+=data.toString().toUpperCase();
    });
  }
  res.end();
});

server.listen(process.argv[2]);
