const { findCount } = require('../models/adminIndexModel');

//#region  显示后台管理系统首页
module.exports.indexPage = (req, res) => {
  findCount(function (results) {
    // console.log(results.flat());
    // 让数组扁平化(多维数组变成一维数组)
    results = results.flat();
    // console.log(results[0].pcount);
    res.render('./admin/index', {
      title: "后台管理系统-首页",
      pcount: results[0].pcount,
      dcount: results[1].dcount,
      cacount: results[2].cacount,
      cocount: results[3].cocount,
      hcount: results[4].hcount
    });
  })
}
//#endregion