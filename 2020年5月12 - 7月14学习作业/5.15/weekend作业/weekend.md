# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)
```js
目前学了两种方式:GET、POST
GET用于获取数据，POST用于增加数据，GET的参数是跟在url后面的，POST的参数是作为实体数据传入到后台的，POST前端需要设置请求头，GET不需要设置请求头 直接使用默认的就可以，POST后端需要设置中间件,GET不需要设置中间件
```

2. 原生的ajax怎么发请求?(get和post的方式都写出来,每行写上注释)
```js
GET方式
1. 实例化xhr对象
let xhr = new XMLHttpRequest();
2. 设置请求方式和请求地址
xhr.open('GET','这里地址是自己定义的，要定义的有意义，并且必须和后台app.get()中的地址一致')
3. 发送数据 GET方式发送的参数是跟在url后面的， send中不需要传入参数， 为null
xhr.send(null);
4. 监听请求并处理响应
xhr.onreadystatechange = () =>{
    // 输出查看响应
    console.log(xhr.responseText);
}
POST方式
1. 实例化xhr对象
let xhr = new XMLHttpRequest();
2. 设置请求方式和请求地址
xhr.open('POST','这里地址是自己定义的，要定义的有意义，并且必须和后台app.post()中的地址一致')
3. 设置POST方式的请求头
xhr.setrequestHeader('Content-type','application/x-www-form-urlencoded;charset=utf8')
4. 发送数据 POST方式发送数据需要输入参数  key1=value1的形式
xhr.send('key1=value1')
5. 监听请求并处理响应
xhr.onreadystatechange = () => {
    // 输入请求
    console.log(xhr.responseText);
}
```

3. jq的ajax的语法是什么?并且写出来目前你用到的属性每个的含义?
```js
$.ajax({
    // 请求方式
    type: 'GET',
    // 请求地址
    url:'这里地址是自己定义的，要定义的有意义，并且必须和后台app.post()中的地址一致',
    //GET方式为null
    data: null,
    // 请求成功后的回调函数  data为成功之后返回的给客户端的响应
    success: function(data) {
    	// 输出响应
        console.log(data)
    }
})
```

4. 使用art-template模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)
```js
1. 引入art-template文件
2. 定义一个script标签 
    <script type="text/template" id="str_template">
        {{键名}}
    </script>
3. 使用template()方法写入内容  
					 // 这里写script标签的id 
let htmlStr = template('str_template'，{
                       键:值
                       })
4. 把这个变量添加到页面中你想添加的位置
```

5. art-template模板引擎的语法你知道的有哪些，并且总结出来?
```js
输出：
<script type="text/template" id="str_templ">
    {{content}}
</script>

<script>
   	let htmlStr = template('str_templ', {
        content: '我是一个标题'
	})
</script>
循环：
<script type="text/template" id="template_each">
    {{each target}}
     	<li>{{$index}}-{{$value}}</li>
    {{/each}}
</script>
<script>
    let data = ["宋轶", "张国立", "于文文", "王菲", "江疏影", "王源", "宋祖儿", "易烊千玺", "王一博"];
    let htmlStr = template('template_each', {
    	target: data
    })
    div.innerHTML = htmlStr
</script>    
      
条件语句：
<script type="text/template" id="template_if">
        {{if content.length>0}}
            <ul>
                {{each content}}
                <li>{{$value}}</li>
                {{/each}}
            </ul>
        {{else}}
            <p>没有数据</p>
        {{/if}}
</script>
<script>
        let oDiv = document.querySelector('div')
        // let data = []
        let data = ["宋轶", "张国立", "于文文", "王菲", "江疏影", "王源", "宋祖儿", "易烊千玺", "王一博"];
        let htmlStr = template('template_if', {
             content: data
         })
         oDiv.innerHTML = htmlStr
</script>
```

6. 客户端和服务端的通信过程是怎么样的？
```js
1. 在浏览器的地址栏中输入url
2. 浏览器发送url给DNS，获取这个url的ip地址
3. 浏览器通过ip地址发起请求
4. 浏览器监听指定的端口的服务器，收到这个请求，进行对应的处理
5. 服务器把处理完的结果返回给浏览器(响应)
6. 浏览器把接受到的响应渲染到页面中
```

7. express怎么开放静态资源?
```js
// 第一步下载express模块
npm install express
// 第二步 引入express模块
const express = require('express')
// 第三步 使用express模块开启一个服务
const app = express(); 
// 第四步 设置一个文件夹为静态资源
app.use(express.static('要设置静态资源的文件夹名'))
```

8. express怎么读文件和写文件?
```js
// 第一步 引入fs模块
let fs = require('fs')
// 读文件                                                        err为报错,data为获取到的数据
fs.readFile('文件的路径 可以使用path模块的join方法拼接一个绝对路径'，function(err，data){
    // err为报错  如果没有错误则返回null  判断err是否为null  如果为null就是没有报错
    if(err !== null){
        // 如果又错误就输出这个错误
        console.log(err)
        // return停止这个函数
    }
    // 如果没有报错  就输出获取到的数据
    console.log(data)
}) 
```

9. JSON对象和JSON字符串是怎么进行相互转换的?
```js
JSON对象转字符串: JSON.stringify();
JSON字符串转对象: JSON.parse();
```

10. form表单怎么的属性有哪些？分别是什么意思？
```js
form表单中又action和method
action="" 属性中输入的是url地址
method="" 属性中输入的是请求方式 请求方式有GET,POST,PUT,DELETE
								   // 查   增   改    删
```

11. form表单怎么序列化获取值表单的值？
```js
$('form表单选择器').serialize() // 获取到的值为  key1=value1&key2=value2   的形式
```

12. form表单怎么阻止默认的提交行为?
```js
使用e.preventDefault() 方法阻止浏览器默认行为
```

13. 在客户端怎么由login.html页面跳转到首页index.html?
```js
使用 location.href = 'index.html' 跳转
```

