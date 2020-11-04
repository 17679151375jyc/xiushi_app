<template>
  <div class="pageA">    
    <van-nav-bar
      title="单号001代购清单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="page_css">
        <div class="hezi_css">
            <span class="jiaobiao_css">01</span>
            <img class="img_css" src="@/assets/img/login_beijing.jpg">
        </div>
        <div class="hezi_css"></div>
        <div class="hezi_css"></div>
        <div class="hezi_css"></div>
        <div class="hezi_css"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
      onClickLeft(){
          this.$router.back()
      }
  },
};
</script>
<style scoped>
.hezi_css{
    width: 40vw;
    height: 50vw;
    background-color: #fff;
    float: left;
    margin-top: 3vw;
    border-radius: 2.5vw;
    position: relative;
    overflow: hidden;
}
.hezi_css:nth-child(2n+1){
    margin-left: 6vw;
}
.hezi_css:nth-child(2n){
    margin-left: 7vw;
}
.hezi_css:last-child{
    margin-bottom: 10vw;
}
.jiaobiao_css{
    background-color: #FCA85F;
    position: absolute;
    left: -6vw;
    top: 0vw;
    width: 15vw;
    text-align: center;
    display: block;
    padding: 1vw;
    font-size: 3vw;
    color: #fff;
    transform: rotate(-45deg);
}
.img_css{
    width: 100%;
    height: 30vw;
}
</style>