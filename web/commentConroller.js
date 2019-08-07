var commentDao = require('../dao/commentDao');
var respUtil = require('../util/respUtil');
var timeUtil = require('../util/timeUtil');
var captcha = require('svg-captcha');
var url = require('url');
var path = new Map();

function addComment(request,response){
    var params = url.parse(request.url,true).query;
    commentDao.insertComment(parseInt(params.id),parseInt(params.parent),params.name,params.content,params.email,timeUtil.getNow(), timeUtil.getNow(),function (result) {
        
        response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        response.write(respUtil.writeResult('success', '添加成功', null));
        response.end();
    })
}
function queryRandomCode(request,response){
    var img = captcha.create({fontSize:40,width:100,height:30});
        
    response.writeHead(200,{'Content-Type':'image/svg+xml'});
    response.write(JSON.stringify(img));
    response.end();
}




path.set('/api/addcomment', addComment);
path.set('/api/queryRandomCode', queryRandomCode);
module.exports.path = path;