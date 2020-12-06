// 1.导包
const express = require('express');
const path = require('path');
const fs = require('fs')
const db = require('./data/db.json');
// 2.设置包
// 2.1 创建服务器
const app = express();
// 2.2 设置静态目录
app.use(express.static(path.join(__dirname, 'public')))

// 3.1 处理查找留言请求
app.get('/findGuest', (req, res) => {
  res.status(200).send(db);
})

app.use(express.urlencoded({ extended: true }))

app.post('/findGuest', (req, res) => {
  console.log(req.body)

  db.unshift(req.body)

  fs.writeFile(path.join(__dirname, 'data', 'db.json'), JSON.stringify(db), function (err) {
    if (err !== null) {
      console.log(err)
      return
    }

    res.status(200).json({
      code: 200,
      content: '提交成功'
    })

  })
})



// 4.指定端口 启动服务
app.listen(3000, () => {
  console.log("请打开 http://localhost:3000")
})