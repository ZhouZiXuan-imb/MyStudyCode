// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 2. 创建路由容器
const adminPostsRoter = express.Router();
// 3. 添加路由
adminPostsRoter.get('/posts', (req, res) => {
    res.render('admin/posts')
})
// 4. 导出路由
module.exports = adminPostsRoter;