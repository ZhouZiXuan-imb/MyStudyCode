$(document).ready(function () {
  // TODO:  功能一: 显示已经存在的留言
  // 1.创建一个函数，当DOM加载完毕 调用 查找留言函数
  findGuest();


  // TODO:  功能二: 添加留言
  $('#btn_send').on('click', function () {
    let data = $('#form').serialize()
    console.log(data)
    setGuest(data)
  })
})

// 查找留言
function findGuest() {
  $.ajax({
    type: 'GET',
    url: '/findGuest',
    data: null,
    success: function (data) {
      console.log(data)
      let liContent = '';
      for (let i = 0; i < data.length; i++) {
        liContent += `
        <li class="media">
          <img class="mr-3 " src="./image/avatar.png" alt="${data[i].name}">
          <div class="media-body">
            <h4>${data[i].name}</h4>
            <p>${data[i].content}</p>
          </div>
        </li>
        `
      }
      $('#messages').html(liContent)
    }
  })
}

// 添加留言
function setGuest(newData) {

  $.ajax({
    type: 'POST',
    url: '/findGuest',
    data: newData,
    success: function (data) {
      if (data.code == 200) {
        findGuest()
        console.log(data)
      }
    }
  })
}