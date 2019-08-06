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
        var data = {
            blogList:result
        };
        response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        response.write(respUtil.writeResult('success', '添加成功', data));
        response.end();
    })
}
function getBlogTotal(request, response) {
    blogDao.getBlogTotal(function (result) {
        //处理查询结果
        var data = {
            total:result[0]['count(1)']
        };
        response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        response.write(respUtil.writeResult('success', '添加成功', data));
        response.end();
    })
}

function getSlider(request, response) {
    blogDao.getSlider(function (result) {

        //处理查询结果
        var data = {
            sliderlist:result
        };
        response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        response.write(respUtil.writeResult('success', '添加成功', data));
        response.end();
    })
}

function getTwoBlog(request, response) {
    blogDao.getTwoBlog(function (result) {
        //处理查询结果
        var data = {
            twolist:result
        };
        response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        response.write(respUtil.writeResult('success', '添加成功', data));
        response.end();
    })
}
function getAllBlog(request, response) {
    blogDao.getAllBlog(function (result) {
        //处理查询结果
        var data = {
            blogTitleList:result
        };
        response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        response.write(respUtil.writeResult('success', '添加成功', data));
        response.end();
    })
}
function getBlogById(request, response) {
    var params = url.parse(request.url,true).query;
    blogDao.getBlogById(params.id,function (result) {
        //处理查询结果
        var data = {
            article:result[0]
        };
        response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        response.write(respUtil.writeResult('success', '添加成功', data));
        response.end();
    })
}
function getSpecialBlog(request, response) {
    blogDao.getSpecialBlog(function (result) {
        //处理查询结果
        var data = {
            speciallist:result
        };
        response.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
        response.write(respUtil.writeResult('success', '添加成功', data));
        response.end();
    })
}

path.set('/api/editBlog', editBlog);
path.set('/api/getblogs', getBlogs);
path.set('/api/getblogtotal', getBlogTotal);
path.set('/api/getslider', getSlider);
path.set('/api/gettwoblog', getTwoBlog);
path.set('/api/getallblog', getAllBlog);
path.set('/api/getblogbyid', getBlogById);
path.set('/api/getspecialblog', getSpecialBlog);
module.exports.path = path;