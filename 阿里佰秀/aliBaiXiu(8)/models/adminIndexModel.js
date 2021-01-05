// 引入数据库连接池
const pool = require('../config/dbconfig');
// 代表创建(Create)、更新(Update)、读取(find)和删除(Delete) 


//#region 查询站点内容统计数据
module.exports.findCount = (callback) => {
  // 如果想要让msyql包支持多条sql查询 需要在数据库连接池中设置  multipleStatements: true,
  pool.query(`
  SELECT COUNT(*)AS pcount FROM posts;  -- pcount是文章总数
  SELECT COUNT(*)AS dcount  FROM posts WHERE STATUS ="drafted"; -- dcount是草稿数
  SELECT COUNT(*) AS cacount FROM categories; -- cacount是分类数
  SELECT COUNT(*) AS cocount FROM comments;  -- cocount是评论数
  SELECT COUNT(*) AS hcount FROM comments WHERE STATUS ="held"; -- hcount是待审核评论数
  `
    , function (error, results) {
      if (error) throw error;
      callback(results);
    });
}
//#endregion


