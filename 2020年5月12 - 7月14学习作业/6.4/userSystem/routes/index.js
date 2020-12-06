// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 2. 使用express.Router创建路由
const router = express.Router();
// 3. 引入数据库处理文件
const {getArticle} = require('../controller/indexCtrl')
// 3. 导出
router.get('/api/article', getArticle)

module.exports = router