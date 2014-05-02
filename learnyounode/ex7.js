var http = require('http');

http.get(process.argv[2], function(res){

 res.on('error', function(err){
   console.log(err);
 });

 res.on('data', function(data){
   console.log(data.toString());
 });

});
