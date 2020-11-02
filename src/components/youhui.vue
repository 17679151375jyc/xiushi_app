<template>
  <div>
    <div class="dis_row_between_center youhui_css">
      <div class="hongquyu_css" :style="{'background-color':colors(types)}">
        <span class="yuandian_css" style="left: -3vw"></span>
        <div class="dis_row_center_center qian_css">
          <span class="fuhao_css">￥：</span>
          <span class="jutiqian_css">50</span>
        </div>
        <span class="man_css">满100可用</span>
      </div>
      <div class="wenziquyu_css">
        <span class="yuandian_css" style="right: -4vw"></span>
        <div v-if="types != 'hui'" class="liji_css"  :style="{'background-color':colors(types)}">立即使用</div>
        <div class="dis_column_start_start wenan_css">
          <span class="xinren_css">新人专属券</span>
          <div style="margin-left: 3vw">
            <span class="qixian_css">范围：仅限外卖可用</span>
            <span class="qixian_css">有限期至：2020-11-03</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "youhui",
  data() {
    return {};
  },
  props:{
      types:{
          default: 'cheng'
      }
  },
  methods: {
      colors(type){
          let str = '#ff8454';
          switch(type){
              case 'cheng':
               str = '#ff8454'
               break;
              case 'hong':
               str = 'red'
               break;
              case 'lan':
               str = '#3388ff'
               break;
              case 'hui':
               str = '#ccc'
               break;
          }
          return str;
      }
  },
};
</script>
<style scoped>
.youhui_css {
  width: 92vw;
  padding: 1vw;
  height: 24vw;
  background-color: #fff;
  margin: 0 auto;
  margin-bottom: 3vw;
}
.hongquyu_css {
  width: 35%;
  height: 100%;  
  position: relative;
}
.wenziquyu_css {
  width: 65%;
  height: 100%;
  background-color: #ffffff;
  position: relative;
}
.yuandian_css {
  position: absolute;
  top: 40%;
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
  background-color: #fafafa;
}
.qian_css {
  width: 80%;
  margin: 0 auto;
  height: 10vw;
  margin-top: 3vw;
}
.fuhao_css {
  display: block;
  line-height: 14vw;
  color: #fff;
  height: 10vw;
  font-size: 3.74vw;
}
.jutiqian_css {
  color: #fff;
  font-size: 10vw;
  font-weight: bold;
}
.man_css {
  font-size: 3.74vw;
  color: #fff;
  width: 80%;
  display: block;
  text-align: center;
  margin: 0 auto;
  margin-top: 3vw;
}
.wenan_css {
  width: 100%;
  height: 100%;
}
.xinren_css {
  width: 80%;
  display: block;
  margin: 0 auto;
  font-size: 5vw;
  margin-top: 1vw;
  margin-left: 3vw;
}
.qixian_css {
  margin-top: 2vw;
  display: block;
  font-size: 3.74vw;
  color: #888;
}
.liji_css {
  width: 9vw;
  padding: 1vw;
  line-height: 7vw;
  text-align: center;
  position: absolute;
  top: 5vw;
  right: 3vw;
  font-size: 3.74vw;
  color: #fff;
}
</style>