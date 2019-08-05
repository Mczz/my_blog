var tagDao = require('../dao/tagDao');
var respUtil = require('../util/respUtil');
var url = require('url');
var path = new Map();

function getTags(request, response) {    
    tagDao.getTags(function (result) {
        //处理查询结果
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '添加成功', result));
        response.end();
    })
}

path.set('/api/gettags', getTags);
module.exports.path = path;