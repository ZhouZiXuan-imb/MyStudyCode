$(function () {
    // // 1. 发起ajax请求
    // getAll()
    pageSize(0, 6)
    // 2. 点击了某一条数据的删除按钮之后 把这条数据从数据库中删除
    // 需要用事件委托来做 因为我们还要动态添加数据
    $('#members').on('click', '.delete_btn', function (e) {
        // 清除浏览器默认行为
        e.preventDefault();
        // 获取点击的这条数据的id
        let id = $(this).data('id')
        deleteData(id)
    })





    $(document).on('scroll', function () {
        let docHeight = $(document).height();
        let winHeight = $(window).height();
        let scrollTop = $(document).scrollTop();
        if (docHeight - winHeight - scrollTop < 50) {
            let last = $('html').attr('last')
            pageSize(last, 6)
        }
    })
})

// function getAll() {
//     $.ajax({
//         type: 'GET',
//         url: '/api/getAll',
//         data: null,
//         success: function (data) {
//             let htmlStr = template('str_templ', {
//                 list: data.data
//             })
//             $('#members').html(htmlStr)
//         }
//     })
// }


function pageSize(last, limit) {
    $.ajax({
        type: 'GET',
        url: '/api/pagetion',
        data: {
            last: last,
            limit: limit,
        },
        success: function (result) {

            let last = result.data[result.data.length - 1].id
            $('html').attr('last', last)
            if (result.code == 200) {
                let htmlStr = template('str_templ', {
                    list: result.data
                })
                $('#members').append(htmlStr)
            }
        }
    })
}


function deleteData(id) {
    $.ajax({
        type: 'GET',
        url: '/api/deleteData',
        data: {
            id: id
        },
        success: (data) => {
            if (data.code == 200) {
                getAll()
            }
        }
    })
}
