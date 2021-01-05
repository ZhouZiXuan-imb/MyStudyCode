const pool = require('../config/dbconfig')

// 导出findCount()方法
module.exports.findCount = (callback) => {
    // 如果需要查询多条sql语句 需要在数据库连接池中设置  multipleStatements: true
    pool.query(`
    SELECT COUNT(*) AS pocount FROM posts;
    SELECT COUNT(*) AS dcount FROM posts WHERE STATUS = "drafted";
    SELECT COUNT(*) AS ccount FROM categories;
    SELECT COUNT(*) AS cocount FROM comments;
    SELECT COUNT(*) AS stcount FROM comments WHERE STATUS = "held";
    `, function (error, results) {
        if (error) throw error;

        callback(results)
        // console.log(results.flat())
    });
}