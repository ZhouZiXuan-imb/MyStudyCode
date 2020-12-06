const DB = require('../data/index')

module.exports = {
    list: (req, res) => {
        let pageNum = req.body.pageNum;
        let pageSize = req.body.pageSize
        DB.pagenation(parseInt(pageNum), parseInt(pageSize), function (data) {
            res.status(200).send({
                code: 200,
                msg: '数据获取成功',
                data: data
            })
        })
    },
    add: (req, res) => {
        let userdataObj = {
            username: req.body.username,
            password: req.body.password,
            age: req.body.age,
            hobbies: req.body.hobbies,
            email: req.body.email,
        }
        DB.addUser(userdataObj, function (data) {
            res.status(200).send({
                code: 200,
                msg: '数据添加成功',
                data: data,
            })
        })
    },
    delete: (req, res) => {
        let deleteId = req.body.id
        DB.deleteUser(deleteId, function () {
            res.status(200).send({
                code: 200,
                msg: '数据删除成功',
                data: null,
            })
        })
    },
}