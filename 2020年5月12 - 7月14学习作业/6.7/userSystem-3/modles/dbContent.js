// 1. 引入mongoose模块
// 1.1 引入mongoose模块
const mongoose = require('mongoose')

// 2. 连接数据库
mongoose.connect('mongodb://66.112.215.31:27017/zzx_blog', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	// 成功时的回调函数 
	.then(() => {
		console.log('数据库连接成功')
	})
	// 失败时的回调函数
	.catch((err) => {
		console.log('数据库连接失败')
	})