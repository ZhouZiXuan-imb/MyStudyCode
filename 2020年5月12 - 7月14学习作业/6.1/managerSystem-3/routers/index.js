// 引入
const DB = require('../data')

module.exports = {
    list: (req, res) => {
        let pageNum = req.body.pageNum;
        let pageSize = req.body.pageSize;
        DB.get(parseInt(pageNum), parseInt(pageSize), function (data) {
            res.status(200).send({
                code: 200,
                msg: '数据获取成功',
                data: data,
            })
        })
    },
    delete: (req, res) => {
        let deleteId = req.body.id
        DB.deleteData(deleteId, function (data) {
            res.status(200).send({
                code: 200,
                msg: '数据删除成功',
                data: data,
            })
        })
    },
    add: (req, res) => {
        let userdata = {
            username: req.body.username,
            age: req.body.age,
            password: req.body.password,
            email: req.body.email,
            hobbies: req.body.hobbies
        }
        DB.addData(userdata, function (data) {
            res.status(200).send({
                code: 200,
                msg: '数据添加成功',
                data: null,
            })
        })
    },
    findOne: (req, res) => {
        let updateId = req.body.id
        DB.findOne(updateId, function (data) {
            res.status(200).send({
                code: 200,
                msg: '回显数据获取成功',
                data: data
            })
        })
    },
    update: (req, res) => {
        let updateId = req.body.userid;
        let formdata = {
            username: req.body.username,
            age: req.body.age,
            password: req.body.password,
            email: req.body.email,
            hobbies: req.body.hobbies
        }
        DB.updateOne(updateId, formdata, function (data) {
            res.status(200).send({
                code: 200,
                msg: '数据修改成功',
                data: null
            })
        })
    }
}