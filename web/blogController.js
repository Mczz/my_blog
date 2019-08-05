var blogDao = require('../dao/blogDao');
var timeUtil = require('../util/timeUtil');
var respUtil = require('../util/respUtil');
var url = require('url');
var path = new Map();
function editBlog(request, response) {
    request.on('data', function (data) {
        var data = JSON.parse(data);
        blogDao.insertBlog(data.title, data.content, 0, data.tags, timeUtil.getNow(), timeUtil.getNow(), 0, '', function (result) {
            response.writeHead(200);
            response.write(respUtil.writeResult('success', '添加成功', null));
            response.end();
        })
    })

}

function getBlogs(request, response) {
    var params = url.parse(request.url,true).query;
    var page = parseInt(params.page) - 1;
    var pageSize = 10;
    blogDao.getBlogList(page,pageSize,function (result) {
        //处理查询结果
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '添加成功', result));
        response.end();
    })
}
function getBlogTotal(request, response) {
    blogDao.getBlogTotal(page,pageSize,function (result) {
        //处理查询结果
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '添加成功', result));
        response.end();
    })
}

function getSlider(request, response) {
    blogDao.getSlider(function (result) {

        //处理查询结果
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '添加成功', result));
        response.end();
    })
}

function getTwoBlog(request, response) {
    blogDao.getTwoBlog(function (result) {
        //处理查询结果
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '添加成功', result));
        response.end();
    })
}
function getAllBlog(request, response) {
    blogDao.getAllBlog(function (result) {
        //处理查询结果
        response.writeHead(200);
        response.write(respUtil.writeResult('success', '添加成功', result));
        response.end();
    })
}

path.set('/api/editBlog', editBlog);
path.set('/api/getblogs', getBlogs);
path.set('/api/getblogtotal', getBlogTotal);
path.set('/api/getslider', getSlider);
path.set('/api/gettwoblog', getTwoBlog);
path.set('/api/getallblog', getAllBlog);
module.exports.path = path;