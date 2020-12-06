$(function () {
    // 刚进页面需要把所有内容都加载出来
    getAll()

    // 点击delete按钮 删除对应的内容
    $('#members').on('click', '.delete_btn', function (e) {
        e.preventDefault();

        let btnId = $(this).data('id')
        deleteData(btnId)
    })
})


function getAll() {
    $.ajax({
        type: 'GET',
        url: '/api/getAll',
        data: null,
        success: function (data) {
            let htmlStr = template('str_templ', {
                list: data.data
            })
            $('#members').html(htmlStr)
        }
    })
}


function deleteData(id) {
    $.ajax({
        type: 'GET',
        url: '/app/delete',
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