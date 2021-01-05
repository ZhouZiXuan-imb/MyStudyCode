// 1. 引入包
// 1.1 引入joi后端表单校验包
const Joi = require('joi');
// 1.2 引入模型
const { findUser } = require('../models/adminLoginModel')
// 2. 导出方法
// 2.1 导出登陆页面方法
module.exports.loginPage = (req, res) => {
    res.render('./admin/login', { title: '后台管理系统-登录' })
};
// 2.2 导出登陆页面业务处理方法
module.exports.loginUser = (req, res) => {
    // console.log(req.body)
    let { email, password } = req.body
    const schema = Joi.object().keys({
        email: Joi.string().email().min(6).max(100).required().error(new Error('邮箱输入错误')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required().error(new Error('密码输入错误'))
    })

    const result = Joi.validate({ email: email, password: password }, schema)
    if (result.error) {
        res.send({
            code: 500,
            message: result.error.message
        })
        // 抛出错误
        throw result.error
    }

    // 做数据对比
    findUser(email, function (result) {
        if (result.length !== 0) {
            req.session.user = result[0]
            if (result[0].password == password) {
                return res.send({
                    code: 200,
                    message: '登录成功'
                })
            } else {
                return res.send({
                    code: 500,
                    message: '密码输入错误'
                })
            }
        } else {
            return res.send({
                code: 500,
                message: '邮箱不存在'
            })
        }
    })
};

// 2.1 导出退出登录方法
module.exports.logoutUser = (req, res) => {
    req.session.destroy(function (err) {
        res.clearCookie('connect.sid')

        res.send({
            code: 200,
            message: '退出成功'
        })
    })
};