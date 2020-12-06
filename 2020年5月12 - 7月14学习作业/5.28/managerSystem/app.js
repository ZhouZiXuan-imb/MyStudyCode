// 1. 引入模块
// 1.1 引入express模块
const express = require('express')
// 1.2 引入path模块
const path = require('path')
// 1.3 引入数据库文件
const database = require('./data')
// ===============================================================================

// 2. 设置模块
// 2.1 使用express包创建服务器
const app = express();
// 2.2 设置静态资源
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 设置中间件
app.use(express.urlencoded({ extended: false }))
// ===============================================================================

// 3. 监听请求并处理
// 3.1 获取数据库中的所有数据
app.get('/api/list', (req, res) => {
    let pageNum = req.query.pageNum;
    let pageSize = req.query.pageSize
    database.get(parseInt(pageNum), parseInt(pageSize), function (data) {
        if (data) {
            res.status(200).send({
                code: 200,
                message: '数据获取成功',
                data: data
            })
        }
    })
})
// 3.2 删除一条数据
app.post('/api/delete', (req, res) => {
    let dataleDataId = req.body.id
    database.deleteData(dataleDataId, function () {
        res.status(200).send({
            code: 200,
            msg: '数据删除成功',
            data: null,
        })
    })
})
// 3.3 添加一条(用户)数据
app.post('/api/add', function (req, res) {
    // console.log(req.body)

    let userdata = {
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        hobbies: req.body.hobbies
    }

    database.adddata(userdata, function (data) {
        if (data) {
            res.send({
                code: 200,
                msg: '数据添加成功',
                data: null,
            })
        }
    })
})
// 4. 监听指定端口
app.listen(80, function () {
    console.log('服务器已开启,请查看: http://localhost')
})