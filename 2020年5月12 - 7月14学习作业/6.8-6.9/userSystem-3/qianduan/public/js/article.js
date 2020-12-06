$(function() {
	// 1. 刚进页面获取url参数 发起Ajax请求
	let url = new URLSearchParams(location.search).get('id')
	// console.log(url)
	getDetailData (url)
})

function getDetailData (id) {
	$.ajax({
		type:'GET',
		url:'/api/detailData',
		data:{
			id:id
		},
		success:function(result) {
			if(result.code == 200) {
				result.data.publishDate = moment(result.data.publishDate).format('YYYY-MM-DD')
				let articleStr = template('article_templ',result.data)
				$('.container').html(articleStr) 
			}
		}
	})
}