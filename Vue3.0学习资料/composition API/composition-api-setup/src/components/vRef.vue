<template>
  <div>{{num}}--{{str}}--{{bool}}</div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "vRef",
  setup() {
    let num = ref(3);
    let str = ref("我是周子轩");
    let bool = ref(true);

    return {
      num,
      str,
      bool
    }
  }
}
</script>

<style scoped>

</style>