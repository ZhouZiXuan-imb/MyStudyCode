$(function () {
    $('#addUsers-form').bootstrapValidator({
        // 默认的提示消息
        live: 'enabled',
        // 表单框里右侧的icon
        feedbackIcons: {
            // 合法的
            valid: 'glyphicon glyphicon-ok',
            // 不合法的
            invalid: 'glyphicon glyphicon-remove',
            // 验证中图标
            validating: 'glyphicon glyphicon-refresh'
        },
        submitButtons: '.btn-primary',
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
                        message: '只能为数字和字母,最短6位,最长30位'
                    },
                    callback: {
                        message: '密码错误'
                    }
                }
            },
            slug: {
                validators: {
                    notEmpty: {
                        message: '别名不能为空'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]{1,30}$/,
                        mesaage: '只能为数字和字母,最短1位,最长30位'
                    },
                    callback: {
                        message: '别名不符合规则'
                    }
                }
            },
            nickname: {
                validators: {
                    notEmpty: {
                        message: '昵称不能为空'
                    },
                    stringLength: {  //长度限制
                        min: 1,
                        max: 100,
                        message: '邮箱长度必须在1到100位之间'
                    },
                    callback: {
                        message: '昵称不符合规则'
                    }
                }
            },
        }
        // 表单验证成功事件
    }).on('success.form.bv', function (e) {//点击提交之后
        e.preventDefault();
        var $form = $(e.target);
        let formdata = $form.serialize()
        $.ajax({
            type: 'POST',
            url: '/admin/user/add',
            data: formdata,
            success: function (result) {
                if (result.code == 200 && result.message.affectedRows == 1) {
                    location.href = '/admin/users'
                }
            }
        })
    });


    $('.btn-danger').on('click', function () {
        var userId = $(this).data('id')

        deleteId(userId)
    })
})

function deleteId(id) {
    $.ajax({
        type: 'DELETE',
        url: '/admin/user/delete',
        data: {
            id: id
        },
        success: function (result) {
            if (result.code == 200) {
                location.href = '/admin/users'
            }
        }
    })
}