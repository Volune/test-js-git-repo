var fs = require('fs');
var path = require('path');

var input = path.resolve(__dirname, 'node_modules', 'beeper', 'package.json');
var output = path.resolve(__dirname, 'dependency-package.json');
fs.writeFileSync(output, fs.readFileSync(input));
