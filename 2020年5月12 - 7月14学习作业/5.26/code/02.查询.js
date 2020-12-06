// 1. 引入包
const mongoose = require('mongoose')
// 2. 连接数据库
mongoose.connect('mongodb://localhost/quanzhan12', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch((error) => {
        console.log(error, '数据库连接失败')
    })

// 3. 创建数据集合规则(创建数据信息的约束)
let StudentSchema1 = new mongoose.Schema({
    name: String,
    age: Number,
    sex: Number,
    hobbies: Array,
})
// 4. 应用规则
let Student = new mongoose.model('Student', StudentSchema1)

// 5. 查询数据库中的内容
Student.find()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })

// 3.2 创建学生成绩集合的规则
let studentSchema2 = new mongoose.Schema({
    name: String,
    Math_grade: Number,
    English_grades: Number,
    Language_achievement: Number
})

// 4. 应用规则
let Score = new mongoose.model('Score', studentSchema2)
// 5. 查询成绩数据表中所有内容
Score.find()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })


let studentSchema3 = new mongoose.Schema({
    name: String,
    sex: Number,
    age: Number,
    salary: Number,
})

let Teacher = new mongoose.model('Teacher', studentSchema3)

Teacher.find()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })