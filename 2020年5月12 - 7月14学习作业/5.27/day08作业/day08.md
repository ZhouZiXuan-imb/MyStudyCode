## 简答题

1. 创建数据库fullstack2019
```js
// 初始化项目
// 下载mongoose包
// 引入mongoose包
const mongoose = require('mongoose')

// 1. 创建数据库fullstack2019
mongoose.connect('mongodb://localhost/fullstack2019', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('数据库连接成功')
    })
    .catch((err) => {
        console.log(err, '数据库连接成功')
    })
```
============================Student集合==================
2. 创建集合Student,集合的规则要求如下:
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 年龄:数字类型，最大年龄不能超过25岁，必传，提示年龄不能大于25岁
> 性别: 字符串类型，只能是男或者是女，枚举，必传，
> 业务爱好:draw,computer,sing,football,running
```js
// 创建规则
let StudentSchema = new mongoose.Schema({
    name: {
        // 定义字符串类型
        type: String,
        required: [true, '请填入您的名字'],
        minlength: [2, '长度最少2个字符'],
        maxlength: [6, '最大6个字符']
    },
    age: {
        type: Number,
        max: [25, '年龄不能大于25岁']
    },
    sex: {
        type: String,
        enum: {
            values: ['男', '女']
        },
        required: [true, '请选择您的性别']
    },
    hobbies: {
        type: [String],
    }
})
// 应用规则
let Student = new mongoose.model('Student', StudentSchema)
```
=============================增加操作=============================
3. 在Student的集合中插入文档
>姓名:杨文林,年龄:19,性别:男,业务爱好：["draw","computer"]
>姓名:贾拉拉,年龄:18,性别:女,业务爱好：["sing","draw","football"]
>姓名:姚姚,年龄:24,性别:女,业务爱好：["football","computer","running"]
>姓名:王凯,年龄:25,性别:男,业务爱好：["sing","computer"]
```js
let student1 = new Student({
    name: '杨文林',
    age: 19,
    sex: '男',
    hobbies: ["draw", "computer"]
})
let student2 = new Student({
    name: '贾拉拉',
    age: 18,
    sex: '女',
    hobbies: ["sing", "draw", "football"]
})
let student3 = new Student({
    name: '姚姚',
    age: 24,
    sex: '女',
    hobbies: ["football", "computer", "running"]
})
let student4 = new Student({
    name: '王凯',
    age: 25,
    sex: '男',
    hobbies: ["sing", "computer"]
})

// 保存数据
student1.save();
student2.save();
student3.save();
student4.save();
```

=============================Score集合==============================

4. 创建集合Score,集合的规则要求如下
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 数学成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 英语成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 语文成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
```js
let ScoreSchema = new mongoose.Schema({
    name: String,
    Math_grade: {
        type: Number,

        min: 0,
        max: 100,
        required: [true, '请输入您的数学成绩']
    },
    English_grades: {
        type: Number,
        min: 0,
        max: 100,
        required: [true, '请输入您的英语成绩']
    },
    Language_achievement: {
        type: Number,
        min: 0,
        max: 100,
        required: [true, '请输入您的语文成绩']
    },
})
// // 应用规则
let Score = new mongoose.model('Score', ScoreSchema)
```
=============================增加操作===============================
5. 在Score的集合中插入文档
>姓名:杨文林,英语成绩：88，数学成绩：99，语文成绩：80，
>姓名:贾拉拉,英语成绩：79，数学成绩：88，语文成绩：90，
>姓名:姚姚,英语成绩：90，数学成绩：90，语文成绩：90，
>姓名:王凯,英语成绩：98，数学成绩：90，语文成绩：99

```js
let score1 = new Score({
    name: '杨文林',
    Math_grade: 88,
    English_grades: 99,
    Language_achievement: 80,
})
let score2 = new Score({
    name: '贾拉拉',
    Math_grade: 79,
    English_grades: 88,
    Language_achievement: 90,
})
let score3 = new Score({
    name: '姚姚',
    Math_grade: 90,
    English_grades: 90,
    Language_achievement: 90,
})
let score4 = new Score({
    name: '王凯',
    Math_grade: 98,
    English_grades: 90,
    Language_achievement: 99,
})
score1.save();
score2.save();
score3.save();
score4.save();
```

6. 查询所有学生的信息
```js
Student.find()
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
```

7. 查询年龄大于18岁小于24岁的学生的信息
```js
Student.find({ age: { $gt: 18, $lt: 24 } })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
```

8. 查询年龄19岁并且喜欢计算机的男生的信息
```js
Student.find({ age: 19, hobbies: { $in: ['computer'] }, sex: '男' })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
```

9. 查询班级中年龄最大的学生的信息
```js
Student.find().sort('-age')
    .then((data) => {
        console.log(data[0])
    })
```

10. 查询年龄是18岁的学生的姓名
```js
Student.find({ age: 18 })
    .then((data) => {
        console.log(data)
    })
```
11. 查询总人数(提示count)
```js
 let count = 0
Student.find()
    .then((data) => {
        count += data.length
        console.log(count)
    })
```

12. 查询显示第二页的数据，每页显示2条
```js
Student.find().skip(2).limit(2)
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
```
13. 查询业余爱好里面包含sing的学生的信息
```js
Student.find({ hobbies: { $in: ['sing'] } })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
```
14. 对数学成绩降序输出
```js
Score.find().sort('-Math_grade')
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
```

15. 查询姓名是王凯的各科成绩
```js
Score.find({ name: '王凯' })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
```

===============================更新操作===============================

16. 将姓名是姚姚的学生的年龄更改为23
```js
 Student.updateOne({ name: '姚姚' }, { age: 23 })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
```
17. 将所有学生的年龄更改为18
```js
Student.updateMany({}, { age: 18 })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
```
18. 将王凯的数学成绩更新为100分
```js
Score.updateMany({ name: '王凯' }, { Math_grade: 100 })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
```
==================================删除操作=============================
19. 删除年龄小于20的学生的信息
```js
Student.deleteMany({ age: { $lt: 20 } })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
```
20. 删除姓名是贾拉拉的这条数据
```js
Student.findOneAndDelete({ name: '贾拉拉' })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
```

