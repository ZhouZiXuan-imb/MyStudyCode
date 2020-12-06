$(function () {
    // 查看当前页面的这个id  发送给后台
    // 后台再去数据库中做对比看看有没有id一样的这一条数据 
    // 如果有 就返回给前端 再渲染到页面中
    // 实例化URLSearchParams对象
    let id = new URLSearchParams(location.search).get('id')

    getOneData(id)
})

function getOneData(id) {
    $.ajax({
        type: 'GET',
        url: '/api/getOneData',
        data: {
            id: id
        },
        success: (data) => {
            // console.log(data)
            if (data.code == 200) {
                let htmlStr = template('detail_templ', data.data)
                $('.jumbotron').html(htmlStr)
            }

        }

    })
}