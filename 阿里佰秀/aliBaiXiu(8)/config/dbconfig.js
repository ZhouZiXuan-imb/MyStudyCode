// 引入mysql包
const mysql = require('mysql');
// 配置数据库信息
const pool = mysql.createPool({
  // 让node支持多条sql语句的查询
  multipleStatements: true,
  // 数据库连接池中 有多少连接
  connectionLimit: 20,
  //  host            : '127.0.0.1',
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'alibaixiu'
});


module.exports = pool;