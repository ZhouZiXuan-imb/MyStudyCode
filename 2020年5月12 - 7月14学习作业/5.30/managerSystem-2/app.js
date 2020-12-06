// 1. 引入包
// 1.1 引入express包
const express = require('express')
// 1.2 引入path包
const path = require('path')
// 1.3 引入数据库包
const DB = require('./data')

/* ========================================= */

// 2. 设置模块
// 2.1 使用express包创建服务器
const app = express();
// 2.2 设置静态资源
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 设置post方法的中间件
app.use(express.urlencoded({ extended: false }))

/* ========================================= */

// 3. 监听请求并处理
// 3.1 获取数据
app.get('/api/list', (req, res) => {
    let pageNum = req.query.pageNum;
    let pageSize = req.query.pageSize;
    DB.get(parseInt(pageNum), parseInt(pageSize), function (result) {
        if (result.data) {
            res.status(200).send({
                code: 200,
                msg: '数据获取成功',
                data: result
            })
        }
    })
})
// 3.2 添加数据（用户）
app.post('/api/add', (req, res) => {
    let UserData = {
        username: req.body.username,
        password: req.body.password,
        age: req.body.age,
        email: req.body.email,
        hobbies: req.body.hobbies
    }

    DB.addUser(UserData, function (data) {
        res.status(200).send({
            code: 200,
            msg: '数据添加成功',
            data: null,
        })
    })
})
// 3.3 删除一个数据（用户）实际工作中不回删除用户的数据
app.post('/api/delete', (req, res) => {
    let deleteId = req.body.id

    DB.deleteData(deleteId, function (data) {
        res.status(200).send({
            code: 200,
            msg: '数据删除成功',
            data: null,
        })
    })
})

/* ========================================= */

// 4. 监听指定端口
app.listen(3000, () => {
    console.log('服务器已开启,请访问: http://localhost:3000')
})