const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/ZhouZiXuan_user', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch((err) => {
        console.log(err)
    })

// 创建数据信息约束
let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '必须填写您的用户名']
    },
    age: Number,
    hobbies: {
        type: [String],
        enum: {
            values: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头'],
            message: '您的爱好不再范围内'
        }
    },
    password: String,
    email: String
})

// 应用约束
let UserData = new mongoose.model('UserData', userSchema)


// 把文档添加到数据库中
// UserData.create({
//     username: '周子轩',
//     age: 19,
//     hobbies: ['足球', '篮球'],
//     password: 'zhouzixuan000',
//     email: 'zhouzixuan@qq.com'
// })
// UserData.create({
//     username: '张三',
//     age: 19,
//     hobbies: ['橄榄球', '篮球'],
//     password: 'zhouzixuan000',
//     email: 'zhangsan@qq.com'
// })
// UserData.create({
//     username: '李四',
//     age: 19,
//     hobbies: ['烫头', '篮球'],
//     password: 'zhouzixuan000',
//     email: 'lisi@qq.com'
// })
// UserData.create({
//     username: '王五',
//     age: 19,
//     hobbies: ['抽烟', '喝酒'],
//     password: 'zhouzixuan000',
//     email: 'wangwu@qq.com'
// })
// UserData.create({
//     username: '周六',
//     age: 19,
//     hobbies: ['烫头', '抽烟'],
//     password: 'zhouzixuan000',
//     email: 'zhouliu@qq.com'
// })
// UserData.create({
//     username: '赵四',
//     age: 19,
//     hobbies: ['足球', '喝酒'],
//     password: 'zhouzixuan000',
//     email: 'zhaosi@qq.com'
// })


module.exports = {
    pagenation: function (pageNum, pageSize, callback) {
        UserData.find().skip((pageNum - 1) * pageSize).limit(pageSize)
            .then((result) => {
                UserData.countDocuments()
                    .then((data) => {
                        callback({
                            pageNum: pageNum,
                            pageSize: pageSize,
                            count: Math.ceil(data / pageSize),
                            data: result
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
    },
    addUser: (userdata, callback) => {
        UserData.create(userdata)
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteUser: (id, callback) => {
        UserData.findOneAndDelete({ _id: id })
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}