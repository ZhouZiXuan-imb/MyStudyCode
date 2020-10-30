<template>
  <div class="right">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "adminRight"
}
</script>

<style scoped>
.right {
  width: calc(100% - 300px);
  height: calc(100% - 100px);
  float: right;
}
</style>