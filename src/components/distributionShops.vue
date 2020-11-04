<template>
  <div>
    <div class="dis_row_between_center div_box_css" @click="distributionShops">
      <img src="@/assets/img/login_beijing.jpg" class="img_css" />
      <div class="dis_row_between_center" style="background-color: #ffffff;border-radius: 3vw;">
        <div class="div_css">
          <div class="dis_css dis1">华莱士（秀市店）</div>
          <div class="dis_css dis2">30.00起送，70免配送费</div>
          <div class="dis_css dis3">
            主营：汉堡、炸鸡、小吃、汉堡、炸鸡、小吃、炸鸡、小吃、汉堡、炸鸡、小吃
          </div>
          <div class="dis_css dis3">配送时间：14:00-16:00</div>
        </div>
        <div class="dis_row_center_center yingye_box_css">
          <span class="yingye-css">正在营业</span>
        </div>
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
  methods: {
      distributionShops(){
          this.$emit('distributionShops')
      }
  },
};
</script>
<style scoped>
.div_box_css {
  width: 92vw;
  height: 24vw;
  padding: 2vw;
  border-radius: 2vw;
  margin: 3vw auto;
  background-color: #fafafa;
  overflow: hidden;
}
.img_css {
  width: 21vw;
  height: 21vw;
  border-radius: 2vw;
}
.div_css {
  width: 55vw;
  height: 22vw;
}
.dis_css {
  width: 54vw;
  padding: 0 2vw;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dis1 {
  font-size: 3vw;
  font-weight: bold;
}
.dis2 {
  font-size: 3.74vw;
  color: #999;
}
.dis3 {
  font-size: 3.74vw;
  color: #999;
}
.yingye_box_css {
  width: 15vw;
  height: 100%;
}
.yingye-css {
  width: 10vw;
  height: 10vw;
  padding: 2vw;
  display: block;
  border-radius: 2vw;
  background-color: #fca85f;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 3.74vw;
}
</style>