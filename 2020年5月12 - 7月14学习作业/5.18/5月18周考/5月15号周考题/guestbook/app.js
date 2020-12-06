// 1. 引入模块
const express = require('express')
const path = require('path')
const db = require('./data/db.json')
const fs = require('fs')
// 2. 使用express方法创建一个服务器
const app = express();
// 2.1 设置静态资源
app.use(express.static(path.join(__dirname, '静态模板')))
// 2.2 设置POST方式的中间件
app.use(express.urlencoded({ extended: false }))
// 3. 监听请求并处理响应
app.post('/postData', (req, res) => {
    if (req.body.name && req.body.content) {
        db.unshift({
            name: req.body.name,
            content: req.body.content,
            date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
        })
    }
    fs.writeFile(path.join(__dirname, 'data', 'db.json'), JSON.stringify(db), (err) => {
        if (err !== null) {
            console.log(err)
            return;
        }
        res.status(200).send({
            code: 200,
            msg: '写入成功',
            data: req.body,
        })
    })
    // console.log(path.join(__dirname, '静态模板', 'data', 'db.json'))
})


app.get('/getData', (req, res) => {
    res.send(db)
})
// 4. 监听指定端口
app.listen(3000, () => {
    console.log('服务器创建成功,请查看  http://localhost:3000')
})



