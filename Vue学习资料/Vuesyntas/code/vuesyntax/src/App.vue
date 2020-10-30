<template>
  <TextDirctive></TextDirctive>
  <condition></condition>
</template>

<script>
import TextDirctive from "@/components/TextDirctive";
import condition from "@/components/condition";
export default {
  name: "App",
  components: {
    TextDirctive,
    condition
  }
};
</script>
vur
<style>
#app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
