$(function () {
  // bootstrapvalidator文档: http://www.aijquery.cn/Html/bootstrapValidator/54.html
  // 具体的属性文档: https://www.cnblogs.com/hwaggLee/p/6565604.html
  // form标签的id
  $("#loginForm").bootstrapValidator({
    // 什么时候校验
    live: 'enabled',
    // 反馈图标
    feedbackIcons: {
      // 合法的
      valid: 'glyphicon glyphicon-ok',
      // 不合法的
      invalid: 'glyphicon glyphicon-remove',
      // 校验中
      validating: 'glyphicon glyphicon-refresh'
    },
    // 提交按钮
    submitButtons: "#loginButton",
    fields: {
      email: {
        // 关于email的校验器
        validators: {
          // 不能为空
          notEmpty: {
            message: '用户名不能为空'
          },
          // email的长度
          stringLength: {
            min: "6",
            max: "100",
            message: "最短为4,最长为100"
          },
          // 邮箱要符合
          emailAddress: {
            message: "邮箱格式不正确"
          },
          // 当服务器验证过之后再来重新校验
          callback: {
            message: "邮箱或密码错误"
          }
        }
      },
      password: {
        // 关于password的校验器
        validators: {
          notEmpty: {
            message: '密码不能为空！'
          },
          regexp: {
            regexp: /^[a-zA-Z0-9_]{6,30}$/,
            message: '只能为字母数字，最短6，最长30！'
          },
          callback: {
            message: "邮箱或密码错误"
          }
        }
      }
    }
  })
    // 当校验成功后 发起ajax请求
    .on('success.form.bv', function (e) {
      // 为了阻止默认提交      
      e.preventDefault();
      // 就是 form表单
      var $form = $(e.target);
      // console.log($form.serialize());
      $.ajax({
        type: 'POST',
        url: '/admin/login',
        data: $form.serialize(),
        success: function (result) {
          // console.log(result);
          // 回显错误信息
          if (result.code == 500) {
            $form.data("bootstrapValidator").updateStatus("email", "INVALID", 'callback');
            $form.data("bootstrapValidator").updateStatus("password", "INVALID", 'callback');
          }

          if (result.code == 200) {
            location.href = '/admin/'
          }
        }
      })
    });
});



