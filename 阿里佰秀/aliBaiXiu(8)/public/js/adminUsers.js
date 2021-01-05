$(function () {
  //#region 1.获取用户信息
  getUsersList();
  //#endregion

  //#region 2.添加用户
  $('#addBtn').on('click', function () {
    // console.log("11111");
    let formData = $('#usersForm').serialize();
    // console.log(formData);
    $.ajax({
      type: 'POST',
      url: "/admin/users/add",
      data: formData,
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          getUsersList();
        }
      }
    })
  })
  //#endregion

  //#region 3.删除用户
  $('tbody').on('click', '.btn-danger', function () {
    console.log($(this).data('id'));
    let id = $(this).data('id');
    $.ajax({
      type: "PUT",
      url: "/admin/users/delete",
      data: {
        id: id
      },
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          getUsersList();
        }
      }
    })
  })
  //#endregion


})


function getUsersList() {
  $.ajax({
    type: 'GET',
    url: '/admin/users/find',
    data: null,
    success: function (results) {
      // console.log(results);
      let usersStr = template("users_templ", results);
      $('tbody').html(usersStr);
    }
  })
}