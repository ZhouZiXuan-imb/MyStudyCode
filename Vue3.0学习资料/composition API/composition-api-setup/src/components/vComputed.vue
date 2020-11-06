<template>
  <div><p @click="changeNum">{{ newNum }}</p></div>
</template>

<script>
import {ref, computed} from 'vue'

export default {
  name: "v-Computed",
  setup() {
    let num = ref(1);

    let newNum = computed({
      get: function () {
        return num.value + 1
      },
      // 设置值
      set: function () {
        console.log('set方法')
      }
    })

    function changeNum() {
      newNum.value = 8;
      // console.log(newNum)
    }

    return {
      // num,
      newNum,
      changeNum,
    }
  }
}
</script>

<style scoped>

</style>