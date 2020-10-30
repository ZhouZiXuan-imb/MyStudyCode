
const  vm = Vue.createApp({
  // 数据
  data() {
    return {
      checked:'',
      price:'',
      datas:[
        { pName: '牛奶', src: './uploads/01.jpg', price: 10, count: 1 },
        { pName: '三只松鼠', src: './uploads/02.jpg', price: 30, count: 1 },
        { pName: '蓝牙播放器', src: './uploads/03.jpg', price: 100, count: 1 },
        { pName: '大米', src: './uploads/04.jpg', price: 50, count: 1 },
        { pName: '路由器', src: './uploads/05.jpg', price: 110, count: 1 },
        { pName: '罐头', src: './uploads/06.jpg', price: 20, count: 1 }
      ]
    }
  },
  // 写方法
  methods:{
    // 点击商品复选框判断是否全选 如果全部选中 就让上面的全选按钮选中
    handleChecked() {
      $('thead input[type="checkbox"]')[0].checked = $('tbody input[type="checkbox"]:checked').length == ($('input[type="checkbox"]').length - 1);
    },
    checkAll() {
      if($('thead input[type="checkbox"]')[0].checked) {
        for(let i = 0 ;  i < $('tbody input[type="checkbox"]').length;i++) {
          $('tbody input[type="checkbox"]')[i].checked = true
        }
      } else {
        for(let i = 0 ;  i < $('tbody input[type="checkbox"]').length;i++) {
          $('tbody input[type="checkbox"]')[i].checked = false
        }
      }
    },
    created() {
      console.log($('.price'))
    },
  }
}).mount('#app')