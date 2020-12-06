// 1. 引入包
// 1.1 引入joi后端表单校验包
const Joi = require('joi');
// 1.2 引入模型
const { findUser } = require('../models/adminLoginModel')
// 2. 导出方法
// 2.1 导出登陆页面方法
module.exports.loginPage = (req, res) => {
    res.render('admin/login')
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
        console.log(result)
    })
};