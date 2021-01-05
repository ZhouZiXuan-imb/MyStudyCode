// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 2. 创建路由容器
const listRoter = express.Router();
// 3. 添加路由
listRoter.get('/list', (req, res) => {
    res.render('list')
})
// 4. 导出路由
module.exports = listRoter;