// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 引入控制器方法
const { loginPage, loginUser, logoutUser } = require('../controllers/adminLoginControllers')
// 2. 创建路由容器
const adminLoginRoter = express.Router();
// 3. 添加路由
// 3.1 登录页面
adminLoginRoter.get('/login', loginPage)
// 3.2 处理登录业务
adminLoginRoter.post('/login', loginUser);

// 3.2 处理退出登录业务
adminLoginRoter.get('/logout', logoutUser);
// 4. 导出路由
module.exports = adminLoginRoter;