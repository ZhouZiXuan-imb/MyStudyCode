// 引入数据库连接池
const pool = require('../config/dbconfig');

// 在数据库中 只有四种操作 方法只有四种前缀

// create delete update find
// 代表创建(Create)、更新(Update)、读取(find)和删除(Delete) 
module.exports.findUser = (email, callback) => {
  // sql语句
  pool.query(`select * from users where email ='${email}'`, function (error, results) {
    if (error) throw error;

    callback(results);
  });
}

