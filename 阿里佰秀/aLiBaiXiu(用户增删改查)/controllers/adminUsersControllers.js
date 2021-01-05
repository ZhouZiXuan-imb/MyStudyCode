const { findUsers, addUsers, deleteUsers } = require('../models/adminUsersModel')

module.exports.users = (req, res) => {

    findUsers(function (result) {
        res.render('admin/users', {
            title: '后台管理系统-用户',
            data: result
        })
    })
}

module.exports.profile = (req, res) => {
    res.render('admin/profile', { title: '后台管理系统-个人中心' })
}

module.exports.addUser = (req, res) => {
    console.log(req.body)
    let { email, slug, nickname, password } = req.body

    addUsers(email, password, nickname, slug, function (result) {
        res.send({
            code: 200,
            message: result
        })
    })

}

module.exports.deleteUser = (req, res) => {
    console.log(req.body)
    let { id } = req.body

    deleteUsers(id, function (result) {
        if (result.affectedRows === 1) {
            res.send({
                code: 200,
                message: '删除成功'
            })
        }
    })

}