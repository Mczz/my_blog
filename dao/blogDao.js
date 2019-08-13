var dbutil = require('./daoUtil');

function insertBlog(title, content, view, tag, ctime, utime, like, img, success) {
    var insertSql = "select tagId from tags where tagname=?";
    var params = [tag]
    var connection = dbutil.createConnection();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            if (result[0]) {
                var tagId = result[0].tagId;
                var insertSql2 = "insert into blog(`title`,`content`,`view`,`tagname`,`ctime`,`utime`,`like`,`img`,`tagId`) values (?,?,?,?,?,?,?,?,?)";
                var params2 = [title, content, view, tag, ctime, utime, like, img, tagId];
                var connection2 = dbutil.createConnection();
                connection2.query(insertSql2, params2, function (error, result) {
                    if (error == null) {
                        success(result);
                    } else {
                        console.log(error);
                    }
                })
                connection2.end();
            } else {
                var insertSql2 = "insert into tags(`tagname`,`ctime`,`utime`) values (?,?,?)";
                var params2 = [tag,ctime,utime];
                var connection2 = dbutil.createConnection();
                connection2.query(insertSql2, params2, function (error, result) {
                    if (error == null) {
                        var insertSql3 = "select tagId from tags where tagname=?";
                        var params3 = [tag];
                        var connection3 = dbutil.createConnection();
                        connection3.query(insertSql3, params3, function (error, result) {
                            if (error == null) {
                                
                                var tagId = result[0].tagId;
                                var insertSql4 = "insert into blog(`title`,`content`,`view`,`tagname`,`ctime`,`utime`,`like`,`img`,`tagId`) values (?,?,?,?,?,?,?,?,?)";
                                var params4 = [title, content, view, tag, ctime, utime, like, img, tagId];
                                var connection4 = dbutil.createConnection();
                                connection4.query(insertSql4, params4, function (error, result) {
                                    if (error == null) {
                                        success(result);
                                    } else {
                                        console.log(error);
                                    }
                                })
                                connection4.end();

                            } else {
                                console.log(error);
                            }
                        })
                        connection3.end();
                    } else {
                        console.log(error);
                    }
                })
                connection2.end();
            }
        } else {
            console.log(error)
        }
    })
    connection.end();
}

function getBlogList(page, pageSize, success) {
    var querySql = "select * from blog order by id desc limit ?,?";
    var params = [page * pageSize, pageSize];
    var connection = dbutil.createConnection();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {

            success(result);

        } else {
            console.log(error)
        }
    })
    connection.end();
}

function getSlider(success) {
    var querySql = "select img,id from blog order by `like` desc limit 0,3";
    var params = [];
    var connection = dbutil.createConnection();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {

            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end();
}

function getTwoBlog(success) {
    var querySql = "select img,id,title from blog order by `like`desc limit 3,2";
    var params = [];
    var connection = dbutil.createConnection();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result)


        } else {
            console.log(error)
        }
    })
    connection.end();
}

function getBlogTotal(success) {
    var querySql = "select count(1) from blog";
    var params = [];
    var connection = dbutil.createConnection();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end();
}

function getAllBlog(search,success) {
    let querySql;
    let params = [];     
    if(search != undefined && search != 'undefined'){
        querySql = "select id,title from blog where content like '%" + search + "%'";
    }else{
        querySql = "select id,title from blog";
    }
    var connection = dbutil.createConnection();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end();
}

function getBlogById(id, success) {
    var querySql = "select * from blog where id=?";
    var params = [id];
    var connection = dbutil.createConnection();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end();
    var querySql2 = "update blog set `view` = `view`+1 where id = " + id;
    var params2 = [id];
    var connection2 = dbutil.createConnection();
    connection2.query(querySql2, params2, function (error, result) {

    })
    connection2.end();


}

function getTagBlog(id, page, pageSize, success) {
    var querySql = "select * from blog where tagId=" + id + " limit ?,?";
    var params = [page, pageSize];
    var connection = dbutil.createConnection();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end();
}

function getSpecialBlog(success) {
    var querySql = "select img,id,ctime,content,title from blog order by `view`desc limit 0,3";
    var params = [];
    var connection = dbutil.createConnection();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result)
        } else {
            console.log(error)
        }
    })
    connection.end();
}

function thumbup(id, success) {
    var querySql = "update blog set `like` = `like`+1 where id = " + id;
    var params = [];
    var connection = dbutil.createConnection();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result)
        } else {
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
module.exports.getTagBlog = getTagBlog;
module.exports.thumbup = thumbup;