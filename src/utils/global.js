// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const global = new Vuex.Store({
  state: {
    token: null,
    pageName: '',
    deviceNumber: '',
    accountBalance: 0,
    tab: 0
  },
  mutations: {
    getToken: (state, token) => {
      const obj = state
      obj.token = token
    },
    setPageName: (state, name) => {
      const obj = state
      obj.pageName = name
    },
    scan: (state, name) => {
      const obj = state
      if (name !== '/pages/scan/main' && name !== '/pages/charge/main' && name !== '/pages/ICrecord/main') {
        wx.scanCode({
          onlyFromCamera: true, //是否只能从相机扫码，不允许从相册选择图片,
          success: res => {
            let result = res.path; // 当needResult 为 1 时，扫码返回的结果
            wx.navigateTo({
              url: '/' + result
            });
          },
          fail: () => {
            wx.switchTab({
              url: name
            });
          }
        });
      }
        
    },
    setBalance: (state, data) => {
      const obj = state
      obj.accountBalance = data

    },
    setMapTab: (state, tab) => {
      const obj = state
      obj.tab = tab
    }
  }
})

export default global
