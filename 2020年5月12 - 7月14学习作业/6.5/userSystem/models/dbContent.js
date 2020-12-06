const mongoose = require('mongoose')

// 2. 连接数据库
mongoose.connect('mongodb://66.112.215.31/zzx_blog', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('数据库连接成功')
	})
	.catch((err) => {
		console.log(err)
	})