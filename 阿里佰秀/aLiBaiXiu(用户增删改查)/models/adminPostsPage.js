const pool = require('../config/dbconfig')


/* module.exports.postsByPaging = (pageNum, pageSize, callback) => {
    // select * from posts limit ?,?,{}
    pool.query(`
    SELECT p.*,u.nickname,c.name FROM posts AS p INNER JOIN users AS u INNER JOIN categories AS c ON p.user_id = u.id AND p.category_id = c.id limit ?,?;
    select count(*) as pcount from posts;
    `, [pageNum, pageSize], function (error, results) {
        if (error) throw error;
        callback(results)
    });
} */


module.exports.postsByPaging = (option) => {
    // 筛选条件】
    // 状态
    let status = option.status || null;
    // 分类
    let category = option.category || null;
    // 分页数据
    let offset = option.offset || 0;
    let size = option.size || 5;
    // 回调函数
    let callback = option.callback || null;
    // 判断四种情况的sql代码  查询数据
    let csql = `select count(*) as pcount from posts`
    let sql = `SELECT id,name FROM categories;SELECT p.*, u.nickname, c.name FROM posts AS p INNER JOIN users AS u INNER JOIN categories AS c ON p.user_id = u.id AND p.category_id = c.id`;
    if (!status && category) { //没有状态有分类
        sql += ` WHERE category_id = ${category} `;
        csql += ` WHERE category_id = ${category}`;
    } else if (status && !category) {
        sql += ` WHERE p.status = '${status}' `;
        csql += ` WHERE status = '${status}' `;
    } else if (status && category) {
        sql += ` WHERE p.status = '${status}' AND category_id = ${category} `;
        csql += ` WHERE status = '${status}' AND category_id = ${category} `;
    }
    sql += ` LIMIT ${offset},${size};`
    csql += `;${sql}`
    pool.query(csql, function (error, results) {
        if (error) throw error;
        callback(results)
        console.log(results)
    });


}
