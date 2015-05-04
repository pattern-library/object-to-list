var fs =require('fs');
var twigger = require('./lib/twig-compiler');

function patternsMenu (src, filePath, destFile) {
  var obj = JSON.parse(fs.readFileSync(filePath, 'utf8')); // want a json object
  var menu = twigger(src, obj);

  fs.writeFile(destFile, menu, function (err) {
    if (err) {
      return console.log(err);
    }
  });

  return menu;
}

module.exports = patternsMenu('menu.twig', 'menu.json', 'menu.html');
