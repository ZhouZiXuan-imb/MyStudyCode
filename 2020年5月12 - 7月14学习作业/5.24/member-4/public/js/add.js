$(function () {
    // 当选择了一个文件之后 预览图片
    // 1. 给按钮添加change事件(只要选中图片就触发这个事件)
    $('#input_avatar').on('change', function () {
        // 1.1 实例化对象
        let imgSrc = URL.createObjectURL($('#input_avatar')[0].files[0])
        // 1.2 把这个获取到的图片添加到预览盒子中
        $('#avatar').attr('src', imgSrc)
    })
    // 2. 当点击了Save按钮之后 把form表单中的数据发送到后台
    // 2.1 给Save按钮添加点击事件
    $('#btn_add').on('click', function (e) {
        // 2.1.1 清除浏览器默认样式
        e.preventDefault();
        // 2.1.2 实例化FormData对象
        let formdata = new FormData()
        // 2.1.3 使用append()方法给formdata中添加属性
        formdata.append('name', $('#input_name').val())
        formdata.append('bio', $('#input_bio').val())
        formdata.append('avatar', $('#input_avatar')[0].files[0])
        // 2.1.4 发起ajax请求
        postData(formdata)
    })
})


function postData(formdata) {
    $.ajax({
        type: 'post',
        url: '/api/postData',
        processData: false,
        contentType: false,
        data: formdata,
        success: (data) => {
            if (data.code == 200) {
                location.href = '/'
            }
        }
    })
}