// 1. 引入mongoose模块
// 1.1 引入mongoose模块
const mongoose = require('mongoose')
// 2. 连接数据库
// require('./dbContent.js')
// 3. 创建约束并应用约束
let article = new mongoose.model('article', new mongoose.Schema({
	title: {
		type: String,
		maxlength: 20,
		minlength: 1,
		requred: true,
	},
	content: {
		type: String,
		required: true,
	},
	cover: {
		type: String,
		default: null,
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user',
		required: true,
	},
	publishDate: {
		type: Date,
		default: Date.now
	}
}))
// 4. 添加文档到数据库表中
// article.create({
// 	title: '肖申克的救赎',
// 	content: '我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!',
// 	author: '5edde6961edabd1044dc649c',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '王婆卖瓜',
// 	content: '王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！',
// 	author: '5edde6961edabd1044dc649d',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '自卖自夸',
// 	content: '自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！',
// 	author: '5edde6961edabd1044dc649e',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '爱',
// 	content: '爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？',
// 	author: '5edde6961edabd1044dc649f',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '恨',
// 	content: '恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？',
// 	author: '5edde6961edabd1044dc64a0',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '情',
// 	content: '情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？',
// 	author: '5edde6961edabd1044dc64a1',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '仇',
// 	content: '我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！',
// 	author: '5edde6961edabd1044dc64a2',
// 	cover: './upload/1.jpg'
// })

module.exports = article