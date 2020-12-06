$(function() {
	// 1. 进入页面发起ajax请求 获取分页数据 
	articlePage(0, 6)


	// 2. 给上一页和下一页按钮添加点击事件
	$('.page').on('click', '.prve,.next', function(e) {
		e.preventDefault();
		if (!$(this).hasClass('disabled')) {
			let pageNum = $(this).attr('data-pagenum')
			articlePage(pageNum)
		}
	})

	$('.page').on('click', '.pageNum', function(e) {
		e.preventDefault();
		let pageNum = $(this).text();
		
		articlePage(pageNum)
	})
})

function articlePage(pageNum, pageSize) {
	$.ajax({
		type: 'GET',
		url: '/api/article',
		data: {
			pageNum: pageNum || 1,
			pageSize: pageSize || 6,
		},
		success: (result) => {
			if (result.code == 200) {
				let listStr = template('list_templ', result.data)

				$('.list').html(listStr)


				$('html').attr('data-pageNum', pageNum)


				let btnStr = template('pagenation_templ', result.data)

				$('.page').html(btnStr)
			}
		}
	})
}