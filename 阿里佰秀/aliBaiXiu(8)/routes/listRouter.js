// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const listRouter = express.Router();
// 3.引入控制器方法

// 4.创建具体路由
listRouter.get('/list', (req, res) => {
  // res.send("列表");
  res.render('list');
})
// 5.导出路由
module.exports = listRouter;