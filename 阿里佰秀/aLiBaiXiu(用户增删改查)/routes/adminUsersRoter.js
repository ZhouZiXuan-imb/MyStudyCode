// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 引入处理文件
const { users, profile, addUser, deleteUser } = require('../controllers/adminUsersControllers')
// 2. 创建路由容器
const adminUsersRoter = express.Router();
// 3. 添加路由
// 3.1 用户页面路由
adminUsersRoter.get('/users', users)
// 3.2 个人中心页面路由
adminUsersRoter.get('/profile', profile)
// 3.3 添加用户路由
adminUsersRoter.post('/user/add', addUser)
// 3.4 删除用户路由
adminUsersRoter.delete('/user/delete', deleteUser)
// 4. 导出路由
module.exports = adminUsersRoter;