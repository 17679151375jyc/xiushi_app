<template>
  <div>
    <van-nav-bar
      title="结算订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="page_css">
      <div class="dis_column_center_center top_box_css">
        <div  class="dis_row_between_center" @click="addressClick">
          <span v-if="!form.adList.name" style="margin-right: 1vw"
            >选择收货地址<i
              class="iconfont iconfanhuizuojiantouxiangzuoshangyibuxianxing fontsize"
              style="margin-left: 1vw"
          /></span>
          <span v-else>{{form.adList.name}} — {{form.adList.tel}}<br/>{{form.adList.address}}</span>
        </div>
        <div class="dis_row_between_center" @click="songClick">
          <span style="margin-right: 1vw"
            >送出时间<i
              class="iconfont iconfanhuizuojiantouxiangzuoshangyibuxianxing fontsize"
              style="margin-left: 1vw"
          /></span>
          <span>{{ form.songTime }}</span>
        </div>
      </div>
      <div class="top_box_css zhifu_css">
        <div class="dis_row_between_center">
          <span style="margin-right: 1vw"
            >支付方式<i
              class="iconfont iconfanhuizuojiantouxiangzuoshangyibuxianxing fontsize"
              style="margin-left: 1vw"
          /></span>
          <span>{{ form.zhifuType }}</span>
          <!-- <span>在线支付</span> -->
        </div>
      </div>
      <div class="top_box_css">
        <div v-for="(item, index) in 2" :key="index">
          <div class="dis_row_between_center shangpin_css">
            <span>店铺名称</span>
            <span style="font-weight: normal;font-size:3vw"
              >每天14:00~18:00配送</span
            >
          </div>
          <div class="dis_row_between_center pinzhong_css">
            <img src="@/assets/img/login_beijing.jpg" class="img_css" />
            <div class="dis_column_space_start neirong_css">
              <span style="font-weight: bold">菜单1</span>
              <span>× <span class="color8">23</span> </span>
            </div>
            <div class="money_css">
              <span>￥：</span>
              <span>26.00</span>
            </div>
          </div>
        </div>
        <div class="youhui_css" v-if="false">
          <div class="dis_row_between_center">
            <span style="margin-right: 1vw"
              >选择优惠券<i
                class="iconfont iconfanhuizuojiantouxiangzuoshangyibuxianxing fontsize"
                style="margin-left: 1vw"
            /></span>
          </div>
        </div>
        <div class="youhui_css">
          <div class="dis_row_between_center">
            <span style="margin-right: 1vw">配送费</span>
            <span>新人免配送费</span>
          </div>
        </div>
        <div class="youhui_css">
          <div class="dis_row_between_center">
            <span style="font-weight: bold">共计：</span>
            <span style="font-weight: bold"  v-if="false">已优惠5。00元</span>
            <span class="color8" style="font-weight: bold; font-size: 4vw"
              >52.00</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="dis_row_around_center dibu_css">
      <span @click="$router.back()">返回</span>
      <div>|</div>
      <span>下单</span>
    </div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
    <van-popup v-model="songShow" position="bottom" :style="{ height: '50%' }">
      <van-picker
        title="何时配送"
        show-toolbar
        :columns="songList"
        @confirm="songOnConfirm"
        @cancel="songOnCancel"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      songShow: false,
      form: {
        adList: {
            name: "",
            tel: "",
            address: ""
        },
        songTime: "",
        zhifuType: "货到付款",
      },
    };
  },
  watch: {
    $route(to, from) {
      if (from.name === "address") {
        let list = JSON.parse(localStorage.getItem("addressData"));
        this.form.adList = list
        console.log(list);
      }
    },
  },
  methods: {
    //配送时间
    songClick() {
      this.songShow = true;
    },

    songOnConfirm(value) {
      this.form.songTime = value
      this.songShow = false;
    },
    songOnCancel() {
      this.songShow = false;
    },
    //选地址
    addressClick() {
      this.$router.push({ path: "/personalCenter/settlement/address" });
    },
    //返回
    onClickLeft() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.top_box_css {
  width: 94vw;
  min-height: 30vw;
  border-radius: 3vw;
  margin: 3vw auto;
  background-color: #fff;
}
.top_box_css:last-child {
  margin-bottom: 20vw;
}
.top_box_css div {
  width: 94%;
  min-height: 15vw;
  font-size: 4vw;
}
.top_box_css div:first-child {
  border-bottom: 3px solid #fafafa;
}
.zhifu_css {
  width: 94vw;
  min-height: 15vw;
}
.zhifu_css div {
  width: 94%;
  margin: 0 auto;
  border-bottom: 0 !important;
}
.shangpin_css {
  width: 100%;
  margin: 0 auto;
  line-height: 15vw;
  font-weight: bold;
  font-size: 4vw;
}
.pinzhong_css {
  width: 100%;
  height: 100%;
  padding: 2vw;
}
.img_css {
  width: 20vw;
  height: 20vw;
  border-radius: 3vw;
}
.neirong_css {
  height: 20vw;
  margin-left: 3vw;
}
.money_css {
  height: 20vw;
  line-height: 30vw;
  text-align: right;
  color: red;
  font-size: 4vw;
}
.youhui_css {
  border-top: 1px solid #fafafa;
  margin-top: 3vw;
  width: 94vw;
  height: 15vw;
  padding: 0 3vw;
}
.dibu_css {
  width: 100vw;
  height: 15vw;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  border-top: 1px solid #ccc;
}
.dibu_css span {
  width: 28vw;
  height: 9vw;
  border: 1px solid #ccc;
  color: #000;
  border-radius: 5vw;
  font-size: 3.74vw;
  line-height: 9vw;
  text-align: center;
}
.dibu_css span:last-child {
  background-color: #fca85f;
  border: 2px solid #fff;
  color: #fff;
  height: 9.2vw;
  line-height: 9.2vw;
}
.dibu_css div {
  color: #fff;
}
</style>