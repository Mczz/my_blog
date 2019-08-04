var express = require("express");
var globalConfig = require("./globalConfig");
var loader = require('./loader');

var app = new express();
app.use(express.static("./dist/"));
app.post('/editBlog',loader.get('/editBlog'));
app.get('/getBlogList',loader.get('/getBlogList'));

app.listen(globalConfig.port,function(){
    console.log('服务器已启动')
})
