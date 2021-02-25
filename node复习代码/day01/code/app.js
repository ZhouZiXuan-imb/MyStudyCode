// 1.引入http模块
const http = require('http');
// 2.使用http模块创建一个服务
const server = http.createServer();

// 监听请求事件
server.on('request', function (req, res) {
    // res.write('')
    res.end('HelloWorld');
})

// 3.监听指定端口并启动服务
server.listen('3000', () => {
    console.log("服务器已启动，请访问：http://localhost:3000");
})

