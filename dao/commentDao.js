var dbutil = require('./daoUtil');

function insertComment(blogId,parent,name,email,content,ctime,utime,success){
    var insertSql = "insert into comments(`blog_id`,`parent`,`username`,`comments`,`email`,`ctime`,`utime`) values (?,?,?,?,?,?,?)";
    var params = [blogId,parent,name,content,email,ctime,utime];
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














module.exports.insertComment = insertComment;
