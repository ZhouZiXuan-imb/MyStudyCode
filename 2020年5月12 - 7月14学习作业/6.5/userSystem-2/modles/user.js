const mongoose = require('mongoose')


require('./dbContent.js')
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