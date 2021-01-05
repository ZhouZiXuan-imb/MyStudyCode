const { findUser, findUsers, insertUser, deleteUser, updateUser } = require('../models/adminUsersModel')

//#region 1.显示用户管理页面
module.exports.usersPage = (req, res) => {
  res.render('./admin/users', { title: "后台管理系统-用户" });
}
//#endregion

//#region 2.查询用户信息
module.exports.usersFind = (req, res) => {
  findUsers(function (results) {
    // console.log(results);
    // res.send('ok');
    res.send({
      code: 200,
      message: "用户信息获取成功",
      data: results
    })
  })

}
//#endregion

//#region 3.显示用户编辑页面
module.exports.userEditPage = (req, res) => {
  // console.log(req.params);
  let { id } = req.params;

  findUser(id, function (results) {
    // console.log(results);
    res.render('./admin/profile', { title: "后台管理系统-编辑用户", user: results[0] });
  })

}
//#endregion

//#region 4.添加用户
module.exports.usersAdd = (req, res) => {
  // console.log(req.body);
  let userData = {
    email: req.body.email,
    password: req.body.password,
    nickname: req.body.nickname,
    slug: req.body.slug,
    avatar: '/img/default.png',
    status: "activated"
  }

  insertUser(userData, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "用户添加成功"
      })
    }
  })

}

//#endregion

//#region 5.删除用户
module.exports.usersDelete = (req, res) => {
  // console.log(req.body.id);
  let { id } = req.body;
  deleteUser(id, function (results) {
    if (results.affectedRows == 1)
      res.send({
        code: 200,
        message: "用户删除成功"
      })
  })

}
//#endregion

//#region 6.更新用户
module.exports.userEdit = (req, res) => {
  // console.log('-----------------------------------')
  // console.log(req.file);
  // console.log(req.body);

  let userData = {
    email: req.body.email,
    nickname: req.body.nickname,
    slug: req.body.slug,
    avatar: req.file ? `/uploads/${req.file.filename}` : null,
    bio: req.body.bio,
    id: req.body.id
  }

  updateUser(userData, function (results) {
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "用户数据更新成功"
      })
    }
  })
}
//#endregion