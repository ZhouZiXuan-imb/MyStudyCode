$(function() {
	// 1. 进入页面 发起ajax请求 获取分页数据
	pagenation(1, 6)

	$('.page').on('click', 'a', function(e) {
		e.preventDefault();
		// console.log($(this).data('pagenum'))
		let pageNum = $(this).attr('data-pagenum')
		console.log(pageNum)
		pagenation(pageNum)
	})
})

function pagenation(pageNum, pageSize) {
	$.ajax({
		type: 'GET',
		url: '/api/listItem',
		data: {
			pageNum: pageNum || 1,
			pageSize: pageSize || 6
		},
		success: function(result) {
			if (result.code == 200) {
				let listStr = template('list_templ', result.data)
				$('.list').html(listStr)

				$('html').attr('data-pagenum', result.data.page)

				let btnStr = template('pagenation_templ', result.data)
				$('.page').html(btnStr)
			}
		}
	})
}