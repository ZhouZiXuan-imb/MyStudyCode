// 1.引入包
const express = require('express');
const path = require('path');
const multer = require('multer')

// 2.设置包
// 2.1 创建后台服务
const app = express();
// 2.2 设置静态资源目录
app.use(express.static(path.join(__dirname, 'public')))
// 2.3 设置文件上传的路径
let uploader = multer({
  storage: multer.diskStorage({
    // 确定上传的文件在哪里 cb: callback
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'upload'))
    },
    // 确定你上传之后的文件的名字
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
})
// 3.处理请求并响应
app.post('/profile', uploader.single('avatar'), function (req, res) {
  // req.file 是 `avatar` 文件的信息
  console.log(req.file)

  // req.body 将具有文本域数据，如果存在的话
  console.log(req.body);
})


// 4.指定端口并启动服务
app.listen(80, () => {
  console.log("服务器已启动，请访问: http://localhost");
})