$(function() {
	pagenation()
})


/**
 * [pagenation description]
 * @param  {Number} pageNum  第几页
 * @param  {Number} pageSize 获取几条数据
 */
function pagenation(pageNum, pageSize) {
	// 发起ajax请求
	$.ajax({
		type: 'GET',
		url: '/api/article',
		data: {
			pageNum: pageNum || 1,
			pageSize: pageSize || 6,
		},
		success: function(result) {
			if (result.code == 200) {
				let listStr = template('list_templ', result.data)

				$('.list').html(listStr)
			}
		}
	})
}