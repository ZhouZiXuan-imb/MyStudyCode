// 1. 引入模块
const mongooseSexPage = require('mongoose-sex-page');
const Article = require('../modles/article.js');
require('../modles/user.js');

module.exports.getArticle = async (req, res) => {
	let pageNum = req.query.pageNum;
	let pageSize = req.query.pageSize;
	let result = await mongooseSexPage(Article).page(pageNum).size(pageSize).display().find().populate('author').exec();
	res.status(200).send({
		code: 200,
		msg: '分页数据获取成功',
		data: result
	})
}

module.exports.getDetailData = async (req,res) => {
	let id = req.query.id
	// console.log(req.query)
	let result = await Article.findOne({_id: id}).populate('author')
	res.send({
		code:200,
		msg: '数据获取成功',
		data: result
	})
}