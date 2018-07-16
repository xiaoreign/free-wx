<template>
<div  class="">
  index
</div>
    
</template>

<script>
import global from "../../utils/global";
import http from "../../utils/request";
import Vue from "vue";

export default {
  data() {
    return {
    }
  },
 created() {
    // 调用应用实例的方法获取全局数据
  },
  onShow() {
    
  },
  onPullDownRefresh: function() {
    setTimeout(() => {

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
  width: 100%;
  margin-top: 300rpx;
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
</style>
