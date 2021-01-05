$(function () {
    $('#login-form').bootstrapValidator({
        // 默认的提示消息
        live: 'enabled',
        message: '',
        // 表单框里右侧的icon
        feedbackIcons: {
            // 合法的
            valid: 'glyphicon glyphicon-ok',
            // 不合法的
            invalid: 'glyphicon glyphicon-remove',
            // 验证中图标
            validating: 'glyphicon glyphicon-refresh'
        },
        submitButtons: '#loginButton',
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    stringLength: {  //长度限制
                        min: 6,
                        max: 100,
                        message: '邮箱长度必须在6到100位之间'
                    },
                    emailAddress: {
                        message: '邮箱格式不正确'
                    },
                    callback: {
                        message: '邮箱不正确'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]{6,30}$/,
                        mesaage: '只能为数字和字母,最短6位,最长30位'
                    },
                    callback: {
                        message: '密码错误'
                    }
                }
            }
        }
    })
        // 表单验证成功事件
        .on('success.form.bv', function (e) {//点击提交之后、
            // 阻止浏览器默认提交事件
            e.preventDefault();
            // form表单 
            var $form = $(e.target);
            // console.log($form.serialize())
            $.ajax({
                type: 'POST',
                url: '/admin/login',
                data: $form.serialize(),
                success: (result) => {
                    if (result.code == 500) {
                        $form.data('bootstrapValidator').updateStatus('email', 'INVALID', 'callback')
                        $form.data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback')
                    }
                    if (result.code == 200) {
                        location.href = '/admin/'
                    }
                }
            })
        });
})