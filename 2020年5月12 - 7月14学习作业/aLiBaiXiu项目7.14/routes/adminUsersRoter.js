// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 2. 创建路由容器
const adminUsersRoter = express.Router();
// 3. 添加路由
adminUsersRoter.get('/users', (req, res) => {
    res.render('admin/users')
})
// 4. 导出路由
module.exports = adminUsersRoter;