var fs = require('fs');

var config = fs.readFileSync('./config.log');
var globalConfig = {};
var configArr = config.toString().split('\n');
for(var i=0;i<configArr.length;i++){
    globalConfig[configArr[i].split('=')[0].trim()] = configArr[i].split('=')[1].trim();
}

module.exports = globalConfig;
