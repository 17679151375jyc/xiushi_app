<template>
  <div>
    <div class="dis_row_between_center div_box_css">
      <img src="@/assets/img/login_beijing.jpg" class="img_css" />
      <div class="dis_column_space_start div_css">
        <div class="dis_css dis1">珍珠奶茶</div>

        <div class="dis_row_between_center dis_css">
          <div>
            <van-tag type="warning">标签</van-tag>
            <van-tag type="warning" style="margin-left: 2vw">标签</van-tag>
          </div>
          <van-stepper :min="0" v-model="value" disable-input />
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
    };
  },
  methods: {},
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
  border-radius: 5vw;
}
.div_css {
  width: 70vw;
  height: 24vw;
  background-color: #ffffff;
  border-radius: 4vw;
}
.dis_css {
  width: 61vw;
  padding: 0 2vw;
}
.dis1 {
  font-size: 3.74vw;
  font-weight: bold;
}
</style>