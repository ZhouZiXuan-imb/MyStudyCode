<template>
  <div class="total">
    <span>总计:{{price}}</span>
    <button>结算</button>
  </div>
</template>

<script>
export default {
  name: "cartTotal",
  props:['list'],
  computed: {
    price() {
      let sum = 0;

      this.list.forEach(function (item) {
        sum += parseInt(item.num) * parseInt(item.price)
      })

      return sum
    }
  }
}
</script>

<style scoped>

</style>