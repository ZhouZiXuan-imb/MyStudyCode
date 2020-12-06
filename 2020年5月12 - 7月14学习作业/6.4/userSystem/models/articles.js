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
	title:{
		type:String,
		required:true,
		maxlength: 20,
		minlength: 1,
	},
	author:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},
	publishDate: {
		type:Date,
		default:Date.now
	},
	content: {
		type:String,
	},
	cover:{
		type:String,
		default:null,
	}
})
// 4. 应用约束
let article = new mongoose.model('articles',statusSchema)
// 5. 给数据库中添加内容(初始化数据库)
// article.create({
// 	title:'肖申克的救赎',
// 	author: '5ed8d541fa08ef0ec03d09a4',
// 	content: '我要越狱了',
// 	cover: './upload/1.jpg'
// })


module.exports = article