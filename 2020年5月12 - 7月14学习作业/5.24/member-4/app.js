// 1. 引入模块
// 1.1 引入express模块
const express = require('express')
// 1.2 引入数据库模块
const database = require('./public/data')
// 1.3 引入path模块
const path = require('path')
// 1.4 引入multer模块
const multer = require('multer')
// 2. 设置模块
// 2.1 使用express模块创建一个服务器
const app = express();
// 2.2 设置静态资源
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 设置multer模块
let uploader = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, 'public', 'upload'))
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
    })
})
// 3. 监听请求并处理响应
// 3.1 当收到前端的ajax请求的时候 获取数据库中所有的数据 返回给前端
app.get('/api/getAll', (req, res) => {
    if (!database.get()) {
        return res.send({
            code: 500,
            msg: '服务器错误',
            data: null,
        })
    }

    return res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: database.get(),
    })
})
// 3.2 监听到前端发来的id 把这个id发送给数据库做对比
app.get('/api/getData', (req, res) => {
    let getId = req.query.id
    let getIdData = database.getData(parseInt(getId))
    if (!getIdData) {
        return res.send({
            code: 500,
            msg: '服务器错误',
            data: null,
        })
    }
    return res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: getIdData,
    })
})
// 3.3 监听到前端发来的formdata数据后 把这个数据添加到数据库中
app.post('/api/postData', uploader.single('avatar'), (req, res) => {
    let multer = {
        id: +new Date(),
        name: req.body.name,
        avatar: `/upload/${req.file.filename}`,
        bio: req.body.bio,
        created: new Date()
    }

    let dataStatus = database.postData(multer)

    if (!dataStatus == 'ok') {
        return res.send({
            code: 500,
            msg: '服务器错误',
            data: null,
        })
    }

    return res.status(200).send({
        code: 200,
        msg: '数据添加成功',
        data: null,
    })
})
// 3.4 监听到前端发来的id后 把这个id发送给数据库中做对比 如果又一样id的就删除
app.get('/api/deleteData', (req, res) => {
    let deleteid = req.query.id
    let deleteDataStatus = database.delData(parseInt(deleteid))
    if (!deleteDataStatus == 'ok') {
        res.send({
            code: 500,
            msg: '服务器错误',
            data: null,
        })
    }
    res.status(200).send({
        code: 200,
        msg: '数据删除成功',
        data: null,
    })
})
// 3.5 分页加载数据
app.get('/api/pagetion', (req, res) => {
    // console.log(req.query)
    let pageData = database.getByPage(parseInt(req.query.last), parseInt(req.query.limit))
    if (!pageData) {
        res.send({
            code: 500,
            msg: '服务器错误',
            data: null
        })
    }
    res.status(200).send({
        code: 200,
        msg: '数据获取成功',
        data: pageData
    })
})
// 4. 监听指定端口
app.listen(3000, () => {
    console.log('服务器创建成功,请查看 http://localhost:3000')
})