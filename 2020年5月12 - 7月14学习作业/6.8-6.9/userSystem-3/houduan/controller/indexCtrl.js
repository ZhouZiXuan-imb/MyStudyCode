// 引入数据库处理文件
const user = require('../models/user')

module.exports.login = async (req, res) => {
    let { email, password } = req.body

    let userData = await user.findOne({ email: email })
    if (userData) {
        if (password.trim().length == 0 || email.trim().length == 0) {
            res.status(400).send({
                code: 400,
                msg: '邮箱或密码错误'
            })
        } else {
            if (password === userData.password) {
                res.status(200).send({
                    code: 200,
                    msg: '数据获取成功'
                })
            } else {
                res.status(400).send({
                    code: 400,
                    msg: '邮箱或密码错误'
                })
            }
        }
    } else {
        res.status(400).send({
            code: 400,
            msg: '邮箱或密码错误'
        })
    }

}