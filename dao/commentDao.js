var dbutil = require('./daoUtil');

function insertComment(blogId,parent,parent_name,name,content,email,ctime,utime,success){
    var insertSql = "insert into comments(`blog_id`,`parent`,`parent_name`,`username`,`comments`,`email`,`ctime`,`utime`) values (?,?,?,?,?,?,?,?)";
    var params = [blogId,parent,parent_name,name,content,email,ctime,utime];
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

function queryCommentsByBlogId(blogId,success){
    var querySql = "select * from comments where blog_id = ?";
    var params = [blogId];
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













module.exports.insertComment = insertComment;
module.exports.queryCommentsByBlogId = queryCommentsByBlogId;
