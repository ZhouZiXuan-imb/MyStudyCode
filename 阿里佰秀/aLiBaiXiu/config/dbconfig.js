// 1. 引入包
const mysql = require('mysql')

// 创建mysql数据库连接池
var pool = mysql.createPool({
    // 如果想要查询多条mysql语句  需要这段代码
    multipleStatements: true,

    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'alibaixiu'
});

// 导出包
module.exports = pool;