$(function () {
    // 当点击了添加用户的时候  把表单中的内容发送给后端
    $('.btn-primary').on('click', function () {
        let formdata = $('form').serialize()
        // 发起ajax请求  把数据传送给后端
        postDate(formdata)
    })
})


function postDate(formdata) {
    $.ajax({
        type: "POST",
        url: '/api/add',
        data: formdata,
        success: function (data) {
            if (data.code == 200) {
                location.href = '/'
            }
        }
    })
}