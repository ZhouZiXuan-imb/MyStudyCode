const { postsByPaging } = require('../models/adminPostsPage')

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


module.exports.postPage = (req, res) => {
    let { status, category } = req.query;
    let pagenum = 1;
    let pagesize = 5;
    let offset = (pagenum - 1) * pagesize;
    let size = pagesize
    postsByPaging({
        offset,
        size,
        status,
        category,
        callback: function (result) {
            console.log(Math.ceil(parseInt(result[0][0].pcount) / pagesize))
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

module.exports.postAdd = (req, res) => {
    res.render('admin/post-add', { title: '后台管理系统-写文章' })
}

module.exports.postsFilter = (req, res) => {
    let { status, category, pagenum, pagesize } = req.query;

    postsByPaging({
        status,
        category,
        offset: (pagenum - 1) * pagesize,
        size: pagesize,
        callback: function (result) {
            res.send({
                code: 200,
                data: result[2],
                pagenum: pagenum,
                pagecount: Math.ceil(parseInt(result[0][0].pcount) / pagesize)
            })
        }
    })
}

module.exports.postsPagenum = (req, res) => {
    let { status, category, pagenum, pagesize } = req.query;
    postsByPaging({
        status,
        category,
        offset: (pagenum - 1) * pagesize,
        size: pagesize,
        callback: function (result) {
            res.send({
                code: 200,
                data: result[2],
                pagenum: pagenum,
                pagecount: Math.ceil(parseInt(result[0][0].pcount) / pagesize)
            })
        }
    })
}
