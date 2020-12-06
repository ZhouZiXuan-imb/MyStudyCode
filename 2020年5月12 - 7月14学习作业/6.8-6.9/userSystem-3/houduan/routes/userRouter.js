// 1. 引入模块
// 1.1 引入express模块
const express = require('express')
// 2. 使用express的Router()方法创建一个路由容器
const UserRouter = express.Router();

// 3. 创建路由
UserRouter.get('/', (req, res) => {
    // res.send('用户列表页面')
    res.render('user')
})

UserRouter.get('/edit', (req, res) => {
    // res.send('用户管理页面')
    res.render('user-edit')
})
// 4. 导出路由容器  在app.js中引入
module.exports = UserRouter