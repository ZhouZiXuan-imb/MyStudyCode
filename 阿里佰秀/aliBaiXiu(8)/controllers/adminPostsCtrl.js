
// 引入模型
const { findByPaging, deleteOne, findOne, updateOne, findCategoryAndStatus, insertOne, insertCate, deleteCate } = require('../models/adminPostsModel');
// 引入日期格式化包
const moment = require('moment');

//#region 1.显示文章管理页面
module.exports.postsPage = (req, res) => {
  findByPaging({
    callback: function (results) {
      // console.log(results);
      res.render('./admin/posts', {
        title: "后台管理系统-文章",
        category: results[0]
      });
    }
  })
}
//#endregion

//#region 2.筛选分页查询所有文章
module.exports.postsByFilter = (req, res) => {
  let { pagenum, pagesize, category, status } = req.query;
  // let pagenum = 1;
  // let pagesize = 5;
  findByPaging({
    category,
    status,
    offset: (pagenum - 1) * pagesize,
    size: pagesize,
    callback(results) {
      // console.log(results);
      res.send({
        code: 200,
        message: "查询数据成功",
        // 分页数据
        pagenum: parseInt(pagenum),
        pagecount: Math.ceil(parseInt(results[1][0].total) / pagesize),
        // 文章数据
        data: results[2]
      });
    }
  })
}
//#endregion

//#region 3.显示文章添加页面
module.exports.postsAddPage = (req, res) => {
  findCategoryAndStatus(function (results) {
    // console.log(results);
    res.render('./admin/post-add', {
      title: "后台管理系统-文章添加",
      category: results[0],
      statusArr: results[1]
    });
  })

}
//#endregion

//#region 4.通过id删除文章(就是在修改文章的status属性)
module.exports.postsDeleteById = (req, res) => {
  // console.log(req.body);
  let { id } = req.body;
  // let id = 1;
  deleteOne(id, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "文章删除成功"
      })
    } else {
      res.send({
        code: 500,
        message: "文章删除失败"
      })
    }
  });

}
//#endregion

//#region 5.显示文章编辑页面
module.exports.postsEditPage = (req, res) => {
  // 获取文章id
  // console.log(req.params);
  let { id } = req.params;
  findOne(parseInt(id), function (results) {
    // console.log(results[2].title);
    res.render('./admin/post-edit', {
      title: "后台管理系统-文章编辑",
      category: results[0],
      statusArr: results[1],
      data: results[2]
    });
  })
}
//#endregion

//#region 6.编辑文章
module.exports.postsEdit = (req, res) => {
  // console.log(req.file);
  // console.log(req.body);
  // console.log(req.session);
  let updateObj = {
    id: parseInt(req.body.id),
    slug: req.body.slug,
    title: req.body.title,
    feature: req.file ? `/uploads/${req.file.filename}` : null,
    created: req.body.created,
    content: req.body.content,
    status: req.body.status,
    // user_id: req.session.user.id, // user_id是作者id 修改文章不需要更改作者id
    category: req.body.category
  }
  // console.log(updateData);
  updateOne(updateObj, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: 200,
        message: "文章更新成功"
      });
    }
  })

}
//#endregion

//#region 7.添加文章
module.exports.postsAdd = (req, res) => {
  // console.log(req.file);
  // console.log(req.body);


  /*
  {
  title: 'asdfsda f',
  content: 'asdfasdfasdf asdsda',
  slug: '',
  category: '1',
  created: '',
  status: 'drafted'
}
  */
  let { title, content, slug, category, created, status } = req.body;
  let feature = req.file ? `/uploads/${req.file.filename}` : `/uploads/default.png`;
  if (!slug) {
    slug = new Date().valueOf();
  }
  if (!created) {
    created = moment().format("YYYY-MM-DD HH:mm:ss")
  }
  // console.log(created);
  let postsData = {
    slug: slug,
    title: title,
    feature: feature,
    created: created,
    content: content,
    status: status,
    user_id: req.session.user.id, // user_id是作者id 修改文章不需要更改作者id
    category: category
  }

  insertOne(postsData, function (results) {
    // console.log(results)
    if (results) {
      res.send({
        code: 200,
        message: "文章更新成功"
      });
    }
  })
}
//#endregion

//#region 8.显示分类页面
module.exports.postsCategoryPage = (req, res) => {
  res.render('./admin/categories', { title: "后台管理系统-文章分类" });
}
//#endregion

//#region 9.获取分类数据
module.exports.postsFindCategory = (req, res) => {
  findCategoryAndStatus(function (results) {
    res.send({
      code: "200",
      message: "获取分类数据成功",
      category: results[0]
    });
  })
}
//#endregion

//#region 10.添加分类
module.exports.postsAddCategory = (req, res) => {
  let { slug, name } = req.body;
  // console.log(slug, name);
  insertCate(slug, name, function (results) {
    // console.log(results);
    if (results.affectedRows == 1) {
      res.send({
        code: "200",
        message: "分类添加成功",
      });
    }
  })
}

//#region 11.删除分类
module.exports.postsDeleteCategory = (req, res) => {
  // 获取前端传来的id
  let { id } = req.body;

  deleteCate(id, function (results) {
    res.send({
      code: 200,
      message: "分类删除成功"
    })
  })

}
//#endregion