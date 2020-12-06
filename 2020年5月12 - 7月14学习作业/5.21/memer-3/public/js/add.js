$(function () {
    // 预览图片 选中一个图片之后 让img的src改成选中的这个图片的sec
    $('#input_avatar').on('change', function () {
        let imgSrc = URL.createObjectURL($(this)[0].files[0])
        $('#avatar').attr('src', imgSrc)
    })

    // 点击了Save按钮 把表单中的数据发送给后台
    // 后台把这条数据添加到数据库中
    $('#btn_add').on('click', function (e) {
        e.preventDefault();
        if ($('#input_name').val().trim().length == 0 || $('#input_bio').val().trim().length == 0) {
            alert('添加失败,请查看内容是否全部填写完毕')
            return false
        }

        // 实例化FormData()对象 FormData()这个对象用来序列化参数
        let formdata = new FormData()
        // 给formdata这个对象中添加参数  key=value&key=value
        formdata.append('name', $('#input_name').val())
        formdata.append('bio', $('#input_bio').val())
        formdata.append('avatar', $('#input_avatar')[0].files[0])
        // 发起ajax请求
        postUse(formdata)
    })
})

function postUse(formdata) {
    $.ajax({
        type: 'POST',
        url: '/api/postData',
        processData: false,
        contentType: false,
        data: formdata,
        success: (data) => {
            if (data.code == 200) {
                location.href = '/'
            }
        },
    })
}