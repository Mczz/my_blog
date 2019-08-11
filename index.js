var express = require("express");
var history = require('connect-history-api-fallback');
var globalConfig = require("./globalConfig");
var loader = require('./loader');
var multer = require('multer');

var app = new express();
app.use(history({
    rewrites: [
      {
        from: /^\/api\/.*$/,
        to: function(context) {
            return context.parsedUrl.path
        }
      }
    ]
  }))
app.use(express.static("./dist/"));

var uploadSingle = multer({dest:'./file/'})


//获取轮播图
app.get('/api/getslider',loader.get('/api/getslider'));
//获取右侧两图
app.get('/api/gettwoblog',loader.get('/api/gettwoblog'));
//获取标签云
app.get('/api/gettags',loader.get('/api/gettags'));
//获取首页博客列表
app.get('/api/getblogs',loader.get('/api/getblogs'));
//获取首页总数
app.get('/api/getblogtotal',loader.get('/api/getblogtotal'));
// 获取全部博客标题接口
app.get('/api/getallblog',loader.get('/api/getallblog'));
//根据id获得具体的博客
app.get('/api/getblogbyid',loader.get('/api/getblogbyid'));
//获取推荐博客
app.get('/api/getspecialblog',loader.get('/api/getspecialblog'));

//根据tag获取博客列表
app.get('/api/gettagblog',loader.get('/api/gettagblog'));

//添加评论
app.get('/api/addcomment',loader.get('/api/addcomment'));
//验证码
app.get('/api/queryRandomCode',loader.get('/api/queryRandomCode'));

//根据blog id查找评论
app.get('/api/queryCommentsByBlogId',loader.get('/api/queryCommentsByBlogId'));
//点赞接口
app.get('/api/thumbup',loader.get('/api/thumbup'));
//获取图片
app.get('/api/getPic',loader.get('/api/getPic'));





//博客编辑器接口
app.post('/api/editBlog',uploadSingle.single('poster'),loader.get('/api/editBlog'));




app.listen(globalConfig.port,function(){
    console.log('服务器已启动')
})
