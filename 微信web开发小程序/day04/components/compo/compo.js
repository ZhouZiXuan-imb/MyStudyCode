// components/compo/compo.js
Component({
  // 开启多插槽
  options:{
    multipleSlots:true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    propNumber: {
      type: Number,
      value: ""
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    name: "周子轩"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleAdd() {
      console.log(this.properties.propNumber);
      this.setData({
        propNumber: this.properties.propNumber + 1
      })
    },
  },
  observers: {
    "propNumber": function () {
      this.setData({
        name: "周周"
      })
    }
  }
})