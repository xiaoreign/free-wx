<template>
<div  class="spin-article outSide">
  <div class="weather">
    <span class="tq">
          {{weather}}
    </span>
    <div class="wd">
      <p>{{temperature}}°C</p>
      <p>{{district}}</p>
    </div>
  </div>
  <div class='header'>
   <!-- <div class="userinfo-avatar">
      <open-data  style="margin-top:50rpx;" type="userAvatarUrl"></open-data>
   </div>
   <div class="userinfo_name">
      <open-data type="userNickName"></open-data>
   </div> -->
    <p class="intro1">有空么是一款同城互助&技能分享平台</p>
    <p class="intro2">你有需要 · 我来解决</p>
  </div>
  <div class="ation">
    <div class="skill">
      <div class="content" @click="skill()">
        <img src="/static/images/skill.png" alt="">
        <p>我有技能</p>
      </div>
      <div class="content" @click="request()">
        <img src="/static/images/request.png" alt="">
        <p>我有任务</p>
      </div>
    </div>
  </div>
  <div class="cancel">
    <img src="/static/images/cancel.png" alt="" @click="cancel()">
  </div>
  <i-spin size="large" fix v-if="spinShow" custom>
    <view class="loading"></view>
  </i-spin>
  <i-modal title="获取微信授权信息" :visible="isValidated" :actions="actions" @iclick="getUserInfo">
    <view>微信登录需要获取您的用户信息</view>
</i-modal>
</div>
    
</template>

<script>
import global from "../../utils/global";
import http from "../../utils/request";
import Vue from "vue";

export default {
  data() {
    return {
      spinShow: true,
      isValidated: false,
      district:'',
      adcode:'',
      weather:'',
      temperature:'',
      actions: [
        {
          name: "设置"
        }
      ]
    };
  },
  methods: {
    getUserInfo() {
      this.isValidated = false;
    },
    getInfo() {
      let that = this;
      http.get("/auth/data").then(res => {
        if (res.data.success) {
          this.data = res.data.data;
        }
      });
    },
    getLocation() {
      let key = "a484a8827277db318893345de46f2549";
      wx.getLocation({
        type: "gcj02",
        success: res => {
          var latitude = res.latitude;
          var longitude = res.longitude;
          let req = {
            output: 'json',
            location: longitude + "," + latitude,
            key: key
          };
          http
            .get("https://restapi.amap.com/v3/geocode/regeo",req)
            .then(res => {
              let data = res.data
              console.log(data.regeocode.addressComponent.district)
              this.district = data.regeocode.addressComponent.district
              this.adcode = data.regeocode.addressComponent.adcode
              let r = {
                city:this.adcode,
                key: key
              }
              http
                .get("https://restapi.amap.com/v3/weather/weatherInfo",r)
                .then(res => {
                  let data = res.data.lives[0]
                  this.weather = data.weather;
                  this.temperature = data.temperature;
                });
            });
        }
      });
    },
    skill(){
      console.log('有技能')
    },
    request(){
      console.log('有任务')
    },
    request(){
      console.log('取消')
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
  },
  onShow() {
    let timer = setInterval(() => {
      if (global.state.token) {
        clearInterval(timer);
        this.spinShow = false;
        this.getInfo();
        this.getLocation();
      }
    }, 500);
  },
  onPullDownRefresh: function() {
    setTimeout(() => {
      http.get("/auth/data").then(res => {
        if (res.data.status == "success") {
          this.data = res.data.data;
          wx.hideNavigationBarLoading(); //完成停止加载
          wx.stopPullDownRefresh(); //停止下拉刷新
        }
      });
    }, 500);
  }
};
</script>

<style scoped>
.userinfo-avatar {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  border: 2px solid #faf0e6;
  z-index: 1;
  margin: 0 auto;
  position: relative;
  top: 50rpx;
}
.userinfo_name {
  /* color: ; */
  margin: 80rpx 0 0 0;
  z-index: 1;
}
.header {
  clear: both;
  width: 100%;
  margin-top: 30%;
  text-align: center;
  color: rgb(239, 159, 63);
}
.intro1 {
  font-size: 18px;
}
.intro2 {
  font-size: 24px;
}
.outSide {
  width: 100%;
  height: 100%;
  background: rgb(75, 75, 75);
  position: absolute;
}
.weather{
  color:white;
  padding-left:35px;
  padding-top:60px;
}
.tq{
  float:left;
  font-size:40px;
}
.wd{
  margin-left: 10px;
  float:left;
}
.ation{
  position: absolute;
  bottom: 200rpx;
  width: 100%;
}
.skill{
  text-align: center;
  padding-left:10%;
  padding-right:10%;
}
.content img{
  height:130rpx;
  width:130rpx;
}
.cancel{
  width:200rpx;
  position: absolute;
  bottom: 50rpx;
  left:50%;
  margin-left:-45rpx;
}
.cancel img{
  margin: 0 auto;
  height:90rpx;
  width:90rpx;
}
.skill p{
  color:white;
  font-size: 16px;
}
.content{
  float: left;
  width:34%;
  padding:0 8%;
}

</style>
