// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 2. 创建路由容器
const adminSettingsRoter = express.Router();
// 3. 添加路由
adminSettingsRoter.get('/settings', (req, res) => {
    res.render('admin/settings')
})
// 4. 导出路由
module.exports = adminSettingsRoter;