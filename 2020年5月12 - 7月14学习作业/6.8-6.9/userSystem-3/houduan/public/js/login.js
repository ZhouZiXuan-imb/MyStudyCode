$(function () {
    $("#login_form").validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
            }

        },
        messages: {
            password: {
                required: "密码必须填写",
            },
            email: {
                required: "邮箱必须填写",
                email: "邮箱格式错误"
            }
        },
        // 提交处理
        submitHandler: function (form) {
            let formdata = $(form).serialize();
            console.log(formdata)
            $.ajax({
                type: 'POST',
                url: '/api/login',
                data: formdata,
                success: function (result) {
                    if (result.code == 200) {
                        location.href = '/user'
                    }
                },
                error: function (err) {
                    if (err.responseJSON.code == 400) {
                        alert(err.responseJSON.msg)
                    }
                }
            })
        }
    });
})