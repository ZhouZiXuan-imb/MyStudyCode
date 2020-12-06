$(function () {
    // 刚进页面的时候   要把所有的数据全都加载出来
    getAll()

    // 给删除按钮添加事件  点击了删除按钮之后  发送ajax请求 把这个id发送给后台
    $('#members').on('click', '.deleteBtn', function (e) {
        // 阻止浏览器默认行为
        e.preventDefault();
        let btnId = $(this).data('id')
        deleteData(btnId)
    })
    // 后台再去数据库中对比  有没有相同id的数据  如果有  就使用splice方法删除这条数据
})




function getAll() {
    $.ajax({
        type: 'GET',
        url: '/api/getAll',
        data: null,
        success: (data) => {
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
            id: id,
        },
        success: (data) => {
            if (data.code == 200) {
                getAll()
            }
        }
    })
}