// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 引入path包
const path = require('path')

// 1.4 引入路由包
const api = require('./routers/operateData')
// 2. 设置包
// 2.1 使用express方法创建服务器
const app = express();
// 2.2 设置静态资源
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 设置post请求的中间件
app.use(express.urlencoded({ extended: true }))
// 3. 监听请求并处理

app.use('/api', api)
// 4. 监听指定端口
app.listen(3000, () => {
    console.log('服务器已开启,请查看: http://localhost:3000')
})