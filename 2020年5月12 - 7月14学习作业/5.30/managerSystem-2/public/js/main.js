$(function () {
    // 刚进入页面把分页数据显示在页面上
    pagenation()


    // 给上下页按钮添加点击事件
    $('.pager').on('click', 'li', function () {
        if (!$(this).hasClass('disabled')) {
            let thispageNum = $(this).data('pagenum')
            pagenation(thispageNum)
        }
    })


    // 给删除按钮添加点击事件 
    // 点击了删除事件 获取按钮的自定义数据存储的id
    // 把这个id发送给后端
    $('tbody').on('click', '.btn-danger', function () {
        let deleteId = $(this).data('id')
        deleteData(deleteId)
    })
})


function pagenation(pageNum, pageSize) {
    $.ajax({
        type: 'GET',
        url: '/api/list',
        data: {
            pageNum: pageNum || 1,
            pageSize: pageSize || 5,
        },
        success: function (result) {
            if (result.code == 200) {
                let btnStr = template('btn_templ', result.data)
                $('.pager').html(btnStr)


                let listStr = template('list_templ', {
                    list: result.data.data
                })
                $('tbody').html(listStr)


                // 给html添加一个自定义属性来记录当前的页码
                $('html').attr('data-pageum', result.data.pageNum)
            }
        }
    })
}


function deleteData(deleteId) {
    $.ajax({
        type: 'POST',
        url: '/api/delete',
        data: {
            id: deleteId
        },
        success: function (result) {
            if (result.code == 200) {
                let pageNum = $('html').data('pagenum')
                pagenation(parseInt(pageNum))
            }
        }
    })
}