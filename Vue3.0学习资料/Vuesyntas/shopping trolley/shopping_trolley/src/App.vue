<template>
  <div class="container">
    <div class="cart">
      <toubu :name="name"> 
      <cartlist :list="list" @change-num="change"></cartlist>
      <cartTotal :list="list"></cartTotal>
    </div>
  </div>
</template>

<script>
import toubu from "./components/toubu";
import cartlist from "./components/cartlist";
import cartTotal from "./components/cartTotal";

export default {
  name: "App",

  methods: {
    change(val) {
      if (val.type == 'add') {
        this.list.some(function (item) {
          if (item.id == val.id) {
            item.num++
          }
        })
      } else if (val.type == 'sub') {
        this.list.some(function (item) {
          if (item.id == val.id) {
            if (item.num < 1) {
              item.num = 0
            } else {
              item.num--
            }
          }
        })
      } else if (val.type == 'change') {
        this.list.some(function (item) {
          if (item.id == val.id) {
            item.num = val.num
          }
        })
      } else if (val.type == 'del') {
        let index = this.list.findIndex(item => item.id == val.id)
        this.list.splice(index,1)
      }
    }
  },
  data() {
    return {
      name: '张三',
      list: [{
        id: 1,
        name: 'TCL彩电',
        price: 1000,
        num: 1,
        img: 'img/a.jpg'
      }, {
        id: 2,
        name: '机顶盒',
        price: 1000,
        num: 1,
        img: 'img/b.jpg'
      }, {
        id: 3,
        name: '海尔冰箱',
        price: 1000,
        num: 1,
        img: 'img/c.jpg'
      }, {
        id: 4,
        name: '小米手机',
        price: 1000,
        num: 1,
        img: 'img/d.jpg'
      }, {
        id: 5,
        name: 'PPTV电视',
        price: 1000,
        num: 2,
        img: 'img/e.jpg'
      }]
    }
  },
  components: {
    toubu: toubu,
    cartlist: cartlist,
    cartTotal: cartTotal
  }
};
</script>

<style>
.container .cart {
  width: 300px;
  /*background-color: lightgreen;*/
  margin: auto;
}

.container .title {
  background-color: lightblue;
  height: 40px;
  line-height: 40px;
  text-align: center;
  /*color: #fff;*/
}

.container .total {
  background-color: #ffce46;
  height: 50px;
  line-height: 50px;
  text-align: right;
}

.container .total button {
  margin: 0 10px;
  background-color: #dc4c40;
  height: 35px;
  width: 80px;
  border: 0;
}

.container .total span {
  color: red;
  font-weight: bold;
}

.container .item {
  height: 55px;
  line-height: 55px;
  position: relative;
  border-top: 1px solid #add8e6;
}

.container .item img {
  width: 45px;
  height: 45px;
  margin: 5px;
}

.container .item .name {
  position: absolute;
  width: 90px;
  top: 0;
  left: 55px;
  font-size: 16px;
}

.container .item .change {
  width: 100px;
  position: absolute;
  top: 0;
  right: 50px;
}

.container .item .change a {
  font-size: 20px;
  width: 30px;
  text-decoration: none;
  background-color: lightgray;
  vertical-align: middle;
}

.container .item .change .num {
  width: 40px;
  height: 25px;
}

.container .item .del {
  position: absolute;
  top: 0;
  right: 0px;
  width: 40px;
  text-align: center;
  font-size: 40px;
  cursor: pointer;
  color: red;
}

.container .item .del:hover {
  background-color: orange;
}
</style>
