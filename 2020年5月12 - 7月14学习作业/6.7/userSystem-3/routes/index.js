// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 使用express模块的Router()方法 创建一个路由容器;
const router = express.Router();
const { getArticle } = require('../contorller/indexCtrl.js')

router.get('/api/listItem', getArticle)


module.exports = router;