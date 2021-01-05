// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const detailRouter = express.Router();
// 3.引入控制器方法

// 4.创建具体路由
detailRouter.get('/detail', (req, res) => {
  // res.send("详情");
  res.render('detail')
})
// 5.导出路由
module.exports = detailRouter;