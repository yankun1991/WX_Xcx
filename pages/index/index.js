//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tz_home:function()
  {
     wx.navigateTo({
      url: '../home/home'
    })
  },
  ddh:function()
  {
    wx.makePhoneCall({
      phoneNumber: '17095461126' //仅为示例，并非真实的电话号码
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
       userInfo:userInfo
      })
    })
  }
})
