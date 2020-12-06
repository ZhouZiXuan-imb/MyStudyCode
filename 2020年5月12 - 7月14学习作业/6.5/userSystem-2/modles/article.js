const mongoose = require('mongoose')

let article = new mongoose.model('article', new mongoose.Schema({
	title: {
		type: String,
		maxlength: 20,
		minlength: 1,
		required: true,
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

// article.create({
// 	title: '肖申克的救赎',
// 	content: '我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!我要越狱了!',
// 	author: '5eda114b26119e04fc2b23d3',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '王婆卖瓜',
// 	content: '王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！王婆卖瓜！',
// 	author: '5eda18cba6a5cb1d0ceb56c8',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '自卖自夸',
// 	content: '自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！自卖自夸！',
// 	author: '5eda18cba6a5cb1d0ceb56c9',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '爱',
// 	content: '爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？爱是什么？',
// 	author: '5eda18cba6a5cb1d0ceb56ca',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '恨',
// 	content: '恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？恨是什么？',
// 	author: '5eda18cba6a5cb1d0ceb56cb',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '情',
// 	content: '情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？情是什么？',
// 	author: '5eda18cba6a5cb1d0ceb56cc',
// 	cover: './upload/1.jpg'
// })
// article.create({
// 	title: '仇',
// 	content: '我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！我要报仇啊啊啊！',
// 	author: '5eda18cba6a5cb1d0ceb56cd',
// 	cover: './upload/1.jpg'
// })
module.exports = article