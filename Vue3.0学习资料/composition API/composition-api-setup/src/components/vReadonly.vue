<template>
  <div class="container"></div>
</template>

<script>
import {reactive, readonly} from 'vue'

export default {
  name: "readonly",
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
}
</script>

<style scoped>

</style>