// app.js
App({
  /**
   * 开始时初始化一次
   */
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  /**
   * 后台到前台就触发
   * @param  options 
   */
  onShow:function(options){

  },
  /**
   * 前台到后台触发
   * @param  options 
   */
  onHide:function(options){

  },
  /**
   * 错误发生触发
   * @param options 
   */
  onError:function(options){

  },
  /**
   * 需要打开的页面不存在
   * @param  options 
   */
  onPageNotFound:function(options){
wx.switchTab({
  url: 'pages/logs/logs',
})
  },
  globalData: {
    userInfo: null,
    data1: "全局数据"
  }
})
