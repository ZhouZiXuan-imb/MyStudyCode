// 1. 引入express
const express = require('express');
// 引入post请求中间件
const body_parser = require('body-parser')
// 2. 使用express创建一个服务器
const app = express();
// 设置静态目录
app.use(express.static('public'))
// 使用post中间件
app.use(body_parser.urlencoded({ extended: false }))
// 路由
// app.get('/', (req, res) => {
//     res.send('HelloWorld')
// })

// app.get('/about', (req, res) => {
//     console.log(req.query);
//     res.send('HelloWorld')
// })

// app.get('/abouta/:ids', (req, res) => {
//     // console.log(req.params.ids);
//     res.send(`你好，这里是用户中心，用户id为${req.params.ids}`)
// })

// app.post('/postqingqiu', (req, res) => {
//     console.log(req.body);
//     console.log('这里是post请求');
// })

app.get('/ajaxa', (req, res) => {
    console.log(req.query);
    console.log('我是超链接');
})

// 3. 指定端口并监听
app.listen('3000', () => {
    console.log('服务器已开启，请访问 http://localhost:3000');
})
