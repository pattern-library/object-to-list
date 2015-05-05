# Object to List

## Basic Usage

To create a list from an object


## Usage

in local index.js file, require the following:

```
var menuLister = require('./patterns-menu-list');
var fs = require('fs-extra');
```

Next define the arguments of the menuLister. This will call the `objecToList` function below and these will be passed in when the function is called. The following parameters are needed:

1. src - template source that will do the looping

2. obj - object you want to convert to an html list

3. dest - the output's destination location


#### The following is a working example:

```
var menuLister = require('./patterns-menu-list');
var fs = require('fs-extra');

// this could be any template
var src = './patterns-menu-list/templates/menu.twig';

// you could write out this object, get it from a file, get it from another function like pattern-presenter
var obj = JSON.parse(fs.readFileSync('./patterns-menu-list/test/fixtures/example.json', 'utf8')); 

var dest = './patterns-menu-list/menu.html';

menuLister(src, obj, dest);
```
