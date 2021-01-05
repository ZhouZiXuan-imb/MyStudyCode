// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 引入处理文件
const { postPage, postAdd, postsFilter, postsPagenum } = require('../controllers/adminPostsControllers')
// 2. 创建路由容器
const adminPostsRoter = express.Router();
// 3. 添加路由
// 3.1 文章页面路由
adminPostsRoter.get('/posts', postPage)
// 3.2 文章添加页面路由
adminPostsRoter.get('/post-add', postAdd)
// 3.3 文章页面筛选路由
adminPostsRoter.get('/posts/filter', postsFilter)
// 3.3 文章筛选分页路由
// adminPostsRoter.get('/posts/pagenum', postsPagenum)
// 4. 导出路由
module.exports = adminPostsRoter;