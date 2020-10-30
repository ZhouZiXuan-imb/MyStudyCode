<template>
  <div>我是主页,我的id是{{ id }} 我的名字是{{name}}</div>
</template>

<script>
export default {
  name: "Home",
  props:['id','name'],
}
</script>

<style scoped>

</style>