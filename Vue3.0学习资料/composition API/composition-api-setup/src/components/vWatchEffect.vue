<template>
  <div class="container">
    <p @click="addCount">{{ state.count }}</p>
    <button @click="stop">点击关闭侦听器</button>
  </div>
</template>

<script>
import {reactive,watchEffect} from 'vue'

export default {
  name: "vWatchEffect",
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
}
</script>

<style scoped>

</style>