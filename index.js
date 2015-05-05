var fs = require('fs-extra');
var twigger = require('pattern-importer').twigCompiler;

function patternsMenu (src, obj, dest) {
  var menu = twigger(src, obj);

  fs.writeFile(dest, menu, function (err) {
    if (err) {
      return console.log(err);
    }
  });

  return menu;
}

module.exports = patternsMenu;
