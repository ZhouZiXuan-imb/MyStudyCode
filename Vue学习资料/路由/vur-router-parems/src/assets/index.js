// 第一种导出方式  解构赋值法
// let c = 7;
// let a = 9;
// let b = 10;
//
// export {a,b,c}

//第二种导出方式  方法导出




// 提取jSON数据
let jsonData = {
    'age':'111',
    'name':'周子轩'
}

let {age,name} = jsonData
console.log(age);
console.log(name);