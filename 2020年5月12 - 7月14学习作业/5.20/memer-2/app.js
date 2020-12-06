// 1. 引入模块
const express = require('express')
const path = require('path')
const data = require('./public/data')
const multer = require('multer')
// 2. 设置模块
// 设置multer模块
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
// 2.1 使用express方法创建一个服务器
const app = express();
// 2.2 设置静态资源
app.use(express.static(path.join(__dirname, 'public')))
// 3. 监听请求并处理响应
// 把数据库中的内容全部渲染到页面中
app.get('/api/getAll', function (req, res) {
    if (!data.get()) {
        return res.status(500).send({
            code: 500,
            mag: '服务器端错误',
            data: null,
        })
    }
    return res.status(200).send({
        code: 200,
        msg: '接收成功',
        data: data.get(),
    })
})

app.get('/api/getDetail', (req, res) => {
    let getid = data.getById(parseInt(req.query.id))
    if (!getid) {
        res.status(404).send({
            code: 200,
            msg: '没有找到这个内容',
            data: null,
        })
        return;
    }

    res.status(200).send({
        code: 200,
        msg: '成功',
        data: getid,
    })
})
// 添加一个数据
app.post('/app/add', uploader.single('avatar'), (req, res) => {
    let member = {
        id: +new Date(),
        name: req.body.name,
        avatar: `/upload/${req.file.filename}`,
        bio: req.body.bio,
        created: new Date()
    }

    let dataStatus = data.add(member)

    if (dataStatus == 'ok') {
        res.status(200).send({
            code: 200,
            msg: '添加成功',
            data: null,
        })
    }
})


// 删除一个数据
app.get('/app/delete', (req, res) => {
    // console.log(req.query.id)


    let deleteId = req.query.id
    let dataStatuc = data.deleteItem(parseInt(deleteId))
    if (dataStatuc == 'ok') {
        res.status(200).send({
            code: 200,
            msg: '删除成功',
            data: null
        })
    }

})

// 4. 监听指定端口
app.listen(80, () => {
    console.log('服务已启动,请访问:  http://localhost')
})