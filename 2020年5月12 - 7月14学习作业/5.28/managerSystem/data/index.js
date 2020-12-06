// 1. 引入包
const mongoose = require('mongoose')
// 2. 连接数据库
mongoose.connect('mongodb://localhost/db_userdata', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// 3. 创建数据信息规则
let userdataSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, '请输入您的用户名'],
    },
    age: {
        type: Number,
    },
    hobbies: {
        type: [String],
        enum: {
            values: ['抽烟', '喝酒', '烫头', '篮球', '足球', '唱歌', '橄榄球'],
            message: '您的爱好不再范围内'
        }
    },
    email: {
        type: String,
        required: [true, '请输入您的邮箱']
    }
})
// 4. 应用规则
let UserData = new mongoose.model('UserData', userdataSchema)
// 5. 创建文档
// let userdata1 = new UserData({
//     username: '张三',
//     age: 19,
//     hobbies: '抽烟',
//     email: 'zhouzixuan@qq.com'
// })
// let userdata2 = new UserData({
//     username: '李四',
//     age: 20,
//     hobbies: ['抽烟', '喝酒'],
//     email: 'zhouzixuan@qq.com'
// })
// let userdata3 = new UserData({
//     username: '王五',
//     age: 21,
//     hobbies: ['烫头'],
//     email: 'zhouzixuan@qq.com'
// })
// let userdata4 = new UserData({
//     username: '赵四',
//     age: 22,
//     hobbies: ['篮球'],
//     email: 'zhouzixuan@qq.com'
// })
// let userdata5 = new UserData({
//     username: '赵武',
//     age: 23,
//     hobbies: ['足球', '唱歌'],
//     email: 'zhouzixuan@qq.com'
// })
// let userdata6 = new UserData({
//     username: '赵启',
//     age: 24,
//     hobbies: ['篮球', '唱歌'],
//     email: 'zhouzixuan@qq.com'
// })
// let userdata7 = new UserData({
//     username: '赵巴',
//     age: 25,
//     hobbies: ['篮球', '足球'],
//     email: 'zhouzixuan@qq.com'
// })
// let userdata8 = new UserData({
//     username: '周久',
//     age: 26,
//     hobbies: ['篮球'],
//     email: 'zhouzixuan@qq.com'
// })

// // 6. 保存数据
// userdata1.save();
// userdata2.save();
// userdata3.save();
// userdata4.save();
// userdata5.save();
// userdata6.save();
// userdata7.save();
// userdata8.save();


module.exports = {
    get: function (pageNum, pageSize, callback) {
        UserData.find().skip((pageNum - 1) * pageSize).limit(pageSize)
            .then((data) => {
                UserData.countDocuments().then((result) => {
                    callback({
                        pageNum: pageNum,
                        pageSize: pageSize,
                        count: result,
                        data: data
                    })
                })
            })
    },
    deleteData: (id, callback) => {
        UserData.findOneAndDelete({ _id: id })
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    adddata: function (userdata, callback) {
        UserData.create(userdata)
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}