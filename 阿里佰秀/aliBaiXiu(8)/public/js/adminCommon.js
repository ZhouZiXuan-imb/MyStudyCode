// 公共的代码
$(function () {
  //#region  公共功能: 退出登录
  $('#logoutButton').click(function () {
    logout();
  })
  //#endregion
  //#region  公共功能: 控制侧边栏显示和隐藏
  $('#navbarButton').click(function () {
    $('.main, .aside').toggleClass("toggle");
  })
  //#endregion
})

//#region 退出登录方法
function logout() {
  $.ajax({
    type: 'GET',
    url: '/admin/logout',
    data: null,
    success: function (result) {
      if (result.code == 200) {
        location.href = "/admin/login"
      }
    }
  })
}
//#endregion