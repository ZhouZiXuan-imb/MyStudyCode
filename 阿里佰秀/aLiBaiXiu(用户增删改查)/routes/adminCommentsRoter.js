// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 2. 创建路由容器
const adminCommentsRoter = express.Router();
// 3. 添加路由
adminCommentsRoter.get('/comments', (req, res) => {
    res.render('admin/comments', { title: '后台管理系统-评论' })
})
// 4. 导出路由
module.exports = adminCommentsRoter;