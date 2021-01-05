// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminIndexRouter = express.Router();
// 3.引入控制器方法
const { indexPage } = require('../controllers/adminIndexCtrl')
// 4.创建具体路由
// 4.1 显示后台管理系统首页
adminIndexRouter.get('/', indexPage);
// 5.导出路由
module.exports = adminIndexRouter;