# VueRouter

### 单页面应用

所谓的单页面应用(SPA)就是(single page application)

- 优点:

  1.良好的交互体验

  2.后端不再负责模板渲染、输出页面工作，后端API	通用化，即同一套后端程序代码，不用修改就可以	用于	   Web界面、手机、平板等多种客户端。

  3.减轻服务器压力

- 缺点:

  1.首屏加载慢

  2.不利于SEO

  3.不适合开发大型项目

实现方式：使用location.hash的变化来更改页面上呈现的内容

### VueRouter的基本使用

1. 下载引入`npm install vue-router@next`
2. 添加路由链接:`<router-link>`是路由中提供的标签，会被默认渲染成a标签，to属性默认被渲染被href属性，to属性的值会被渲染为#开头的hash地址。
3. 添加路由填充位(路由占位符) `<router-view></router-view>`
4. 定义路由组件
5. 配置路由规则并创建路由实例
6. 将路由挂载到Vue实例中



### VueRouter的路由重定向

- 如果我们需要重定向  那么就直接在路由规则的上面添加一行
- 当我们访问/ 的时候， 自动跳转到/home
- { path: '/' , redirect: '/home'}

### VueRouter的子路由

- 当我们子路由中还需要写路由组件的话，我们就需要用到子路由
- 在路由中使用children属性定义子路由
- ![image-20201023175043211](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20201023175043211.png)

### VueRouter的路由传参

- 路由传参的三种方式
  - App.vue 中 <router-link to="/home/参数"></router-link>
  - routers/index.js 中定义路由的时候path:'/home/:id' :id接收App.vue中传来的参数 添加props:true 属性 把参数流向组件
  - 组件中使用{{ $routers.params.id }}插值表达式使用参数

