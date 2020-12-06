$(function () {
    // 刚进页面  需要把所有数据都加载出来  
    // 需要从后台获取数据库中的所有数据
    // 1. 发起ajax请求
    getAll()


    // 点击了数据的删除按钮 就发起ajax请求
    $('#members').on('click', '.delete_btn', function (e) {
        e.preventDefault();
        let ids = $(this).data('id')
        deleteData(ids)
    })
})

function getAll() {
    $.ajax({
        type: 'GET',
        url: '/api/getAll',
        data: null,
        success: function (data) {
            if (data.code == 200) {
                let htmlStr = template('str_templ', {
                    list: data.data
                })
                $('#members').html(htmlStr)
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
        success: function (data) {
            if (data.code == 200) {
                getAll()
            }
        }
    })
}