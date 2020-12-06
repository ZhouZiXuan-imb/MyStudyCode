const mongoose = require('mongoose')

mongoose.connect('mongodb://66.112.215.31/zzx_blog', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => {
		console.log('数据库连接成功')
	})
	.catch((err) => {
		console.log('数据库连接失败')
	})