<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Echarts />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import Echarts from "./components/Echarts";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Echarts,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
</style>
