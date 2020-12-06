// 1. 引入模块
// 1.1 引入express模块
const express = require('express')
// 2. 使用express的Router()方法创建一个路由容器
const IndexRouter = express.Router();
const { login } = require('../controller/indexCtrl')

// 3. 创建路由
IndexRouter.get('/login', (req, res) => {
    // res.send('登陆页面')
    res.render('login')
})

IndexRouter.post('/api/login', login)
// 4. 导出路由容器  在app.js中引入
module.exports = IndexRouter