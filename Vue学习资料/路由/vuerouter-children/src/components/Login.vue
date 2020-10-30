<template>
  <div>
    <h2>This is Login</h2>
    <hr>
    <router-link to="/UNameAndPwd">账号密码登录</router-link>
    <router-link to="/EWM">扫码登录</router-link>

    <router-view></router-view>
    <button @click="handleBack">回退</button>
  </div>
</template>

<script>
export default {
name: "Login",
  methods:{
    handleBack() {
      this.$router.go(-1)
    }
  },
}
</script>

<style scoped>

</style>