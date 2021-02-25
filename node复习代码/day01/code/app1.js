const fs = require('fs');
// console.log(fs);

// 读文件
// fs.readFile('./readF.txt', 'UTF-8', (err, data) => {
//     // console.log(err);
//     console.log(data);
// })

// 写文件
// 1. 文件内容
const content = "COPYFILE_FICLONE_FORCE: 4";
const path = require('path')
// 2. 文件地址
const filePath = path.join(__dirname, "aaa.txt");

// 3. 使用fs的writeFile方法, 第一个参数是文件路径，第二个参数是要写入的内容，第三个内容是回调函数（回调函数的参数只有一个err，如果又错误打印err，如果没有错误打印null）
fs.writeFile(filePath, content, (err, data) => {
    console.log(err);
    console.log(data);
})