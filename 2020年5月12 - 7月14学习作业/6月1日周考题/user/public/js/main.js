$(function () {
    // 刚进页面获取分页数据
    pagenation()

    // 给左右按钮添加点击事件 事件委托
    $('.pager').on('click', 'li', function () {
        if (!$(this).hasClass('disabled')) {
            let btnPageNum = $(this).data('pagenum')
            pagenation(btnPageNum)
        }
    })


    // 点击删除按钮 获取当前数据的id 发送给后端 事件委托添加事件
    $('tbody').on('click', '.btn-danger', function (e) {
        e.preventDefault();
        let btnId = $(this).data('id')
        deleteUser(btnId)
    })
})

function pagenation(pageNum, pageSize) {
    $.ajax({
        type: 'POST',
        url: '/api/list',
        data: {
            pageNum: pageNum || 1,
            pageSize: pageSize || 3,
        },
        success: function (result) {
            if (result.code == 200) {
                let listTempl = template('list_templ', {
                    list: result.data.data
                })
                $('tbody').html(listTempl)

                $('html').attr('data-pageNum', result.data.pageNum)

                let btnTempl = template('btn_templ', result.data)
                $('.pager').html(btnTempl)
            }
        }
    })
}


function deleteUser(id) {
    $.ajax({
        type: 'POST',
        url: '/api/delete',
        data: {
            id: id
        },
        beforeSend: () => {
            if (!confirm('您确定要删除这个用户吗?')) {
                return false
            }
        },
        success: function (result) {
            if (result.code == 200) {
                pagenation($('html').attr('data-pageNum'))
            }
        }
    })
}