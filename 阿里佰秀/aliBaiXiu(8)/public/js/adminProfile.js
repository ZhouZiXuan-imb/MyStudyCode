$(function () {
  //#region 1.更新用户信息
  $('#editBtn').on('click', function () {
    // console.log(11111);
    let formData = new FormData($('#editForm')[0]);
    // console.log(formData);
    $.ajax({
      type: 'PUT',
      url: '/admin/users/edit',
      contentType: false,
      processData: false,
      data: formData,
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          location.href = "/admin/users"
        }
      }
    })

  })
  //#endregion
})