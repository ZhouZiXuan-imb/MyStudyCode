// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 引入path包
const path = require('path')
// 1.3 引入ejs包
// const ejs = require('ejs')
// 1.4 引入用户系统首页路由文件
const indexRoter = require('./routes/indexRoter')
// 1.5 引入用户系统页表页路由文件
const listRoter = require('./routes/listRouter')
// 1.6 引入用户系统详情页路由文件
const detailRoter = require('./routes/detailRouter')
// 1.7 引入后台系统登录页路由文件
const loginRoter = require('./routes/adminLoginRoter')
// 1.8 引入后台系统登录页路由文件
const adminIndexRoter = require('./routes/adminIndexRoter')
// 1.9 引入后台系统文章页路由文件
const adminPostsRoter = require('./routes/adminPostsRoter')
// 1.10 引入后台系统评论页路由文件
const adminCommentsRoter = require('./routes/adminCommentsRoter')
// 1.11 引入后台系统用户页路由文件
const adminUsersRoter = require('./routes/adminUsersRoter')
// 1.12 引入后台系统设置页路由文件
const adminSettingsRoter = require('./routes/adminSettingsRoter')
// 2. 设置包
// 2.1 使用express方法创建一个服务器
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, '/public')))
// 2.3 设置ejs包
app.set('views', './views')
app.set('view engine', 'ejs');
// 2.4 设置post请求中间件
app.use(express.urlencoded({ extended: false }))
// 3. 挂载路由
// 3.1 挂载用户首页路由
app.use(indexRoter)
// 3.2 挂载用户列表页路由
app.use(listRoter)
// 3.3 挂载用户详情页路由
app.use(detailRoter)
// 3.4 挂载后台登录页路由
app.use('/admin', loginRoter)
// 3.5 挂载后台首页路由
app.use('/admin', adminIndexRoter)
// 3.6 挂载后台文章页路由
app.use('/admin', adminPostsRoter)
// 3.7 挂载后台评论页路由
app.use('/admin', adminCommentsRoter)
// 3.8 挂载后台用户页路由
app.use('/admin', adminUsersRoter)
// 3.9 挂载后台用户页路由
app.use('/admin', adminSettingsRoter)
// 4. 监听指定端口
app.listen(3000, () => {
    console.log('服务器创建成功,请访问: http://localhost:3000')
})