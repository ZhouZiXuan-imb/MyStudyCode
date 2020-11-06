<template>
  <div>{{str}}</div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: "vSetup",
  props:['msg'],
  setup(props) {
    let str = ref(props.msg)

    return {
      str
    }

  }
}
</script>

<style scoped>

</style>