// pages/wxml/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    app: getApp(),//app.js里的globalData
    time: (new Date()).toString(),
    getdata:"1",
    postdata:"2",
    // data2:"?????",
  },

//   logBtn: function(options){
// wx.navigateTo({
//   url: '../index/index',
// })
// wx.redirectTo({
//   url: '../index/index',
// })
//   },
//不兼容tabBar 

/**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }  ,

  getbaidu:function(){
    var that=this
    let promise = new Promise(function (resolve, reject) {
      wx.request({
        url: "http://mizushio.top",
        header: {'content-type': 'application/json'},
        data: {'k':'l'},
        method: 'GET',
        success: function (res) {
          //返回结果自行处理
          console.log('返回结果：')
          // data2=res.data
          // that.data.getdata=res.data
          that.setData({
            getdata:res.data
          })
          console.log(res.data)
          // app.netWorkData.result = res.data
          resolve();
  
        }
      })
    });
  },

  postto:function(){
  var that=this
    wx.request({
      url: "http://mizushio.top:8080/QQsendGroupMessage",
      header: {'content-type': 'application/json'},
      data: {'groupid':'985100249',"msg":"百度，日常测试，无视就行"},
      method: 'POST',
      success: function (res) {
        //自行处理返回结果
        console.log('返回结果：')
        console.log(res.data)
        that.setData({
          postdata:res.data
        })
        // app.netWorkData.result = res.data
        resolve();
      }

    })
  },
})

//post请求 url：请求路径，请求header，params请求参数，app全局变量
function networkpost(url, headers, params, app) {
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      header: headers,
      data: params,
      method: 'POST',
      success: function (res) {
        //自行处理返回结果
        console.log('返回结果：')
        console.log(res.data)
        // app.netWorkData.result = res.data
        resolve();
      }

    })
});
return promise;
}
//get请求
function networkget(url, headers, params, app) {
  let promise = new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      header: headers,
      data: params,
      method: 'GET',
      success: function (res) {
        //返回结果自行处理
        console.log('返回结果：')
        console.log(res.data)
        app.netWorkData.result = res.data
        resolve();

      }
    })
  });
  return promise;
}   