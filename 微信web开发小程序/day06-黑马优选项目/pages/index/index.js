Page({

  // 轮播图数据方法
  getSwiperItem() {
    var _this = this
    wx.request({
      url: "https://www.uinav.com/api/public/v1/home/swiperdata",
      method: "GET",
      success: function (res) {
        if (res.data.meta.status == 200) {
          _this.setData({
            swiperItem: res.data.message
          })
        }
      }
    })
  },
  // 获取分类数据方法
  getCateItem() {
    var _this = this
    wx.request({
      url: "https://www.uinav.com/api/public/v1/home/catitems",
      method: "GET",
      success: function (res) {
        if (res.data.meta.status == 200) {
          _this.setData({
            catitems: res.data.message
          })
        }
      }
    })
  },
  // 获取首页楼层数据方法
  getFloor() {
    var _this = this
    wx.request({
      url: 'https://www.uinav.com/api/public/v1/home/floordata',
      method: "GET",
      success: function (res) {
        if (res.data.meta.status == 200) {
          console.log(res);
          _this.setData({
            FloorData: res.data.message
          })
        }
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    // 首页轮播图数据
    swiperItem: [],
    // 首页分类数据
    catitems: [],
    // 首页楼层数据
    FloorData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // 获取轮播图数据方法
    this.getSwiperItem();
    // 获取分类数据方法
    this.getCateItem();
    // 获取首页楼层数据方法
    this.getFloor();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})