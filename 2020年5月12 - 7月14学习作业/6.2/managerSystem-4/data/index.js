// 1. 引入包
// 1.1 引入mongoose包
const mongoose = require('mongoose')
// 2. 连接数据库
mongoose.connect('mongodb://localhost/db_userdata', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch((err) => {
        console.log(err)
    })
// 3. 创建数据信息的约束
let userdataSchema = new mongoose.Schema({
    username: String,
    age: Number,
    hobbies: {
        type: [String],
        enum: {
            values: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头'],
            message: '您的爱好不在范围内'
        }
    },
    email: String,
    password: String,
})

// 4. 应用约束
let UserData = new mongoose.model('UserData', userdataSchema)
// 5. 创建信息文档

module.exports = {
    get: function (pageNum, pageSize, callback) {
        UserData.find().skip((pageNum - 1) * pageSize).limit(pageSize)
            .then((result) => {
                UserData.countDocuments()
                    .then(data => {
                        callback({
                            pageNum: pageNum,
                            pageSize: pageSize,
                            count: Math.ceil(data / pageSize),
                            data: result,
                        })
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    },
    deleteData: function (id, callback) {
        UserData.findOneAndDelete({ _id: id })
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    addData: function (userdata, callback) {
        UserData.create(userdata)
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    // 回显
    findOne: function (id, callback) {
        UserData.findOne({
            _id: id
        })
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    // 修改
    updateOne: function (updateId, update, callback) {
        UserData.updateOne({ _id: updateId }, update)
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}