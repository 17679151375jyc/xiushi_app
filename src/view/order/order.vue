<template>
  <div>
    <van-nav-bar
      title="订单详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs
      v-model="index"
      :animated="animated"
      swipeable
      color="#FCA85F"
      sticky
      offset-top="8vw"
      title-active-color="#FCA85F"
      title-inactive-color="#000"
    >
      <van-tab title="全部订单">
        <div class="daohangye_css">0</div>
      </van-tab>
      <van-tab title="待收货">
        <div class="daohangye_css">1</div>
      </van-tab>
      <van-tab title="退订/售后">
        <div class="daohangye_css">2</div>
      </van-tab>
      <van-tab title="评价">
        <div class="daohangye_css">3</div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      index: 0,
      animated: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    }
  },
  created() {
    let that = this;
    that.index = Number(that.$route.query.index);    
  },
  mounted(){
      this.animated = true;
  }
};
</script>
<style scoped>
</style>