<template>
  <div class="item" v-for="item in list" :key="item.id">
    <img :src="item.img" alt="">
    <div class="name" v-text="item.name"></div>
    <div class="change">
      <a href="" @click.prevent="handleSub(item.id)">－</a>
      <input type="text" class="num" :value="item.num" @blur="handleChange(item.id,$event)">
      <a href="" @click.prevent="handleAdd(item.id)">＋</a>
    </div>
    <div class="del" @click="handleDel(item.id)">×</div>
  </div>
</template>

<script>
export default {
  name: "cartlist",
  props:['list'],
  emits:['changeNum','change-num'],
  data() {
    return {

    }
  },
  methods:{
    handleAdd(id) {
      this.$emit('change-num',{
        id:id,
        type:'add'
      })
    },
    handleSub(id) {
      this.$emit('change-num',{
        id:id,
        type:'sub'
      })
    },
    handleChange(id,event) {
      this.$emit('change-num',{
        id:id,
        type:'change',
        num:event.target.value
      })
    },
    handleDel(id) {
        this.$emit('change-num',{
          id:id,
          type:'del'
        })
    },

  },
}
</script>

<style scoped>

</style>