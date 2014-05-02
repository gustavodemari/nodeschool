var http = require('http');

var count = 0;
var urlData = [];

function urlContent(index, url){
  http.get(url, function(res){
    res.on('error', function(err){
      console.log(err);
    });

    var result = '';
    res.on('data', function(data){
      result+= data.toString();
    });

    res.on('end', function(){
      urlData[index] = result;
      count++;
      verifyJobDone();
    });

  });
}

function verifyJobDone(){
  if(count===(process.argv.length-2))
    printResults();
}

function printResults(){
  urlData.forEach(function(url){
    console.log(url);
  });
}

for(i=2; i<process.argv.length; i++){
  urlContent(i, process.argv[i]);
}






