// 1. 引入包
// 1.1 引入express模块
const express = require('express');
// 1.2 引入path模块
const path = require('path');
const router = require('./routes')
// 2. 设置包
// 2.1 使用express()方法创建一个服务器
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname,'public')))
// 2.3 连接数据库
require('./modles/dbContent.js')
// 3. 监听请求并处理相应
app.use(router)
// 4. 监听指定端口
app.listen(80,()=> {
	console.log('服务器已开启,请访问: http://localhost')
})