const express = require('express')
const path = require('path')

// 启动服务
const app = express();

// 设置静态目录
app.use(express.static(path.join(__dirname, '/public')))

// 设置
app.get('/reqGet', (req, res) => {
    console.log(req.query)
    res.send(req.query)
})

app.listen(80, () => {
    console.log('请查看 http://localhost')
})