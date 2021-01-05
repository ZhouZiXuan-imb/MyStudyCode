// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminSettingsRouter = express.Router();
// 3.引入控制器方法

// 4.创建具体路由
adminSettingsRouter.get('/settings', (req, res) => {
  res.render('./admin/settings', { title: "后台管理系统-设置" });
})
// 5.导出路由
module.exports = adminSettingsRouter;