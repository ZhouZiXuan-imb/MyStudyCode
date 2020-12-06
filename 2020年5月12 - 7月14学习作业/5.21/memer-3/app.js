// 1. 引入模块
// 1.1 引入express模块
const express = require('express')
// 1.2 引入path模块
const path = require('path')
// 1.3 引入multer模块
const multer = require('multer')
// 1.4 引入数据库文件
const database = require('./public/data')
// 2. 设置模块
// 2.1 使用express模块创建服务器
const app = express();
// 2.2 设置静态资源
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 设置multer模块
let uploader = multer({
    storage: multer.diskStorage({
        destination: (req, file, cd) => {
            cd(null, path.join(__dirname, 'public', 'upload'))
        },
        filename: (req, file, cd) => {
            cd(null, file.originalname)
        }
    })
})
// 3. 监听请求并处理
// 3.1 获取到数据库中所有的数据  发送给前端
app.get('/api/getAll', (req, res) => {
    if (!database.get()) {
        return res.status(500).send({
            code: 500,
            msg: '服务器端错误,未能找到数据',
            data: null,
        })
    }
    return res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: database.get()
    })
})
// 3.2 点击View按钮 会跳转到当前数据对应的页面
app.get('/api/getId', (req, res) => {
    let thisId = req.query.id
    let idData = database.getIdData(parseInt(thisId))
    if (!idData) {
        return res.send({
            code: 500,
            msg: '服务器端错误,没有找到此数据',
            data: null,
        })
    }
    return res.status(200).send({
        code: 200,
        msg: '接收成功',
        data: idData,
    })
})
// 3.3 前端把数据发送过来  后端处理这条数据
app.post('/api/postData', uploader.single('avatar'), (req, res) => {
    let member = {
        id: +new Date(),
        name: req.body.name,
        avatar: '/upload/' + req.file.filename,
        bio: req.body.bio,
        created: new Date()
    }

    let dataStatus = database.addData(member)
    if (dataStatus !== 'ok') {
        return res.send({
            code: 500,
            msg: '服务器端错误,添加数据失败',
            data: null,
        })
    }
    return res.status(200).send({
        code: 200,
        msg: '数据添加成功',
        data: null,
    })
})
// 3.4 前传穿送过来点击了删除按钮的这条数据的id 后端去数据库中找有没有相同id的数据
app.get('/api/deleteData', (req, res) => {
    // let deleteId = 
    // console.log(deleteId)
    let deleteIdStatus = database.deleteData(parseInt(req.query.id))
    if (deleteIdStatus !== 'ok') {
        return res.send({
            code: 500,
            msg: '服务器端错误',
            data: null,
        })
    }
    return res.send({
        code: 200,
        msg: '数据删除成功',
        data: null,
    })
})
// 4. 监听指定端口
app.listen(3000, () => {
    console.log('服务器开启成功,请查看: http://localhost:3000')
})