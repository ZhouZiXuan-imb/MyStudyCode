// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 引入path包
const path = require('path')
// 1.3 引入路由文件
// 1.3.1 引入userRouter文件
const userRouter = require('./routes/userRouter')
const articleRouter = require('./routes/articleRouter')
const indexRouter = require('./routes/indexRouter')
// 2. 设置包
const app = express();
// 2.1 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
// 2.2 设置模板引擎
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
// 设置POST请求中间件
app.use(express.urlencoded({ extended: false }))
require('./models/dbContent')
// 3. 监听请求并处理
app.use(indexRouter)
app.use('/user', userRouter)
app.use('/article', articleRouter)
// 4. 监听指定端口
app.listen(3000, () => {
    console.log('服务器已开启,请查看: http://localhost:3000/login')
})