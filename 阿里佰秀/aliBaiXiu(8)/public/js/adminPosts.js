$(function () {

  //#region 0.刚打开页面,进行数据的渲染
  getDataByCondition({});
  //#endregion
  //#region 1.筛选显示数据
  $('#filterBtn').on('click', function (e) {
    e.preventDefault();
    // 为了以后点击分页渲染数据的时候 获取查询条件
    let category = window.category = $('select[name="category"]').val();
    let status = window.status = $('select[name="status"]').val();
    // 表单序列化
    // console.log($("#filterForm").serialize());
    // 通过条件去查询数据
    getDataByCondition({
      category: category,
      status: status
    })
  })
  //#endregion
  //#region 2.分页显示数据
  $('.pagination').on('click', 'a', function () {
    // 筛选条件
    let category = window.category;
    let status = window.status;
    // console.log(category, status);
    // 分页数据
    let pagenum = $(this).data('page');
    // console.log(pagenum);
    let pagesize = 5;
    $.ajax({
      type: 'GET',
      url: "/admin/posts/findsByPaging",
      data: {
        category,
        status,
        pagenum,
        pagesize
      },
      success: function (results) {
        // console.log(results);
        // 当点击分页的时候，重新渲染数据
        let listStr = template('list_templ', results);
        // console.log(listStr);
        $('tbody').html(listStr);
        // 渲染分页
        let pagingStr = template('paging_templ', results);
        // console.log(pagingStr);
        $('ul.pagination').html(pagingStr);
        // 当分页渲染完成 就应该把页码存起来
        $('html').attr('data-pagenum', results.pagenum);
      }
    })
  })
  //#endregion
  //#region 3.删除数据(把文章的状态改为回收站)
  $('tbody').on('click', '.postsDelete', function () {
    let postId = $(this).attr('data-id');
    // console.log(postId);
    $.ajax({
      // 增(post)删(delete)改(put)查(get)
      type: 'PUT',
      url: '/admin/posts/delete',
      data: {
        id: postId
      },
      success: function (results) {
        // console.log(results);
        if (results.code == 200) {
          let category = window.category;
          let status = window.status;
          let pagenum = $('html').attr('data-pagenum');
          getDataByCondition({ category, status, pagenum })
        }
      }
    })
  })
  //#endregion

})

/**
 * 
 * @param {Object} option 获取数据的参数对象
 */
function getDataByCondition(option) {
  let category = option.category || null;
  let status = option.status || null;
  let pagenum = option.pagenum || 1;
  let pagesize = option.pagesize || 5;
  $.ajax({
    type: 'GET',
    url: "/admin/posts/findsByFilter",
    data: {
      category: category,
      status: status,
      pagenum: pagenum,
      pagesize: pagesize
    },
    success: function (results) {
      // console.log(results)
      if (results.code == 200) {
        // 渲染列表
        let listStr = template('list_templ', results);
        // console.log(listStr);
        $('tbody').html(listStr);
        // 渲染分页
        let pagingStr = template('paging_templ', results);
        // console.log(pagingStr);
        $('ul.pagination').html(pagingStr);
        // 当分页渲染完成 就应该把页码存起来
        $('html').attr('data-pagenum', results.pagenum);
      }
    }
  })
}
