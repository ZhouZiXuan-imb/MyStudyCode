// 引入表单校验插件
const Joi = require('joi');
// 引入模型
const { findUser } = require('../models/adminLoginModel');
// 1.显示登录页面
module.exports.loginPage = (req, res) => {
  res.render('./admin/login', { title: '后台管理系统-登录' });
}

// 2.处理登录业务
module.exports.loginUser = (req, res) => {
  // 1.获取前端传来的数据
  let { email, password } = req.body;
  // 2.后端数据校验
  const schema = Joi.object().keys({
    email: Joi.string().min(6).max(100).email().required().error(new Error('邮箱或密码不正确')),
    password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required().error(new Error('邮箱或密码不正确'))
  })
  let result = Joi.validate({ email: email, password: password }, schema);
  // console.log(result.error); // 如果校验通过那么 error对象为null
  if (result.error) {
    res.send({
      code: 500,
      message: result.error.message
    })
    // 抛出错误
    throw result.error;
  }

  // 3.数据库的数据比对
  findUser(email, function (results) {
    // 1.判断邮箱书写是否正确(只要results的长度为0则说明邮箱写的不对)
    if (results.length !== 0) { // 邮箱存在
      // 2.判断通过邮箱查询的用户信息中 密码是否和前端传过来的密码一致(如果一致代表登录成功)
      if (results[0].password == password) { // 密码匹配

        // 把用户信息保存在session中，为了进行权限管理
        req.session.user = results[0];
        // console.log(req.session.user.email);
        return res.send({
          code: 200,
          message: "登录成功"
        })
      } else { // 密码不匹配
        return res.send({
          code: 500,
          message: "邮箱或密码错误"
        })
      }

    } else { // 邮箱不存在
      return res.send({
        code: 500,
        message: "邮箱或密码错误"
      })
    }

  })

  // res.send("登录成功"); //  Cannot set headers after they are sent to the client 写了多次res.send()
}

// 3.处理退出业务
module.exports.logoutUser = (req, res) => {
  req.session.destroy(function (err) {
    res.clearCookie('connect.sid');
    res.send({
      code: 200,
      message: "退出成功"
    })
  })
}