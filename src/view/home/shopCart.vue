<template>
  <div class="page">
    <div class="dis_row_between_center guanli_css">
      <span>购物车</span>
      <span @click="guanli" :style="{'color': !guanShow?'red':''}">{{ butText }}</span>
    </div>
    <span class="span_shu_css">共3件宝贝</span>
    <div class="sro_css"  v-if="list.length>0">
      <div class="gouwu_css" v-for="(item, index) in list" :key="index">
        <van-checkbox v-model="item.checked" checked-color="#FCA85F" class="kuang-css">{{
          item.marketName
        }}</van-checkbox>
        <van-card
          style="background-color: #ffffff"
          :price="item.price"
          :title="item.name"
          :desc="item.describe"
          :thumb="item.img"
        >
          <template #footer>
            <van-stepper v-model="item.num" />
          </template>
        </van-card>
      </div>
    </div>
    <div v-else>
        <van-empty description="购物车空空如也"/>
    </div>
    <transition name="top_bottom" v-if='list.length>0'>
      <div class="dis_row_between_center show_box_css">
        <van-checkbox checked-color="#FCA85F" v-model="showTrue" class="kuang-css" @click="allShow"
          >全选</van-checkbox
        >
        <van-button
          style="margin-right: 5vw"
          :type="guanShow ? 'danger' : 'warning'"
          size="normal"
          @click="queren"
          >{{ butText1 }}</van-button
        >
      </div>
    </transition>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "",
  data() {
    return {
      butText: "删除",
      butText1: "结算",
      guanShow: false,
      showTrue: false,
      list: [
        {
          checked: false,
          marketName: "超市1",
          name: "珍珠奶茶",
          describe: "珍珠奶茶的描述",
          img: "https://img.yzcdn.cn/vant/ipad.jpeg",
          pirce: "2.00",
          num: 2,
        },
        {
          checked: false,
          marketName: "超市2",
          name: "珍珠奶茶2",
          describe: "珍珠奶茶的描述2",
          img: "https://img.yzcdn.cn/vant/ipad.jpeg",
          pirce: "3.00",
          num: 4,
        },
        {
          checked: false,
          marketName: "超市1",
          name: "珍珠奶茶",
          describe: "珍珠奶茶的描述",
          img: "https://img.yzcdn.cn/vant/ipad.jpeg",
          pirce: "2.00",
          num: 2,
        },
      ],
    };
  },
  watch: {
    list: {
      handler: function (val) {
        let show = true;
        val.forEach((item) => {
          if (!item.checked) {
            show = false;
          }
        });
        this.showTrue = show;
      },
      deep: true,
    },
    guanShow: function (val) {
      if (val) {
        this.butText = "取消";
        this.butText1 = "删除";
      } else {
        this.butText = "删除";
        this.butText1 = "结算";
      }
    },
  },
  methods: {
    guanli() {
      this.guanShow = !this.guanShow;
      console.log(this.guanShow);
    },
    allShow() {
      let that = this;
      this.list.forEach((item) => {
        item.checked = that.showTrue;
      });
    },
    queren() {
      if (!this.guanShow) {
        console.log('结算');
        return;
      }
      Dialog.confirm({
        title: "确定删除吗",
      }).then(() => {
          console.log('删除');
        }).catch(() => {});
    },
  },
};
</script>
<style scoped>
>>> .van-card__title {
  font-size: 3.74vw;
  font-weight: bold;
}
>>> .van-stepper {
  margin-top: -26px;
}
>>> .van-button {
  height: 33px;
}
.guanli_css {
  width: 88vw;
  padding: 2vw;
  margin: 0 auto;
  height: 5vw;
  margin-top: 3vw;
}
.span_shu_css {
  display: block;
  font-size: 3.2vw;
  width: 88vw;
  padding: 0 2vw;
  margin: 0 auto;
}
.guanli_css span:first-child {
  font-weight: bold;
  font-size: 4vw;
}
.guanli_css span:last-child {
  font-size: 3.2vw;
}
.gouwu_css {
  width: 96vw;
  height: 34vw;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 3vw;
  margin-top: 3vw;
  padding-top: 10px;
  overflow: hidden;
}
.gouwu_css:last-child {
  margin-bottom: 15vw;
}
.sro_css {
  margin: 0 auto;
  width: 96vw;
  height: 85vh;
  overflow-y: scroll;
}
.kuang-css {
  margin-left: 5vw;
}
.show_box_css {
  position: absolute;
  bottom: 0vw;
  left: 0;
  right: 0;
  border-top: 1px solid #ccc;
  background: #fff;
  height: 10vw;
}
</style>