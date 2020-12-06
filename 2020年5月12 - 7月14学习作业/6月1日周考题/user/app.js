// 1. 引入包
const express = require('express')
const path = require('path')
const router = require('./routers/index')
// 2. 设置包
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true, }))
// app.use(router);
// 3. 监听处理请求并做出响应
// 3.1 分页获取数据
app.post('/api/list', router.list)

// 3.2 添加一条用户
app.post('/api/add', router.add)

// 3.3 删除某条数据
app.post('/api/delete', router.delete)
// 4. 监听指定端口
app.listen(3000, function () {
    console.log('服务器已开启,请查看: http://localhost:3000')
})