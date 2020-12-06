let express = require('express')
let path = require('path')
let fs = require('fs')
let json = require('./students/data/indexData.json')

let app = express();

app.use(express.static(path.join(__dirname, 'students')))

app.use(express.urlencoded({ extended: false }));

app.post('/students', (req, res) => {
    let reqdata = {
        name: req.body.username,
        age: req.body.age,
        man: req.body.man,
        emll: req.body.emll,
        daima: req.body.daima,
        lanqiu: req.body.lanqiu,
        shuijiao: req.body.shuijiao,
        xueyuan: req.body.xueyuan,
        date: req.body.date
    }
    json.unshift(reqdata)
    console.log(reqdata)
    // 3.2.3 把弄好的数据写入到db.json
    fs.writeFile(path.join(__dirname, 'students', 'data', 'indexData.json'), JSON.stringify(json), (err) => {
        if (err != null) {
            console.log(err);
        }

        // status 200代表的是浏览器的状态码
        res.status(200).json({
            // 返回给前端的状态数据
            code: 200,
            // 返回给前端的状态数据对应的信息
            msg: "数据添加成功"
        })
    })
})

app.get('/getstudents', (req, res) => {
    res.status(200).send(json)
})

app.listen(3000, function () {
    console.log('请查看 http://localhost:3000')
})