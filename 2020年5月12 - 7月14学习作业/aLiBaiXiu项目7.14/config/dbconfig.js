// 1. 引入包
const mysql = require('mysql')

var pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'alibaixiu'
});


module.exports = pool;