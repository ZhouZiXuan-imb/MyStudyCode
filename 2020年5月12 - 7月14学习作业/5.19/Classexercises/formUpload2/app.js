// 1. 引入包
const express = require('express')
const path = require('path')
const multer = require('multer')

// 2. 设置包
const app = express();
// 2.1 设置静态目录
app.use(express.static(path.join(__dirname, 'public')))
// 2.2 设置文件上传的路径
let upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cd) => {
      cd(null, path.join(__dirname, 'upload'))
    },
    filename: (req, file, cd) => {
      cd(null, file.originalname)
    }
  })
})

app.post('/getData', upload.single('avatar'), (req, res) => {
  console.log(req.file)
  console.log(req.body)
})
// 4. 监听指定端口
app.listen(80, function () {
  console.log('请查看 http://localhost')
})