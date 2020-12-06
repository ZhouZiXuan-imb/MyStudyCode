$(function () {
    // 获取当前页面的参数 id  把这个id传送给后台
    // 后台去和数据库中的数据做对比  看看有没有相同id的数据
    // 如果有  就把这个id返回给后端  后端再返回给前端
    let id = new URLSearchParams(location.search).get('id')
    // 发起ajax请求  把获取到的这个id发送给后台
    getThisIdData(id)
})

function getThisIdData(id) {
    $.ajax({
        type: 'GET',
        url: '/api/getId',
        data: {
            id: id
        },
        success: function (data) {
            if (data.code == 200) {
                let htmlStr = template('str_template', data.data)
                $('.jumbotron').html(htmlStr)
            }
        }
    })
}