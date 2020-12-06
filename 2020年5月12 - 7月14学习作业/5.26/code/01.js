// 初始化项目 下载mongoose包 引入mongoose包

// 1. 引入包
const mongoose = require('mongoose')
// 2. 连接数据库
mongoose.connect('mongodb://localhost/quanzhan12', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    // 成功时的回调
    .then(() => {
        console.log('数据库连接成功')
    })
    // 失败时的回调
    .catch((error) => {
        console.log(error, '数据库连接失败')
    })
// 3. 创建数据集合规则(创建数据信息的约束)
// 3.1 创建学生信息的集合
let studentSchema1 = new mongoose.Schema({
    // 名字:字符串类型
    name: String,
    // 年龄:数字类型
    age: Number,
    // 性别:字符串类型
    sex: Number,
    // 名字:字符串类型
    hobbies: Array,
})
// 4. 应用规则
let Stadent = new mongoose.model('Student', studentSchema1)
// 5. 给数据表中添加数据
let stadent1 = new Stadent({
    name: 'zhangsan',
    age: 22,
    sex: 0,
    hobbies: ["draw", "computer"]
})
let stadent2 = new Stadent({
    name: 'jialala',
    age: 18,
    sex: 1,
    hobbies: ["sing", "draw", "football"]
})
let stadent3 = new Stadent({
    name: 'yaoyao',
    age: 24,
    sex: 1,
    hobbies: ["football", "computer", "running"]
})
let stadent4 = new Stadent({
    name: 'yangwenlin',
    age: 19,
    sex: 0,
    hobbies: ["sing", "computer"]
})
// 6. 把数据写入到数据表中保存数据
stadent1.save();
stadent2.save();
stadent3.save();
stadent4.save();


// 3.2 创建学生成绩集合的规则
let studentSchema2 = new mongoose.Schema({
    name: String,
    Math_grade: Number,
    English_grades: Number,
    Language_achievement: Number
})

// 4. 应用规则
let Score = new mongoose.model('Score', studentSchema2)

// 5. 写入数据
let score1 = new Score({
    name: 'zhangsan',
    Math_grade: 99,
    English_grades: 89,
    Language_achievement: 100,
})

let score2 = new Score({
    name: 'jialala',
    Math_grade: 88,
    English_grades: 70,
    Language_achievement: 98,
})
let score3 = new Score({
    name: 'yaoyao',
    Math_grade: 76,
    English_grades: 87,
    Language_achievement: 78,
})
let score4 = new Score({
    name: 'yangwenlin',
    Math_grade: 88,
    English_grades: 99,
    Language_achievement: 100,
})
// 6. 保存数据
score1.save();
score2.save();
score3.save();
score4.save();


// 3.3 老师数据集合规则
let studentSchema3 = new mongoose.Schema({
    name: String,
    sex: Number,
    age: Number,
    salary: Number,
})
// 4. 应用规则
let Teacher = new mongoose.model('Teacher', studentSchema3)

// 5. 写入数据
let teacher1 = new Teacher({
    name: '姚姚',
    sex: 1,
    age: 24,
    salary: 5000
})
let teacher2 = new Teacher({
    name: '贾拉拉',
    sex: 1,
    age: 25,
    salary: 10000
})
let teacher3 = new Teacher({
    name: '杨文林',
    sex: 0,
    age: 26,
    salary: 30000
})

// 6. 保存数据
teacher1.save();
teacher2.save();
teacher3.save();