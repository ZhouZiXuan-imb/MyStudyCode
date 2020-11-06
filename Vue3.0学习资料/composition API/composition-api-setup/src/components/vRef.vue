<template>
  <div>{{ num }}--{{ str }}--{{ bool }}</div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "vRef",
  setup() {
    let num = ref(3);
    let str = ref("我是周子轩");
    let bool = ref(true);
    let age = ref(18)



    // let a = computed({
    //   get() {
    //     return 2020 - age.value
    //   },
    //   set(val) {
    //     age.value = 2020 - val
    //   }
    // })

    return {
      num,
      str,
      bool,
      a
    }
  }
}
</script>

<style scoped>

</style>