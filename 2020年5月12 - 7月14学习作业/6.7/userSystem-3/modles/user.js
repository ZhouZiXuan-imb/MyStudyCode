// 1. 引入模块
// 1.1 引入mongoose模块
const mongoose = require('mongoose')
// 2. 连接数据库


// 3. 创建约束并应用约束
let User = new mongoose.model('user', new mongoose.Schema({
	username: {
		type: String,
		required: true,
		maxlength: 16,
		minlength: 1,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		default: "普通用户",
		required: true,
	},
	status: {
		type: Boolean,
		default: true,
	}
}))
// 4. 添加文档到数据库表中
// User.create({
// 	username:'周周',
// 	password:'zhouzixuan999',
// 	email: 'zhouzixuan@qq.com',
// 	role:'超级管理员'
// })
// User.create({
// 	username:'张三',
// 	password:'zhangsan999',
// 	email: 'zhangsan@qq.com',
// 	role:'普通用户'
// })
// User.create({
// 	username:'赵四',
// 	password:'zhaosi999',
// 	email: 'zhaosi@qq.com',
// 	role:'普通用户'
// })
// User.create({
// 	username:'王五',
// 	password:'wangwu999',
// 	email: 'wangwu@qq.com',
// 	role:'普通用户'
// })
// User.create({
// 	username:'李六',
// 	password:'liliu999',
// 	email: 'liliu@qq.com',
// 	role:'普通用户'
// })
// User.create({
// 	username:'曹操',
// 	password:'caocao999',
// 	email: 'caocao@qq.com',
// 	role:'普通用户'
// })
// User.create({
// 	username:'关羽',
// 	password:'guanyu999',
// 	email: 'guanyu@qq.com',
// 	role:'普通用户'
// })
// 

module.exports = User