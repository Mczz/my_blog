var dbutil = require('./daoUtil');

function insertBlog(title,content,views,tags,ctime,utime,like,img,success){
    var insertSql = "insert into blog(`title`,`content`,`views`,`tags`,`ctime`,`utime`,`like`,`img`) values (?,?,?,?,?,?,?,?)";
    var params = [title,content,views,tags,ctime,utime,like,img];
    var connection = dbutil.createConnection();
    connection.query(insertSql,params,function(error,result){
        if(error == null){
            success(result)
        }else{
            console.log(error)
        }
    })
    connection.end();
}

function getBlogList(success){
    var querySql = "select * from blog order by id limit 1";
    var params = [];
    var connection = dbutil.createConnection();
    connection.query(querySql,params,function(error,result){
        if(error == null){
            success(result)
        }else{
            console.log(error)
        }
    })
    connection.end();
}

module.exports.insertBlog = insertBlog;