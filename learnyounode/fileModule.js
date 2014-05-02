var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback){
  fs.readdir(dir, function (err, files){
    if(err) 
      return callback(err);
 
    var filesList = [];

    ext = ext[0] != '.' ? '.'+ext : ext;

    files.forEach(function (file){
      if(path.extname(file) === ext)
        filesList.push(file);
    });
 
    return callback(null, filesList);
  });
}
