#!/usr/bin/env node

var fs = require('fs');

fs.writeFileSync('testscript.output.txt', 'Generated at ' + Date.now());
