// 引入数据库连接池
const pool = require('../config/dbconfig');
// 代表创建(Create)、更新(Update)、读取(find)和删除(Delete) 

//#region 0.查询用户信息
module.exports.findUser = (id, callback) => {
  let sql = 'SELECT * FROM users WHERE id = ' + id;
  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 1.查询所有用户信息
module.exports.findUsers = (callback) => {
  let sql = 'SELECT id,avatar,email,slug,nickname,status FROM users;'

  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 2.添加用户信息
module.exports.insertUser = (userObj, callback) => {
  let { email, password, nickname, slug, avatar, status } = userObj;
  let sql = 'INSERT INTO users(email,`password`,nickname,slug,avatar,`status`)VALUES (?,?,?,?,?,?)';


  pool.query(sql, [email, password, nickname, slug, avatar, status], function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 3.删除用户(更改用户状态)
module.exports.deleteUser = (id, callback) => {
  let sql = 'UPDATE users SET status="trashed" WHERE id=' + id;
  pool.query(sql, function (error, results) {
    if (error) throw error;
    callback(results);
  });
}
//#endregion

//#region 4.更新用户信息
module.exports.updateUser = (userObj, callback) => {
  console.log("========================");
  console.log(userObj);
  let { email, nickname, slug, avatar, bio, id } = userObj;
  let sql = '';
  if (avatar == null) {
    sql = "UPDATE users SET email=?,nickname=?,slug=?,bio=? WHERE id =?";
    pool.query(sql, [email, nickname, slug, bio, id], function (error, results) {
      if (error) throw error;
      callback(results);
    });
  } else {
    sql = "UPDATE users SET email=?,nickname=?,slug=?,avatar=?,bio=? WHERE id =?";
    pool.query(sql, [email, nickname, slug, avatar, bio, id], function (error, results) {
      if (error) throw error;
      callback(results);
    });
  }

  // console.log(sql);

}
//#endregion