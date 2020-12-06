$(function () {
    // 1. 静态页面已经给定，需要自己在前台发请求，后台写接口进行处理

    // 2. 实现留言板的渲染功能，使用art - template模板引擎

    // 3. 可以新增留言，如果表单中的用户名或者是留言内容有一项为空，那么就在浏览器中弹出, "请查看姓名或留言的表单不能为空", 并且不能添加到json文件里面

    // 4. 添加成功之后页面中就会将新添加的数据显示出来
    getData()
    $('#btn_send').on('click', function () {
        if ($('#txt_name').val().trim().length == 0 || $('#txt_content').val().trim().length == 0) {
            alert('请查看姓名或留言的表单不能为空')
        } else {
            let formdata = $('#form').serialize()
            addData(formdata)
        }
        $('#txt_name').val('')
        $('#txt_content').val('')
    })
})


function addData(newdata) {
    $.ajax({
        type: 'POST',
        url: '/postData',
        data: newdata,
        success: function () {
            getData()
        }
    })
}


function getData() {
    $.ajax({
        type: 'GET',
        url: '/getData',
        data: null,
        success: function (data) {
            // console.log(data)
            let htmlStr = template('str_templ', {
                list: data
            })
            $('.list-unstyled').html(htmlStr)
        }
    })
}