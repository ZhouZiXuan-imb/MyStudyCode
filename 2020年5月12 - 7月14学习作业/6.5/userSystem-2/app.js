// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 引入path包
const path = require('path')
// 1.3 引入路由
const router = require('./ruoutes')
// 2. 设置包
// 2.1 使用express()方法创建一个服务器
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 连接数据库
require('./modles/dbContent.js')
// 3. 监听请求并处理响应
// 挂载路由
app.use(router)
// 4. 监听指定端口
app.listen(80)