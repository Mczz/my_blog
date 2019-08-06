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

function getBlogList(page,pageSize,success){
    var querySql = "select * from blog order by id desc limit ?,?";
    var params = [page*pageSize,pageSize];
    var connection = dbutil.createConnection();
    connection.query(querySql,params,function(error,result){
        if(error == null){
            
            success(result);
            
        }else{
            console.log(error)
        }
    })
    connection.end();
}
function getSlider(success){
    var querySql = "select img,id from blog order by `like` desc limit 0,3";
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
function getTwoBlog(success){
    var querySql = "select img,id,title from blog order by `like`desc limit 3,2";
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

function getBlogTotal(success){
    var querySql = "select count(1) from blog";
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
function getAllBlog(success){
    var querySql = "select id,title from blog";
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
function getBlogById(id,success){
    var querySql = "select * from blog where id=?";
    var params = [id];
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
function getSpecialBlog(success){
    var querySql = "select img,id,ctime,content,title from blog order by `view`desc limit 0,3";
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
module.exports.getBlogList = getBlogList;
module.exports.getBlogTotal = getBlogTotal;
module.exports.getSlider = getSlider;
module.exports.getTwoBlog = getTwoBlog;
module.exports.getAllBlog = getAllBlog;
module.exports.getBlogById = getBlogById;
module.exports.getSpecialBlog = getSpecialBlog;