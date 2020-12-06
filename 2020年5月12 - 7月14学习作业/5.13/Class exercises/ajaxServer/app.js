const express = require('express')
const path = require('path')
const body = require('body-parser')

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
// 设置中间件
app.use(body.json())

app.post('/json', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})


app.listen(3000, () => {
    console.log('请查看  http://localhost:3000')
})