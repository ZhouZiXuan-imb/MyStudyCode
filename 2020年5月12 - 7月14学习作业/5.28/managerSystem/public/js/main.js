$(function () {
  // 进入页面发起ajax请求获取数据库中的所有数据  显示到页面上
  // getAll()
  showPage()
  // 给左右按钮添加点击事件 每次点击重新渲染页面
  // 进入页面发起ajax请求获取数据库中的前五条数据  显示到页面上
  $('.pager').on('click', 'li', function () {
    if (!$(this).hasClass('disabled')) {
      let pagenation = $(this).data('pagenum')
      showPage(pagenation)
    }
  })


  // 给删除按钮添加事件委托
  // 点击删除按钮之后删除当前行的数据
  $('tbody').on('click', '.btn-danger', function () {
    // 点击之后获取到点击的这个按钮的id
    let btnId = $(this).attr('id')
    // 发起ajax请求 把这个id传给后台
    deleteData(btnId)
  })
})


// function getAll() {
//   $.ajax({
//     type: 'GET',
//     url: '/api/list',
//     data: {
//       cb: function () { }
//     },
//     success: function (result) {
//       if (result.code == 200) {
//         let htmlStr = template('str_templ', {
//           list: result.data,
//         })
//         $('tbody').html(htmlStr)
//       }
//     }
//   })
// }


function showPage(pageNum, pageSize) {
  $.ajax({
    type: 'GET',
    url: '/api/list',
    data: {
      pageNum: pageNum || 1,
      pageSize: pageSize || 5,
    },
    success: function (result) {
      if (result.code == 200) {
        let htmlStr = template('pagenation_template', {
          pageNum: result.data.pageNum,
          pageSize: result.data.pageSize,
          count: Math.ceil(result.data.count / result.data.pageSize)
        })
        $('.pager').html(htmlStr)
        $('html').attr('data-pagenum', result.data.pageNum)
        let listTemplate = template('str_templ', {
          list: result.data.data
        })
        $('tbody').html(listTemplate)
      }
    }
  })
}


function deleteData(id) {
  $.ajax({
    type: 'POST',
    url: '/api/delete',
    data: {
      id: id
    },
    beforeSend: function () {
      if (!confirm('您确定要删除数据吗?')) {
        return false
      }
      // console.log(1111)
    },
    success: function (result) {
      if (result.code == 200) {
        showPage($('html').data('pagenum'))
      }
    }
  })
}