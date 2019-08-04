var blogDao = require('../dao/blogDao');
var timeUtil = require('../util/timeUtil');
var respUtil = require('../util/respUtil');

var path = new Map();
function editBlog(request,response){
    request.on('data',function(data){
        var data = JSON.parse(data);
        blogDao.insertBlog(data.title,data.content,0,data.tags,timeUtil.getNow(),timeUtil.getNow(),0,'',function(result){
            response.writeHead(200);
            response.write(respUtil.writeResult('success','添加成功',null));
            response.end();
        })
    })

}

function getBlogList(request,response){
    request.on('data',function(data){
        // var data = JSON.parse(data);
        blogDao.getBlogList(function(result){
            response.writeHead(200);
            response.write(respUtil.writeResult('success','添加成功',null));
            response.end();
        })
    })

}

path.set('/editBlog',editBlog);
path.set('/getBlogList',getBlogList);
module.exports.path = path;