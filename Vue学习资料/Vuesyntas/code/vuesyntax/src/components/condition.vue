<template>
  <div class="condition">
    <h2>条件指令</h2>
    <p v-if="username == 'admin'">欢迎admin回家</p>
    <p v-else-if="username == 'a'">欢迎a回家</p>
    <p v-else>您还没有注册请去注册</p>
  </div>
</template>

<script>
export default {
  name: "condition",
  data() {
    return {
      username: 'admin'
    };
  }
};
</script>

<style scoped>
.condition {
  border: 1px solid blue;
}
p {
  color: yellow;
}
</style>