import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()
export default {
    config: {
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "有空么",
        "backgroundColor": "#eeeeee",
        "backgroundTextStyle": "light",
        "usingComponents": {
            "i-cell-group": "../../static/iview/cell-group/index",
            "i-cell": "../../static/iview/cell/index",
            "i-spin": "../../static/iview/spin/index",
            "i-modal": "../../static/iview/modal/index"
        }
    }
}