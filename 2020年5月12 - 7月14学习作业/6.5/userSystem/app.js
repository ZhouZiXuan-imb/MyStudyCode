// 1. 引入包
// 1.1 引入express模块
const express = require('express')
// 1.2 引入path模块
const path = require('path')
// 1.3 引入路由模块
const router = require('./routes')
// 2. 设置包
// 2.1 使用express方法创建服务器
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
require('./models/dbContent.js')
// 3. 监听请求并处理响应
app.use(router)
// 4. 监听指定端口
app.listen(80, () => {
	console.log('服务器已开启,请查看: http://localhost')
})