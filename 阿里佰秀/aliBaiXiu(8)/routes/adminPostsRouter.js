// 

// 1.引入express框架
const express = require('express');
const multer = require('multer');
const md5 = require('md5');
const path = require('path');
let uploader = multer({
  storage: multer.diskStorage({
    // 确定上传的文件在哪里 cb: callback
    destination: (req, file, cb) => {

      cb(null, path.join(__dirname, "../", 'public', 'uploads'))
    },
    // 确定你上传之后的文件的名字(a.png --> asdfsdffasf.png --> a.png)
    // 加密应该是可逆的
    filename: (req, file, cb) => {
      // console.log(md5(file.originalname));
      // 在订单里面 订单号+时间
      // 视觉网站 图片
      cb(null, md5(file.originalname + new Date()) + '.' + file.mimetype.substring(6));
    }
  })
})
// 2.使用express方法提供的Router方法来创建路由
const adminPostsRouter = express.Router();
// 3.引入控制器方法
const { postsPage, postsAddPage, postsByFilter, postsDeleteById, postsEditPage, postsEdit, postsAdd, postsCategoryPage, postsFindCategory, postsAddCategory, postsDeleteCategory } = require('../controllers/adminPostsCtrl');
// 4.创建具体路由
// 4.1 显示文章管理页面
adminPostsRouter.get('/posts', postsPage);
// 4.2 显示文章添加页面
adminPostsRouter.get('/posts/add', postsAddPage);
// 4.2.1 添加文章
adminPostsRouter.post('/posts/add', uploader.single('feature'), postsAdd);
// 4.3 通过筛选条件查询数据
adminPostsRouter.get('/posts/findsByFilter', postsByFilter);
// 4.4 通过分页查询数据
adminPostsRouter.get('/posts/findsByPaging', postsByFilter);
// 4.5 通过Id删除文章
adminPostsRouter.put('/posts/delete', postsDeleteById);
// 4.6 显示文章编辑页面
adminPostsRouter.get('/posts/edit/:id', postsEditPage);
// 4.7 编辑文章
adminPostsRouter.post('/posts/edit', uploader.single('feature'), postsEdit);
// 4.8 显示文章分类页面
adminPostsRouter.get('/posts/category', postsCategoryPage);
// 4.9 获取文章分类数据
adminPostsRouter.get('/posts/findCategory', postsFindCategory);
// 4.10 添加文章分类数据
adminPostsRouter.post('/posts/addCategory', postsAddCategory);
// 4.11 删除文章分类
adminPostsRouter.delete('/posts/deleteCategory', postsDeleteCategory)
// 5.导出路由
module.exports = adminPostsRouter;