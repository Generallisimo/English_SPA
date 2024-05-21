const mysql = require('mysql2')

exports.getConnection = function(){
    return mysql.createPool({
        connectionLimit : 5,
        charset : 'utf8mb4',
        host     : '127.0.0.1',
        user     : 'root',
        password : 'root',
        database : 'english_base'        
    })
}