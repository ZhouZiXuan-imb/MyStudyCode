// 1. 引入包
const mongoose = require('mongoose')
// 2. 连接数据库
// mongoose.connect('mongodb://66.112.215.31/zzx_blog', {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})
// 	.then(() => {
// 		console.log('数据库连接成功')
// 	})
// 	.catch((err) => {
// 		console.log(err)
// 	})

// 3. 创建数据信息约束
let statusSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		requred: true,
	},
	email: {
		type: String,
		requred: true,
	},
	role: {
		type: String,
	},
	status: {
		type: Boolean,
		default: true,
	}
})
// 4. 应用约束
let user = new mongoose.model('user', statusSchema)
// 5. 给数据库中添加内容(初始化数据库)
// user.create({
// 	username:'zhouzhou',
// 	password:'zhouzixuan999',
// 	email:'zhouzixuan@qq.con',
// 	role:'超级管理员',
// })


module.exports = user