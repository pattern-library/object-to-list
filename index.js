var fs = require('fs-extra');
var twigger = require('pattern-importer').twigCompiler;

function objectToList (src, obj, dest) {
  var list = twigger(src, obj);

  fs.writeFile(dest, list, function (err) {
    if (err) {
      return console.log(err);
    }
  });

  return list;
}

module.exports = objectToList;
