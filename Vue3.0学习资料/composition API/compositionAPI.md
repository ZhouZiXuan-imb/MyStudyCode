# Composition API

### Options API

在代码量较少时使用Options API代码也会很清晰，但是在大型组件中，随着代码的增加，脚本也会变得越来越臃肿，每个功能都散落在脚本的不同位置，这会使我们的代码不好阅读和维护。

### compositionAPI

而compositionAPI 主要就是来解决这个问题的，我们代码是根据逻辑功能进行组织的，可以把同一个功能中的所有代码放在一起，或者把他们单独拿出来放在一个函数中。所以Composition API也可以认为是基于函数组合的API。 

### 我们为什么要使用Composition API

1. Composition API是根据逻辑相关信息组织代码的，提高可读性和可维护性
2. 可以更好的重用代码
   * 在Options API 中通过 Mixins可以重用代码逻辑，但是用于发生命名冲突并且关系不清
3.  在 Vue3中 Composition API是可选的，我们依然可以使用Options API。

#### 总结

1. 首先Composition API是根据逻辑相关性组织代码的，这样可以提高代码的可读性和可维护性。
2. 这种方式可以更好的重用逻辑代码。比如，在Vue2中如果想重用逻辑代码，可能会发生命名冲突，以及关系不清。
3. 在Vue3中，Composiiton API是可选的，并不是一定要使用这种新方式，也就是说我们一九可以使用Vue2.x中的结构和用法。他是向下兼容的
4. 可以确定的是Vue3.0是兼容Vue2.x版本的，也就是说我们在日常工作中，可以是Vue3中使用Vue2.x的相关语法，但是当你真正开始使用Vue3写项目时，你会发现他比Vue2.x方便的多。

### Composition API如何使用

1. 创建Vue项目

2. 引入Composition API

   - setup函数

     1. setup是Vue3中新增的一个函数 是Composition API的入口函数 
     2. 也是一个Vue3新增的生命周期函数，他会在beforeCreate之后调用，在created之前调用，也就是说它的内部访问不到data和methods。
     3. 在setup中没有this，this指向的是undefined ,全部使用context上下文参数
     4. 在setup函数中定义的变量和方法最后都是需要return出去的，不然无法再模板中使用

     `setup中的注意点:`

     `1. 由于我们不能在setup函数中使用data和methods，所以vue为了避免我们错误的使用，直接将setup函数中的this修改成了undefine。`

     `2.setup函数只能是同步的不能是异步的。`

   - ref函数

     1. 返回一个响应式对象
     2. 返回的值是一个响应式对象
     3. 我们必须把数据return返回，return后可以直接在模板中使用
     4. ref的最底层是一个reactive方法 ref中会自动给一个简单类型的数据转成一个对象，使用name.value来取这个定义的name值。不可以直接使用name。但是我们如果直接在模板中使用属性，不需要加.value，因为vue会自动获取它们的value值

   - 定义函数

     1. 如果我们需要写一个函数，我们可以直接在setup中定义一个函数
     2. 定义函数之后也必须要return出去 

   - computed计算属性的使用

     1. 我们可以直接定义一个变量，接收computed方法 语法：computed(() => {return .......})

        ```js
        let a = computed(() => {
          return 2020 - age.value
        })
        ```

     2. 如果我们想给computed同时设置getter setter 我们就需要给computed函数传递一个对象类型的参数，然后单独设置ger方法 和set 方法的实现方法

        ```js
            let a = computed({
              get() {
                return 2020 - age.value
              },
              set(val) {
                age.value = 2020 - val
              }
            })
        ```


### readonly

传入一个对象(响应式或普通)或ref，返回一个原始对象的只读代理

```js
setup() {
  let star = reactive({
    name: '周子轩',
    age: 19
  });


  // 把一个响应式对象放到eadonly中  把star变成了只读对象了
  let cpStar = readonly(star)

  cpStar.name = '周周'
  // 可以更改star中的值 但是把star放在readonly中就成了只读变量了
  star.name = 'zhouzhou'
}
```

### watchEffect

立即执行传入的一个函数，并响应时追踪其依赖，并在其依赖变更时重新运行该函数

```js
setup() {
  let state = reactive({
    count: 0
  });

  // 1.setup之和组件有关系，组件销毁 watchEffect也销毁
  // 2.watchEffect是一个方法 他有一个返回值是一个方法可以停止跟踪依赖的变化。

  // watchEffect会自动返回一个用于停止监听的函数
  // 当组件被卸载的时候,watchEffect也会停止监听
  let stop = watchEffect(() => {console.log(`跟踪变化--${state.count}`)})

  function addCount() {
    setInterval(function () {
      state.count++
    }, 1000)
  }
    
  return {
    state,
    addCount,
    stop,
  }

}
```

1. setup之和组件有关系，组件销毁 watchEffect也销毁
2. watchEffect是一个方法 他有一个返回值是一个方法可以停止跟踪依赖的变化
3. watchEffect会自动返回一个用于停止监听的函数
4. 当组件被卸载的时候,watchEffect也会停止监听

### watch

对比watchEffect，watch有一下优点：

- 执行监听属性，也就是说仅在侦听的源变更时才执行回调；
- 更明确哪些状态的改变会触发侦听器重新运行副作用；
- 访问侦听状态变化前后的值；

watchEffect和watch的相同点

- 他们两个都会自动返回一个用于停止监听的函数
- 当组件被卸载的时候,他们都会停止监听