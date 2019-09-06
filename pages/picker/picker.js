//picker.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: '选择器',
    region: ['广东省', '广州市', '海珠区'],
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
})
