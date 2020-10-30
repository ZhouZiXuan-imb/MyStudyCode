<template>
  <div class="directive">
    <h2>文本指令</h2>
    <p>{{ data1 }}</p>
    <p v-text="data2"></p>
    <p v-html="data3"></p>
  </div>
</template>

<script>
export default {
  // 组件名
  name: "TextDirective",
  data() {
    return {
      data1: "我是插值表达式",
      data2: "<span>我是v-text</span>",
      data3: "<span>我是v-html</span>"
    };
  }
};
</script>

<style scoped>
.directive {
  border: 1px solid red;
}
</style>
