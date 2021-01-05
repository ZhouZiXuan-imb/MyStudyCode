$(function () {
    //#region  点击筛选之后  发起ajax请求  把选中的分类和状态发送给后端
    $('#filterButton').on('click', function (e) {
        e.preventDefault();
        let category = window.category = $('select[name="category"]').val()
        let status = window.status = $('select[name="status"]').val()
        $.ajax({
            type: 'GET',
            url: '/admin/posts/filter',
            data: {
                category,
                status,
                pagenum: 1,
                pagesize: 5,
            },
            success: function (result) {
                if (result.code == 200) {
                    let listStr = template('list_templ', {
                        data: result.data
                    })
                    $('tbody').html(listStr)
                }
            }
        })
    })
    //#endregion


    //#region  点击页码  获取当前点击的页码的数值  发送给后端  获取到对应页码的数据
    $('.pagination').on('click', 'a', function () {
        let pageNum = $(this).data('page')
        filterPage(pageNum)
    })
    //#endregion
})

function filterPage(pageNum) {
    let category = window.category;
    let status = window.status;
    let pageSize = 5;
    $.ajax({
        type: 'GET',
        url: '/admin/posts/pagenum',
        data: {
            category,
            status,
            pageNum,
            pageSize
        },
        success: function (result) {
            console.log(result)
        }
    })
}