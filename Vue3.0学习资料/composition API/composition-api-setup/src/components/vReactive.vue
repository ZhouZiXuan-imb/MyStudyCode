<template>
  <div @click="changeObj">{{ obj.name }}</div>
  <span @click="changeArr" v-for="(item,index) in arr" :key="index">{{item}}--</span>
  <input type="text" v-model="obj.berthday">
</template>

<script>
import {reactive} from 'vue'

export default {
  name: "vReactive",
  setup() {
    // 对象
    let obj = reactive({
      name: '周子轩',
      date:new Date().getFullYear(),
      berthday:'',
      computed: {
        calc() {
          return this.name
        }
      }
    })

    function changeObj() {
      obj.name = '周周'
      console.log(obj)
    }

    // 数组
    let arr = reactive([1, 2, 3, 4, 5, 6])

    function changeArr() {
      arr[0] = 123123;
    }


    return {
      obj,
      changeObj,
      arr,
      changeArr
    }
  }
}
</script>

<style scoped>

</style>