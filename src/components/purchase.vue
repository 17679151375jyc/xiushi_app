<template>
  <div>
    <div class="dis_row_between_center shangpin_css">
      <img class="img_cai_css" src="@/assets/img/login_beijing.jpg" />
      <div class="div_row_end_warp content_css">
        <div class="biaoti_css">珍珠奶茶</div>
        <div class="dis_row_around_center geshi_css">
          <div
            class="biaoqian_css"
            :class="{ active_box1: specificationsFlag === item.value }"
            v-for="(item, index) in sugarList"
            :key="index"
            @click="specificationsClick(item.value)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="dis_row_around_center geshi_css">
          <div
            class="biaoqian_css"
            :class="{ active_box1: sugarFlag === item.value }"
            v-for="(item, index) in specificationsList"
            :key="index"
            @click="sugarClick(item.value)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="dis_column_end_center geshi_css">
          <van-stepper :min='0' v-model="value" disable-input />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: 0,
      specificationsFlag: 0,
      sugarFlag: 0,
    };
  },
  methods: {
    specificationsClick(value) {
      this.specificationsFlag = value;
    },
    sugarClick(value){
      this.sugarFlag = value
    }
  },
};
</script>
<style scoped>
.shangpin_css {
  width: 77vw;
  margin: 1vw auto;
  height: 35vw;
  background-color: #fafafa;
  border-radius: 1vw;
  margin-top: 2vw;
}
.img_cai_css {
  width: 29vw;
  height: 30vw;
  border-radius: 3vw;
  margin: 1vw;
}
.content_css {
  width: 45vw;
  height: 30vw;
  margin-right: 2vw;
  background-color: #fff;
}
.biaoti_css {
  font-size: 3.95vw;
  font-weight: bold;
  padding: 0 3vw;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.geshi_css {
  width: 40vw;
  padding: 0 2vw;
}
.biaoqian_css {
  width: 11vw;
  height: 5vw;
  text-align: center;
  line-height: 5vw;
  border: 1px solid #FCA85F;
  border-radius: 1vw;
  color: #FCA85F;
  font-size: 2vw;
}
</style>