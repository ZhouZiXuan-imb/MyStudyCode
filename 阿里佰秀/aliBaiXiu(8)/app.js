// 1.导入包
// 1.1 导入express框架
const express = require('express');
// 1.2 导入path模块
const path = require('path');
// 1.3 导入用户系统首页路由
const index = require('./routes/indexRouter');
// 1.4 导入用户系统列表路由
const list = require('./routes/listRouter');
// 1.5 导入用户系统详情路由
const detail = require('./routes/detailRouter');
// 1.6 导入ejs包
// const ejs = require('ejs');
// 1.7 导入后台系统登录路由
const adminLogin = require('./routes/adminLoginRouter');
// 1.8 导入后台系统首页路由
const adminIndex = require('./routes/adminIndexRouter');
// 1.9 导入后台系统文章路由
const adminPosts = require('./routes/adminPostsRouter');
// 1.10 导入后台系统评论路由
const adminComments = require('./routes/adminCommentsRouter');
// 1.11 导入后台系统用户路由
const adminUsers = require('./routes/adminUsersRouter');
// 1.12 导入后台系统设置路由
const adminSettings = require('./routes/adminSettingsRouter');
// 1.13 引入session包
const session = require('express-session');
// 2.设置包
// 2.1 创建服务器
const app = express();
// 2.2 配置静态资源
app.use(express.static(path.join(__dirname, 'public')));
// 2.3 把views设置为模板文件的根目录
app.set('views', path.join(__dirname, 'views'));
// 2.4 设置模板引擎为ejs
app.set('view engine', 'ejs');
// 2.5 //为html扩展名注册ejs
// app.engine('html',ejs.renderFile);
// 2.6 配置urlencoded
app.use(express.urlencoded({ extended: false }));
// 2.7 配置session包
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000 * 10
  }
}))
// 2.8 路由拦截(登录页面就让访问 如果req.session.user 也让访问)
app.use(function (req, res, next) {
  // 获取url
  let url = req.originalUrl;
  // 判断 是不是登录页 和是否没有req.session.user 就让页面跳转到登录页
  if (url != '/admin/login' && !req.session.user) {
    // 重定向到登录页
    return res.redirect("/admin/login");
  }
  next();
})


// 3.挂载路由
// 3.1 挂载首页路由
app.use(index);
// 3.2 挂载列表路由
app.use(list);
// 3.3 挂载详情路由
app.use(detail);
// 3.4 挂载登录路由
app.use('/admin', adminLogin);
// 3.5 挂载首页路由
app.use('/admin', adminIndex);
// 3.6 挂载文章路由
app.use('/admin', adminPosts);
// 3.6 挂载评论路由
app.use('/admin', adminComments);
// 3.7 挂载用户路由
app.use('/admin', adminUsers);
// 3.8 挂载设置路由
app.use('/admin', adminSettings);

// 4.指定端口并启动服务
app.listen(3000, () => {
  console.log("请打开: http://localhost:3000");
})