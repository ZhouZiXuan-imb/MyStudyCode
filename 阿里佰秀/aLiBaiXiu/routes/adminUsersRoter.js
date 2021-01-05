// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 2. 创建路由容器
const adminUsersRoter = express.Router();
// 3. 添加路由
// 3.1 用户页面路由
adminUsersRoter.get('/users', (req, res) => {
    res.render('admin/users', { title: '后台管理系统-用户' })
})
// 3.2 个人中心页面路由
adminUsersRoter.get('/profile', (req, res) => {
    res.render('admin/profile', { title: '后台管理系统-个人中心' })
})
// 4. 导出路由
module.exports = adminUsersRoter;