const Article = require('../modles/article.js')

const mongooseSexPage = require('mongoose-sex-page')
require('../modles/user.js')

module.exports.getArticle = async (req, res) => {
	let pageNum = req.query.pageNum;
	let pageSize = req.query.pageSize;
	let result = await mongooseSexPage(Article).page(pageNum).size(pageSize).display().find().populate('author').exec()
	console.log(result)
	res.status(200).send({
		code: 200,
		msg: '数据获取成功',
		data: result
	})
}