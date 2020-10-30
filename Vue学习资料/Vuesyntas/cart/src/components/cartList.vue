<template>
  <div class="item" v-for="item in list" :key="item.id">
    <img :src="item.img" alt="">
    <div class="name" v-text="item.name"></div>
    <div class="change">
      <a href="" @click.prevent="handleSub(item.id)">－</a>
      <input type="text" class="num" :value="item.num" @blur="handleChange(item.id,$event)">
      <a href="" @click.prevent="handleAdd(item.id)">＋</a>
    </div>
    <div class="del" @click="handleRemove(item.id)">×</div>
  </div>
</template>

<script>
export default {
  name: "cartList",
  props: ['list'],
  emits: ['del', 'changeNum','change-num'],
  data() {
    return {}
  },
  methods: {
    // 点击删除按钮
    handleRemove(id) {
      // 使用$emit向父组件传值  第一个参数是父组件中接收值的自定义事件，第二个参数是要穿的值
      this.$emit('del', id)
    },
    // 点击增加按钮
    handleAdd(id) {
      // 把点击的这个item的id传给父组件，让父组件操作数据。
      this.$emit('change-num', {
        id: id,
        type: 'add'
      })
    },
    // 点击减少按钮
    handleSub(id) {
      // 把点击的这个item的id传给父组件，让父组件操作数据。
      this.$emit('change-num', {
        id: id,
        type: 'sub'
      })
    },
    // input输入框失去焦点
    handleChange(id,event) {
      // 把点击的这个item的id传给父组件，让父组件操作数据。
      this.$emit('change-num', {
        id: id,
        type: 'change',
        num:event.target.value
      })
    },
  }
}
</script>

<style scoped>

</style>