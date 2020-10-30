<template>
  <div>
    <h2>This is User  id为:{{ id }},名字是:{{ name }}</h2>
    <hr>
    <button @click="handleDump">跳转到Login</button>
  </div>
</template>

<script>
export default {
name: "User",
  props:['id','name'],
  methods:{
    handleDump() {
      console.log(this)
      this.$router.forward();
    }
  },
}
</script>

<style scoped>

</style>