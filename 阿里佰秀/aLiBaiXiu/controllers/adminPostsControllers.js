const { postsByPaging } = require('../models/adminPostsModel')

/* module.exports.postPage = (req, res) => {
    let pagenum = 1;
    let pagesize = 5;
    postsByPaging(0, 5, function (result) {
        res.render('admin/posts', {
            title: '后台管理系统-文章',
            data: result[0],
            total: result[1][0].pcount,
            pagenum: pagenum,
            pagesize: pagesize
        })
    })
} */

// 3.1 文章页面路由
module.exports.postPage = (req, res) => {
    let pagenum = 1;
    let pagesize = 5;
    // let offset = (pagenum - 1) * pagesize;
    // let size = pagesize
    postsByPaging({
        pagenum,
        pagesize,
        callback: function (result) {
            res.render('admin/posts', {
                title: '后台管理系统-文章',
                data: result[2],
                pagenum: pagenum,
                pagecount: Math.ceil(parseInt(result[0][0].pcount) / pagesize),
                category: result[1]
            })
        }
    })
}
// 3.2 文章添加页面路由
module.exports.postAdd = (req, res) => {
    res.render('admin/post-add', { title: '后台管理系统-写文章' })
}
// 3.3 文章页面筛选路由
module.exports.postsFilter = (req, res) => {
    let { category, status, pagenum, pagesize } = req.query;

    postsByPaging({
        status,
        category,
        offset: (pagenum - 1) * pagesize,
        size: pagesize,
        callback(result) {
            res.send({
                code: 200,
                message: '数据查询成功',
                data: result[2],
                pagenum: pagenum,
                pagecount: Math.ceil(parseInt(result[0][0].pcount) / pagesize)
            })
        }
    })
}
// 3.3 文章筛选分页路由
// module.exports.postsPagenum = (req, res) => {
//     let { status, category, pagenum, pagesize } = req.query;
//     postsByPaging({
//         status,
//         category,
//         offset: (pagenum - 1) * pagesize,
//         size: pagesize,
//         callback: function (result) {
//             res.send({
//                 code: 200,
//                 data: result[2],
//                 pagenum: pagenum,
//                 pagecount: Math.ceil(parseInt(result[0][0].pcount) / pagesize)
//             })
//         }
//     })
// }
