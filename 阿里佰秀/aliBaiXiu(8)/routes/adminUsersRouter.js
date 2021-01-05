// 1.引入express框架
const express = require('express');
const multer = require('multer');
const md5 = require('md5');
const path = require('path');
let uploader = multer({
  storage: multer.diskStorage({
    // 确定上传的文件在哪里 cb: callback
    destination: (req, file, cb) => {

      cb(null, path.join(__dirname, "../", 'public', 'uploads'))
    },
    // 确定你上传之后的文件的名字(a.png --> asdfsdffasf.png --> a.png)
    // 加密应该是可逆的
    filename: (req, file, cb) => {
      // console.log(md5(file.originalname));
      // 在订单里面 订单号+时间
      // 视觉网站 图片
      cb(null, md5(file.originalname + new Date()) + '.' + file.mimetype.substring(6));
    }
  })
})
// 2.使用express方法提供的Router方法来创建路由
const adminUsersRouter = express.Router();
// 3.引入控制器方法
const { usersPage, usersFind, userEditPage, usersAdd, usersDelete, userEdit } = require("../controllers/adminUsersCtrl");
// 4.创建具体路由
// 4.1 显示用户管理页面
adminUsersRouter.get('/users', usersPage);
// 4.2 查询用户信息
adminUsersRouter.get('/users/find', usersFind);

// 4.3 显示用户编辑页面
adminUsersRouter.get('/users/edit/:id', userEditPage);

// 4.4 添加用户
adminUsersRouter.post('/users/add', usersAdd);

// 4.5 删除用户
adminUsersRouter.put('/users/delete', usersDelete);

// 4.6 更新用户
adminUsersRouter.put('/users/edit', uploader.single('avatar'), userEdit);

// 5.导出路由
module.exports = adminUsersRouter;