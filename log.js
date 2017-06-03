var fs = require('fs');
var path = require('path');

var scriptName = process.argv[2] || '';
if (scriptName) {
    scriptName = scriptName.replace(/[^a-z]+/gi, '_');
    try {
        fs.mkdirSync(path.resolve(__dirname, 'generated'));
    } catch (ignored) {}
    var content = process.env.TEST_FILES_CONTENT || '1';
    fs.writeFileSync(path.resolve(__dirname, 'generated', scriptName), content);
}
