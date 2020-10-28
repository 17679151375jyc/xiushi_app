<template>
  <div class="page">
    <div class="img_box_css">
      <div class="beijing-css"></div>
      <img src="@/assets/img/login_beijing.jpg" class="img_header_css" />
      <span class="mingcheng_css">名称</span>
    </div>
    <div class="gongge_css">
      <van-grid :column-num="4">
        <van-grid-item>
          <i class="iconfont iconquanbudingdan icon_css"></i>
          <span style="margin-top: 2vw">全部订单</span>
        </van-grid-item>
        <van-grid-item>
          <i class="iconfont icondaifukuan icon_css"></i>
          <span style="margin-top: 2vw">待支付</span>
        </van-grid-item>
        <van-grid-item>
          <i class="iconfont icondaishouhuo icon_css"></i>
          <span style="margin-top: 2vw">待收货</span>
        </van-grid-item>
        <van-grid-item>
          <i class="iconfont iconshouhou icon_css"></i>
          <span style="margin-top: 2vw">退款</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="list_box_css">
        <div class="dis_row_between_center li_css" v-for="(item, index) in caiList" :key="index">
            <div class="dis_row_between_center">
                <i :class="item.icon" style="font-size:4.8vw"></i>
                <span>{{item.title}}</span>
            </div>
            <i class="iconfont iconfanhuizuojiantouxiangzuoshangyibuxianxing"></i>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.img_box_css {
  width: 100vw;
  height: 38vw;
  background-color: #fff;
  overflow: hidden;
}
.gongge_css {
  width: 96vw;
  margin: 3vw auto;
  height: 17vw;
  margin-top: 5vw;
  background-color: #fff;
  font-size: 3.3vw;
  color: #fca85f;
}
.icon_css {
  font-size: 5vw;
  color: #fca85f;
}
.beijing-css {
  position: absolute;
  top: 0;
  height: 38vw;
  left: 0;
  right: 0;
  background: url("~@/assets/img/wodebeijing.jpg");
  z-index: 11;
  filter: blur(5px);
  background-size: cover;
}
.img_header_css {
  position: absolute;
  width: 20vw;
  height: 20vw;
  z-index: 11;
  top: 8vw;
  left: 10vw;
  border: 3px solid #fff;
  border-radius: 50%;
}
.mingcheng_css {
  position: absolute;
  width: 20vw;
  height: 20vw;
  z-index: 11;
  top: 20vw;
  left: 35vw;
  color: #333;
  font-size: 4.72vw;
}
.list_box_css {
  background: #fff;
  border-radius: 1vw;
  width: 96vw;
  margin: 3vw auto;
  margin-top: 6vw;
  height: 53vh;
  overflow-y: scroll;
}
.li_css{
    width: 92vw;
    padding: 0 2vw;
    height: 12vw;
    border-bottom: 1px solid #fafafa;
}
.li_css span{
    font-size: 3.7vw;
    margin-left:2.2vw
}
</style>