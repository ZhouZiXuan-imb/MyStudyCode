// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 引入处理文件
const { indexPage } = require('../controllers/adminIndexControllers')
// 2. 创建路由容器
const adminIndexRoter = express.Router();
// 3. 添加路由
adminIndexRoter.get('/', indexPage)
// 4. 导出路由
module.exports = adminIndexRoter;