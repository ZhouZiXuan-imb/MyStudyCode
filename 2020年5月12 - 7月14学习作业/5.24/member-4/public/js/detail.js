$(function () {


    // 1. 查看当前页面?之后的id值 把这个id传给后台,让后台返回一个和页面id 对应的数据
    // 实例化对象
    let ids = new URLSearchParams(location.search).get('id')
    // 2. 发起ajax请求
    getData(ids)
})


function getData(id) {
    $.ajax({
        type: 'GET',
        url: '/api/getData',
        data: {
            id: id
        },
        success: function (data) {
            let htmlStr = template('str_template', data.data)
            $('.jumbotron').html(htmlStr)
        }
    })
}