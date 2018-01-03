//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '你好，小蕾',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var $this = this;
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res);
        $this.setData({
          location: res
        })
      }
    })
    if (app.globalData.userInfo) {
      $this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        location:{
          longitude:'',
          latitude:''
        }
      })
    } else if ($this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        $this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          $this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  markertap: function(e){
    alert("saffsfa")
  },
  scancode: function(e) {
    var $this = this;
    wx.scanCode({
      success: (res) => {
        console.log(res);
        $this.setData({
          saoyisao: res
        })
      }
    })
  },
  payment: function(){
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        
      },
      'fail': function (res) {
      }
    })
  }
})
