<template>
  <div>
    <van-tabs
      animated
      swipeable
      color="#FCA85F"
      title-active-color="#FCA85F"
      title-inactive-color="#000"
    >
      <van-tab title="猜你喜欢">
        <div class="daohangye_css">
          <shopBox @commodityClick="commodityClick"/>
          <shopBox />
          <shopBox />
        </div>
      </van-tab>
      <van-tab title="推荐店铺">
        <div class="daohangye_css">
          <shopBox />
          <shopBox />
          <shopBox />
        </div>
      </van-tab>
      <van-tab title="今日特价">
        <div class="daohangye_css">
          <shopBox />
          <shopBox />
          <shopBox />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {
    shopBox: () => import("@/components/shopBox.vue"),
  },
  methods: {
    commodityClick(){
      this.$router.push({path:'/order/commodityDetail'})
    }
  },
};
</script>
<style scoped>
.daohangye_css {
  width: 100%;
  background-color: yellow;
}
</style>