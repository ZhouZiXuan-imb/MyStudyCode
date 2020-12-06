$(function () {
    // 点击添加用户按钮的时候 获取form表单中的数据 发送给后端
    $('.btn-primary').on('click', function () {
        let formdata = $('form').serialize();
        addUser(formdata)
    })
})


function addUser(formdata) {
    $.ajax({
        type: 'POST',
        url: '/api/add',
        data: formdata,
        success: function (result) {
            if (result.code == 200) {
                location.href = '/'
            }
        }
    })
}