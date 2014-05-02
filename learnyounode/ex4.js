var file = (process.argv[2]);
var fs = require('fs');

var options = {
  enconding: 'utf-8'
};

fs.readFile(file, options, function(err, data){
  if(err) throw err;
  console.log(data.toString().split('\n').length-1);
});


