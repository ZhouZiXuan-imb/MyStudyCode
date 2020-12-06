const express = require('express')
// 创建路由
const router = express.Router();
const {	getArticle } = require('../contorller/indexCtrl.js')

router.get('/api/article', getArticle)

module.exports = router