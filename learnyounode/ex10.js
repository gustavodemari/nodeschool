var net = require('net');

var server = net.createServer(function (socket){
  var date = new Date();

  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  month = zeroFill(month);
  day = zeroFill(day);
  hours = zeroFill(hours);
  minutes = zeroFill(minutes);

  socket.write(year+'-'+month+'-'+day+' '+hours+':'+minutes+'\n');
  socket.end();
});

server.listen(Number(process.argv[2]));

function zeroFill(value){
  return value < 10 ? '0'+value : ''+value;
}
