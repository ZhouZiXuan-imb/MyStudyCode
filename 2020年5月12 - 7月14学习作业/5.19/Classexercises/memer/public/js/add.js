$(function () {
    // 当点击了save按钮  把表单中的数据和头像发送到后台

    $('#btn_add').on('click', function (e) {
        // 阻止浏览器默认行为
        e.preventDefault()
        // 1. 实例化formData对象
        let formData = new FormData()
        // 2. 使用append()方法给formData对象中添加name属性值和值
        formData.append('name', $('#input_name').val())
        formData.append('bio', $('#input_bio').val())
        formData.append('avatar', $('#input_avatar')[0].files[0])


        // 3. 发起ajax请求
        postFormData(formData)
    })
})


function postFormData(formData) {

    $.ajax({
        type: 'POST',
        url: '/api/postFormData',
        data: formData,
        processData: false,
        contentType: false,
        success: (data) => {
            if (data.code == 200) {
                location.href = '/'
            }
        }
    })
}