global.webpackJsonp([1],{

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_49ad94e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(37);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(33)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-49ad94e4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_49ad94e4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/welcome/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-49ad94e4", Component.options)
  } else {
    hotAPI.reload("data-v-49ad94e4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(12);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        "navigationBarBackgroundColor": "#ffffff",
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "有空么",
        "backgroundColor": "#eeeeee",
        "backgroundTextStyle": "light",
        "enablePullDownRefresh": true,
        "usingComponents": {
            "i-cell-group": "../../static/iview/cell-group/index",
            "i-cell": "../../static/iview/cell/index",
            "i-spin": "../../static/iview/spin/index",
            "i-modal": "../../static/iview/modal/index"
        }
    }
});

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_global__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_request__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      spinShow: true,
      isValidated: false,
      district: '',
      adcode: '',
      weather: '',
      temperature: '',
      actions: [{
        name: "设置"
      }]
    };
  },

  methods: {
    getUserInfo: function getUserInfo() {
      this.isValidated = false;
    },
    getInfo: function getInfo() {
      var _this = this;

      var that = this;
      __WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */].get("/auth/data").then(function (res) {
        if (res.data.success) {
          _this.data = res.data.data;
        }
      });
    },
    getLocation: function getLocation() {
      var _this2 = this;

      var key = "a484a8827277db318893345de46f2549";
      wx.getLocation({
        type: "gcj02",
        success: function success(res) {
          var latitude = res.latitude;
          var longitude = res.longitude;
          var req = {
            output: 'json',
            location: longitude + "," + latitude,
            key: key
          };
          __WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */].get("https://restapi.amap.com/v3/geocode/regeo", req).then(function (res) {
            var data = res.data;
            _this2.district = data.regeocode.addressComponent.district;
            _this2.adcode = data.regeocode.addressComponent.adcode;
            var r = {
              city: _this2.adcode,
              key: key
            };
            __WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */].get("https://restapi.amap.com/v3/weather/weatherInfo", r).then(function (res) {
              var data = res.data.lives[0];
              _this2.weather = data.weather;
              _this2.temperature = data.temperature;
            });
          });
        }
      });
    },
    skill: function skill() {
      console.log('有技能');
    },
    request: function request() {
      console.log('有任务');
    },
    cancel: function cancel() {
      console.log('取消');
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
  },
  onShow: function onShow() {
    var _this3 = this;

    var timer = setInterval(function () {
      if (__WEBPACK_IMPORTED_MODULE_0__utils_global__["a" /* default */].state.token) {
        clearInterval(timer);
        _this3.spinShow = false;
        _this3.getInfo();
        _this3.getLocation();
      }
    }, 500);
  },

  onPullDownRefresh: function onPullDownRefresh() {
    var _this4 = this;

    setTimeout(function () {
      __WEBPACK_IMPORTED_MODULE_1__utils_request__["a" /* default */].get("/auth/data").then(function (res) {
        if (res.data.status == "success") {
          _this4.data = res.data.data;
          wx.hideNavigationBarLoading(); //完成停止加载
          wx.stopPullDownRefresh(); //停止下拉刷新
        }
      });
    }, 500);
  }
});

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "spin-article outSide"
  }, [_c('div', {
    staticClass: "weather"
  }, [_c('span', {
    staticClass: "tq"
  }, [_vm._v("\n          " + _vm._s(_vm.weather) + "\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "wd"
  }, [_c('p', [_vm._v(_vm._s(_vm.temperature) + "°C")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.district))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "header"
  }, [_c('p', {
    staticClass: "intro1"
  }, [_vm._v("有空么是一款同城互助&技能分享平台")]), _vm._v(" "), _c('p', {
    staticClass: "intro2"
  }, [_vm._v("你有需要 · 我来解决")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ation"
  }, [_c('div', {
    staticClass: "skill"
  }, [_c('div', {
    staticClass: "content",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.skill()
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/skill.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("我有技能")])], 1), _vm._v(" "), _c('div', {
    staticClass: "content",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.request()
      }
    }
  }, [_c('img', {
    attrs: {
      "src": "/static/images/request.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v("我有任务")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "cancel"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/cancel.png",
      "alt": "",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.cancel()
      }
    }
  })]), _vm._v(" "), (_vm.spinShow) ? _c('i-spin', {
    attrs: {
      "size": "large",
      "fix": "",
      "custom": "",
      "mpcomid": '0'
    }
  }, [_c('view', {
    staticClass: "loading"
  })]) : _vm._e(), _vm._v(" "), _c('i-modal', {
    attrs: {
      "title": "获取微信授权信息",
      "visible": _vm.isValidated,
      "actions": _vm.actions,
      "eventid": '3',
      "mpcomid": '1'
    },
    on: {
      "iclick": _vm.getUserInfo
    }
  }, [_c('view', [_vm._v("微信登录需要获取您的用户信息")])])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-49ad94e4", esExports)
  }
}

/***/ })

},[15]);
//# sourceMappingURL=main.js.map