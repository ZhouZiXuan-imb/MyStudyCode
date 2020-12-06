// 1. 引入模块
// 1.1 引入express模块
const express = require('express')
// 1.2 引入path模块
const path = require('path')
// 1.3 下载并引入multer模块
const multer = require('multer')
// 1.4 引入index.js数据库包
const data = require('./data')


// 2. 设置模块
// 2.1 使用express()方法创建一个服务器
const app = express()
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
// 3.1 获取数据库中所有数据  渲染到页面中
app.get('/api/getAll', (req, res) => {
    if (!data.get()) {
        return res.status(500).send({
            code: 500,
            msg: '数据添加失败',
            data: null,
        })
    }
    res.status(200).send({
        code: 200,
        msg: '数据添加成功',
        data: data.get()
    })
})
// 3.2 点击主页面中的任意一个View按钮 会跳转到对应的页面中
app.get('/api/getOneData', (req, res) => {
    // console.log(req.query)
    let id = parseInt(req.query.id)
    if (!data.getId(id)) {
        return res.status(500).send({
            code: 500,
            msg: '服务器端错误',
            data: null,
        })
    }

    return res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: data.getId(id)
    })
})
// 3.3给页面中添加一条新的数据
app.post('/api/postFormData', uploader.single('avatar'), (req, res) => {
    // console.log(req.body)
    // console.log(req.file)
    let member = {
        id: +new Date(),
        name: req.body.name,
        avatar: `/upload/${req.file.filename}`,
        bio: req.body.bio,
        created: new Date()
    }

    let dataStatus = data.addData(member)
    if (dataStatus == 'ok') {
        return res.status(200).send({
            code: 200,
            msg: '数据写入成功',
            data: null,
        })
    }

    return res.status(500).send({
        code: 500,
        msg: '数据写入失败',
        data: null,
    })
})
// 3.4点击删除按钮  删除点击的哪个按钮
app.get('/api/deleteData', (req, res) => {
    let deleteid = req.query.id
    let dataleStatus = data.deleteItem(parseInt(deleteid))
    if (dataleStatus !== "ok") {
        return res.status(500).send({
            code: 500,
            msg: '服务器端错误',
            data: null,
        })
    }
    return res.status(200).send({
        code: 200,
        msg: '数据删除成功',
        data: null,
    })
})
// 4. 监听指定端口
app.listen(3000, () => {
    console.log('服务器已开启,请查看 http://localhost:3000')
})