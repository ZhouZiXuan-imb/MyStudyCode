$(function () {

    // 获取当前页面的
    let id = new URLSearchParams(location.search).get('id')
    console.log(id)
    $.ajax({
        type: 'GET',
        url: '/api/getDetail',
        data: {
            id: id
        },
        success: function (data) {
            let htmlStr = template('detail_templ', data.data)
            $('.jumbotron').html(htmlStr)
        }
    })
})