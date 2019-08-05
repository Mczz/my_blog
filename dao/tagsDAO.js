var dbutil = require('./daoUtil');

function getTags(success){
    var querySql = "select * from tags";
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

module.exports.getTags = getTags;