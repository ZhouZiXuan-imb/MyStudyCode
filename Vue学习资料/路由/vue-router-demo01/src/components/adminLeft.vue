<template>
  <div class="leftBox">
    <ul class="items">
      <li class="list">
        <router-link to="/user">用户管理</router-link>
      </li>
      <li class="list">
        <router-link to="/quanxian">权限管理</router-link>
      </li>
      <li class="list">
        <router-link to="/shangpin">商品管理</router-link>
      </li>
      <li class="list">
        <router-link to="/dingdan">订单管理</router-link>
      </li>
      <li class="list">
        <router-link to="/xitong">系统设置</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "left",
  methods: {
    paita() {
      let a = document.querySelectorAll('.items a')
      for (let i = 0; i < a.length; i++) {
        a[i].index = i;
        a[i].classRemove = '';
      }
    }
  },
  mounted() {
    this.paita();
  }
}
</script>

<style scoped>
.leftBox {
  width: 300px;
  height: calc(100% - 100px);
  background: gray;
  float: left;
}

.items {
  margin: 0;
  padding: 0;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  height: 40px;
  line-height: 40px;
  color: white;
  border-bottom: 1px solid white;
  background-color: lightgray;
}

.list a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
}

.list a:hover {
  background-color: orange;
}

.active {
  background-color: orange;
}
</style>