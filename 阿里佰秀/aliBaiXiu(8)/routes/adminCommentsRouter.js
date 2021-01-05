// 1.引入express框架
const express = require('express');
// 2.使用express方法提供的Router方法来创建路由
const adminCommentRouter = express.Router();
// 3.引入控制器方法

// 4.创建具体路由
adminCommentRouter.get('/comments', (req, res) => {
  res.render('./admin/comments', { title: "后台管理系统-评论" });
})
// 5.导出路由
module.exports = adminCommentRouter;