// 正则表达式
let regph = /^1[3|4|5|7|8]\d{9}$/ // 手机
let regpwd = /^[a-zA-Z0-9_-]{6,16}$/ //密码

// 获取元素
let phone = document.querySelector('#phone')
let pwd = document.querySelector('#pwd')
let surepwd = document.querySelector('#sure')

regexp(phone, regph)
regexp(pwd, regpwd)

// 封装函数
function regexp(ele, reg) {
    ele.onblur = function () {
        if (reg.test(ele.value)) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = `<i class="success_icon"></i> 恭喜您输入正确`
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = `<i class="error_icon"></i> 格式不正确，请从新输入`
        }
    }

}

surepwd.onblur = function () {
    if (this.value == pwd.value) {
        this.nextElementSibling.className = 'success'
        this.nextElementSibling.innerHTML = `<i class="success_icon"></i> 恭喜您输入正确`
    } else {
        this.nextElementSibling.className = 'error'
        this.nextElementSibling.innerHTML = `<i class="error_icon"></i> 两次输入的密码不一样请重新输入`
    }
}