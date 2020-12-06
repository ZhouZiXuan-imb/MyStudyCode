// 1. 引入包
// 1.1 引入mongoose包
const mongoose = require('mongoose')

/* ==================================================== */

// 2. 连接数据库
mongoose.connect('mongodb://localhost/db_userdata', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {

    })
    .catch((err) => {
        console.log(err)
    })

/* ==================================================== */

// 3. 创建数据信息的约束
let userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '请填写您的用户名']
    },
    age: {
        type: Number,
    },
    hobbies: {
        type: [String],
        enum: {
            values: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头']
        },

    },
    email: String,
})

/* ==================================================== */

// 4. 应用约束
let UserData = new mongoose.model('UserData', userSchema)

/* ==================================================== */

// 5. 给数据库中添加文档
// UserData.create({
//     username: '张三',
//     age: 18,
//     hobbies: ['足球'],
//     email: 'zhouzixuan@qq.com'
// })
// UserData.create({
//     username: '周子轩',
//     age: 18,
//     hobbies: ['足球'],
//     email: 'zhouzixuan@qq.com'
// })
// UserData.create({
//     username: '阿萨大',
//     age: 18,
//     hobbies: ['足球'],
//     email: 'zhouzixuan@qq.com'
// })
// UserData.create({
//     username: '放更换',
//     age: 18,
//     hobbies: ['足球'],
//     email: 'zhouzixuan@qq.com'
// })
// UserData.create({
//     username: '234人',
//     age: 18,
//     hobbies: ['足球'],
//     email: 'zhouzixuan@qq.com'
// })

/* ==================================================== */


module.exports = {
    get: (pageNum, pageSize, callback) => {
        UserData.find().skip((pageNum - 1) * pageSize).limit(pageSize)
            .then((data) => {
                UserData.countDocuments()
                    .then((result) => {
                        callback({
                            pageNum: pageNum,
                            pageSize: pageSize,
                            count: Math.ceil(result / pageSize),
                            data: data
                        })
                    })
            })
            .catch(err => {
                console.log(err)
            })
    },
    addUser: (data, callback) => {
        UserData.create(data)
            .then((result) => {
                callback(result)
            })
    },
    deleteData: (id, callback) => {
        UserData.findOneAndDelete({ _id: id })
            .then((data) => {
                callback(data)
            })
    }
}