$(function () {
    // 预览图片
    $('#input_avatar').on('change', function () {
        let imgUrl = URL.createObjectURL($(this)[0].files[0])
        $('#avatar').attr('src', imgUrl)
    })

    // 当点击了save按钮之后
    // 把前端获取到的数据使用ajax传送给后台
    $('#btn_add').on('click', function (e) {
        e.preventDefault()
        // 1. 实例化formdata对象
        let formdata = new FormData()

        formdata.append('name', $('#input_name').val())
        formdata.append('bio', $('#input_bio').val())
        formdata.append('avatar', $('#input_avatar')[0].files[0])

        // 发起ajax请求
        $.ajax({
            type: 'POST',
            url: '/app/add',
            data: formdata,
            processData: false,
            contentType: false,
            success: function (result) {
                if (result.code == 200) {
                    location.href = '/'
                }
            },
            error: function () {
                alert('文件传输错误')
            }
        })
        return false;
    })
})