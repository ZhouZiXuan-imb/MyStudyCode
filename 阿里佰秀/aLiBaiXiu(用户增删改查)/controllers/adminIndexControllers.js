const { findCount } = require('../models/adminIndexModel')

module.exports.indexPage = (req, res) => {
    findCount(function (result) {
        // console.log(result.flat())
        result = result.flat();

        res.render('admin/index', {
            title: '后台管理系统-首页',
            pocount: result[0].pocount,
            dcount: result[1].dcount,
            ccount: result[2].ccount,
            cocount: result[3].cocount,
            stcount: result[4].stcount
        })
    })

}