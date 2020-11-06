<template>
  <div class="pageB">
    <van-nav-bar
      title="店铺主页"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-swipe :autoplay="4000" height="100">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="div_box_css"><span>华莱士（秀市店）</span></div>
    <div class="div_box_css div_box_css1">店铺电话： 12345678909</div>
    <div class="xuangou_css">店铺商品选购</div>
    <div class="dis_row_between_start">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item title="饮品" />
        <van-sidebar-item title="小吃" />
        <van-sidebar-item title="炒菜" />
        <van-sidebar-item title="粉面" />
      </van-sidebar>
      <div class="neirong_css">
        <purchase />
        <purchase />
        <purchase />
        <purchase />
        <purchase />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <div class="dis_row_between_center gouwu_css" @click.stop="gouwuClick">
      <div>已选<span>12.00</span>元</div>
      <div>配送费:<span>5</span>元</div>
      <div><span>30.00</span>元起送</div>
      <div>共：<span>30.00</span>元</div>
    </div>
    <van-popup
      round
      @close="close"
      v-model="idbuShow"
      position="bottom"
      style="height: 60%"
    >
      <div class="dis_column_between_center big_box_css">
        <div class="dis_row_between_center my_gou_css">
          <span class="yangshi_css">我的购物车</span>
          <div class="div_gou_css">
            <span>加</span>
            <span>5.00</span>
            <span>元配 送费，一共：</span>
            <span>30.00</span>
            <span>元</span>
          </div>
        </div>
        <div class="gundong_css">
          <!-- <van-empty description="空空如也" /> -->
          <div>
            <cartList />
            <cartList />
            <cartList />
            <cartList />
            <cartList />
            <cartList />
            <cartList />
          </div>
        </div>
        <div class="dis_row_between_center gouwu_dibu_css">
          <span>清空所有</span>
          <span style="color: #38f" @click="pushClick">立即下单</span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      idbuShow: false,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
      activeKey: 0,
    };
  },
  components: {
    purchase: () => import("@/components/purchase.vue"),
    cartList: () => import("@/components/cartList.vue"),
  },
  methods: {
    pushClick(){
      this.$router.push({path:'/personalCenter/settlement'})
    },
    close() {
      this.idbuShow = false;
    },
    gouwuClick() {
      this.idbuShow = true;
    },
    onChange() {},
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
>>> .van-popup--bottom {
  z-index: 1000000 !important;
}
>>> .van-empty__image {
  height: 35vw;
}
.div_box_css {
  width: 92vw;
  height: 10vw;
  line-height: 10vw;
  padding: 2vw;
  background-color: #fff;
  margin: 2vw auto;
  border-radius: 1vw;
}
.div_box_css span {
  font-size: 5vw;
  font-weight: bold;
  color: #333;
}
.div_box_css1 {
  height: 8vw;
  line-height: 8vw;
  padding: 0 2vw;
  font-size: 3.74vw;
}
.xuangou_css {
  width: 92vw;
  height: 10vw;
  font-size: 4.2vw;
  font-weight: bold;
  padding: 0 4vw;
  line-height: 10vw;
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
}
.neirong_css {
  width: 81vw;
  height: calc(100vh - 78vw);
  overflow-y: scroll;
  background-color: #fff;
}
.big_box_css {
  width: 100%;
  height: 100%;
}
.gouwu_css {
  position: fixed;
  left: 2vw;
  right: 2vw;
  width: 92vw;
  bottom: 2vw;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100000;
  height: 10vw;
  border-radius: 10vw;
  padding: 2vw;
  color: #fff;
  font-size: 3vw;
}
.gouwu_css span {
  font-size: 4.7vw;
  color: #fcd95f;
}
.my_gou_css {
  width: 96vw;
  padding: 0 2vw;
  height: 15vw;
}
.yangshi_css {
  font-size: 4vw;
  font-weight: bold;
  color: #333;
}
.div_gou_css {
  font-size: 3.4vw;
  color: #888;
}
.div_gou_css span:nth-child(2) {
  margin: 0 1vw;
}
.div_gou_css span:nth-child(2n) {
  color: red;
  font-weight: bold;
  font-size: 4vw !important;
}
.gundong_css {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.gouwu_dibu_css {
  width: 88vw;
  padding: 0 6vw;
  height: 20vw;
  background-color: #fafafa;
  border-top: 1px solid #e4e3e3;
  font-size: 4vw;
  color: #888;
}
.gouwu_dibu_css span{
  display: block;
  width: 23vw;
  line-height: 7vw;
  height: 7vw;
  background-color: #fff;
  border:1px solid #DEDDDD;
  border-radius: 10vw;
  color: #555;
  text-align: center;
  font-size: 3.74vw;
}
.gouwu_dibu_css span:last-child{
  border:1px solid #38f;
}
</style>