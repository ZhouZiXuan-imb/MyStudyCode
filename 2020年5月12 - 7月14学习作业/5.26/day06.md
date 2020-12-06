## 简答题

1. 创建数据库quanzhan12
```js
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
```
============================================class集合==============================

2. 创建集合class,集合的规则要求如下
> 姓名:字符串类型
> 年龄:数字类型
> 性别: 数字类型
> 业务爱好:数组类型
```js
// 3. 创建数据集合规则(创建数据信息的约束)
let studentSchema = new mongoose.Schema({
    // 名字:字符串类型
    name: String,
    // 年龄:数字类型
    age: Number,
    // 性别:字符串类型
    sex: Number,
    // 名字:字符串类型
    hobbies: Array,
})
```
============================================增加操作===============================
3. 在class的集合中插入文档
>姓名:zhangsan,年龄:22,性别:0,业务爱好：["draw","computer"]
>姓名:jialala,年龄:18,性别:1,业务爱好：["sing","draw","football"]
>姓名:yaoyao,年龄:24,性别:1,业务爱好：["football","computer","running"]
>姓名:yangwenlin,年龄:19,性别:0,业务爱好：["sing","computer"]
```js
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
let studentSchema = new mongoose.Schema({
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
let Stadent = new mongoose.model('Student', studentSchema)
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
```
============================================查询操作===============================
4. 查询所有人的信息
```js
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
let StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: Number,
    hobbies: Array,
})
// 4. 应用规则
let Student = new mongoose.model('Student', StudentSchema)

// 5. 查询数据库中的内容
Student.find()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
```
============================================score集合==============================

5. 创建集合score,集合的规则要求如下
> 姓名:字符串类型
> 数学成绩: 数字类型
> 英语成绩: 数字类型
> 语文成绩: 数字类型
```js
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
// 3.2 创建学生成绩集合的规则
let studentSchema2 = new mongoose.Schema({
    name: String,
    Math_grade: Number,
    English_grades: Number,
    Language_achievement: Number
})
```
============================================增加操作===============================

6. 在class的集合中插入文档
>姓名:zhangsan,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:jialala,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yaoyao,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
>姓名:yangwenlin,英语成绩：你自己随便写，数学成绩：你自己随便写，语文成绩：你自己随便写，
```js
// 3.2 创建学生成绩集合的规则
let studentSchema2 = new mongoose.Schema({
    name: String,
    Math_grade: Number,
    English_grades: Number,
    Language_achievement: Number
})

// 4. 应用规则
let Score = new mongoose.model('Student', studentSchema2)

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
```
============================================查询操作===============================
7. 查询所有成绩
```js
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
```

============================================老师集合==============================
8. 创建集合teacher,集合的规则要求如下
> 姓名:字符串类型
> 性别: 数字类型
> 年龄: 数字类型
> 新资: 数字类型
```js
// 3.3 老师数据集合规则
let studentSchema3 = new mongoose.Schema({
    name: String,
    sex: Number,
    age: Number,
    salary: Number,
})
```
============================================增加操作===============================

9. 在class的集合中插入文档
这个你自己定义，插入3条文档就可以
```js
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
```
============================================查询操作===============================

10. 查询所有老师的信息
```js
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
```

