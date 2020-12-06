$(function () {


    // 刚进入页面需要进行分页获取数据  发起ajax请求
    pagenation()


    // 给左右按钮添加点击事件
    $('.pager').on('click', 'li', function () {
        if (!$(this).hasClass('disabled')) {
            let pageNum = $(this).data('pagenum')
            pagenation(pageNum)
        }
    })


    // 点击删除按钮 获取当前这条数据自定义属性id中存储的id 发送给后端
    $('tbody').on('click', '.btn-danger', function () {
        let deleteId = $(this).data('id')
        DeleteData(deleteId)
    })


    // 点击了修改按钮 模态框显示
    $('tbody').on('click', '.btn-success', function () {
        $('.modal').modal('show')
        let btnId = $(this).data('id')
        findOne(btnId)
    })


    // 模态框中点击了添加按钮 把form表单中的数据和当前数据信息的id发送给后端
    $('.btn-primary').on('click', function () {
        let formdata = $('.modal-body form').serialize();
        updateOne(formdata)
    })
})

function pagenation(pageNum, pageSize) {
    $.ajax({
        type: 'POST',
        url: '/api/list',
        data: {
            pageNum: pageNum || 1,
            pageSize: pageSize || 5,
        },
        success: (result) => {
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


function DeleteData(id) {
    $.ajax({
        type: 'POST',
        url: '/api/delete',
        data: {
            id: id
        },
        success: function (data) {
            if (data.code == 200) {
                let PageNum = $('html').attr('data-pageNum')
                pagenation(PageNum)
            }
        }
    })
}


function findOne(id) {
    $.ajax({
        type: 'POST',
        url: '/api/findOne',
        data: {
            id: id
        },
        success: function (result) {
            if (result.code == 200) {
                $('input[name="username"]').val(result.data.username)
                $('input[name="password"]').val(result.data.password)
                $('input[name="age"]').val(result.data.age)
                $('input[name="email"]').val(result.data.email)
                $('input[name="hobbies"]').val(result.data.hobbies)
                $('input[name="userid"]').val(result.data._id)
            }
        }
    })
}

function updateOne(updateData) {
    $.ajax({
        type: 'POST',
        url: '/api/update',
        data: updateData,
        success: function (result) {
            if (result.code == 200) {
                $('.modal').modal('hide')
                pagenation($('html').data('pagenum'))
            }
        }
    })
}