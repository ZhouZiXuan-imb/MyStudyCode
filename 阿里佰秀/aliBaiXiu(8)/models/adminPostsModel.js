// 引入数据库连接池
const pool = require('../config/dbconfig');

//#region 通过筛选 之后 分页查询所有文章
// 思路: 第四行的 分页查询所有文章 和 现在的方法 关系是 之前第四行的方法 我们进行了重构
// 为什么要重构
// 原因: 就为了让这个model里的findByPaging也可以用作以后的筛选分页,筛分之后分页查询所有文章 包含 之前的分页查询所有文章
module.exports.findByPaging = (option) => {
  // 筛选条件
  let status = option.status || null; // 文章状态
  let category = option.category || null; // 文章分类
  // 分页数据
  let offset = option.offset || 0;
  let size = option.size || 5;
  // 回调函数
  let callback = option.callback || null;

  //  基本sql
  // 作用: 获取分类id 和分类名称  SELECT id AS cate_id, NAME AS cate_name FROM categories
  // 作用: 统计不同筛选条件下的数据总数  SELECT COUNT(*) AS total FROM posts WHERE categroy=1 and status='trashed'
  // 作用: 查询不同筛选条件下文章信息 SELECT p.*, u.nickname, c.name FROM posts p INNER JOIN users u ON p.user_id = u.id INNER JOIN categories c ON p.category_id = c.id where categroy=1 and status='trashed'
  let csql = `SELECT id AS cate_id, NAME AS cate_name FROM categories; SELECT COUNT(*) AS total FROM posts p `; // 根据不同的查询结果统计不同的数据量
  let sql = `;SELECT p.*, u.nickname, c.name FROM posts p
INNER JOIN users u
ON p.user_id = u.id
INNER JOIN categories c
ON p.category_id = c.id`;
  // 四种情况判断
  if (!status && category) { // 有分类 无状态
    csql += ` WHERE category_id = ${category} `;
    sql += ` WHERE category_id = ${category} `;
  } else if (!category && status) { // 无分类 有状态
    csql += ` WHERE p.status = '${status}' `;
    sql += ` WHERE p.status = '${status}' `;
  } else if (category && status) {// 有分类 有状态
    csql += ` WHERE p.status = '${status}' AND category_id = ${category} `;
    sql += ` WHERE p.status = '${status}' AND category_id = ${category} `;
  }
  sql += ` LIMIT ${offset}, ${size} `;
  csql += sql;

  // 查询数据
  // console.log(csql);
  pool.query(csql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 通过id删除文章
module.exports.deleteOne = (id, callback) => {
  let sql = `UPDATE posts SET status ="transhed" WHERE id = ${id}`
  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 通过id查询文章信息
module.exports.findOne = (id, callback) => {
  let sql = 'SELECT id AS cate_id, NAME AS cate_name FROM categories;SELECT `status` FROM posts GROUP BY `status`;SELECT * FROM posts WHERE id=' + id;

  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 通过文章ID更新文章信息
module.exports.updateOne = (object, callback) => {
  let { id, slug, title, feature, created, content, status, category } = object;

  let sql = `update posts set slug="${slug}", title="${title}", feature="${feature}", created="${created}",content="${content}",status="${status}",category_id=${category} where id=${id}`;
  // console.log(sql);
  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 获取文章分类和文章状态信息
module.exports.findCategoryAndStatus = (callback) => {
  let sql = 'SELECT id AS cate_id,slug, NAME AS cate_name FROM categories;SELECT `status` FROM posts GROUP BY `status`'

  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 添加文章
module.exports.insertOne = (posts, callback) => {
  let { slug, title, feature, created, content, status, user_id, category } = posts;
  let sql = `INSERT INTO posts(
  slug,
    title,
    feature,
    created,
    content,
    status,
    user_id,
    category_id
  ) VALUES(?,?,?,?,?,?,?,?)`;

  pool.query(sql, [slug, title, feature, created, content, status, user_id, category], function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 添加分类
module.exports.insertCate = (slug, cateName, callback) => {
  let sql = 'INSERT INTO categories(slug, name)VALUES(?,?)'
  pool.query(sql, [slug, cateName], function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 删除分类
module.exports.deleteCate = (id, callback) => {
  let sql = "DELETE FROM categories WHERE id =" + id;
  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion