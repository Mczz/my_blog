var express = require("express");
var globalConfig = require("./globalConfig");
var loader = require('./loader');

var app = new express();
app.use(express.static("./dist/"));




//获取轮播图
app.get('/api/getslider',loader.get('/api/getslider'));
//获取右侧两图
app.get('/api/gettwoblog',loader.get('/api/gettwoblog'));
//获取标签云
app.get('/api/gettags',loader.get('/api/gettags'));
//获取首页博客列表
app.get('/api/getblogs',loader.get('/api/getblogs'));
//获取首页总数
app.get('/api/getblogtotal',loader.get('/api/getblogs'));

//获取全部博客标题接口
app.get('/api/getallblog',loader.get('/api/getallblog'));





//博客编辑器接口
app.post('/editBlog',loader.get('/editBlog'));




app.listen(globalConfig.port,function(){
    console.log('服务器已启动')
})
