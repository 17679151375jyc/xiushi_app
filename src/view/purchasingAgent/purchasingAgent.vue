<template>
  <div>
    <van-nav-bar
      title="代购"
      left-text="返回"
      right-text="发起"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="page_css" id="agent">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option2" />
        <van-dropdown-item v-model="value2" :options="option1" />
      </van-dropdown-menu>
      <van-collapse
        v-model="activeNames"
        v-for="(item, index) in 10"
        :key="index"
      >
        <van-collapse-item :name="index">
          <template #title>
            <div class="dis_row_between_center cline-any">
              <div>
                <span class="xuhao_css">{{ index + 1 }}</span>
              </div>
              <div>跑腿费<span class="qian_css">9.00</span></div>
              <div>超市代购</div>
              <div>共<span class="qian_css">18</span>件</div>
              <div class="color4" @click.stop="pushClick">查看清单</div>
            </div>
          </template>
          <div>
            <van-field
              readonly
              v-model="form.id"
              rows="1"
              autosize
              label="单号："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.name"
              rows="1"
              autosize
              label="接货人："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.phone"
              rows="1"
              autosize
              label="接货人电话："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.range"
              rows="1"
              autosize
              label="配送范围："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.address"
              rows="1"
              autosize
              label="详细地址："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.budget"
              rows="1"
              autosize
              label="总共预算(元)："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.money"
              rows="1"
              autosize
              label="跑腿费(元)："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.status"
              rows="1"
              autosize
              label="订单状态："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.large"
              rows="1"
              autosize
              label="有无特大物品："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.supermarketName"
              rows="1"
              autosize
              label="指定超市："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.startTime"
              rows="1"
              autosize
              label="发起时间："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.serviceTime"
              rows="1"
              autosize
              label="最晚送达时间："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.surplusTime"
              rows="1"
              autosize
              label="剩余时长："
              type="textarea"
            />
            <van-field
              readonly
              v-model="form.remark"
              rows="1"
              autosize
              label="备注："
              type="textarea"
            />
            <div class="qingdan_css" @click="pushClick">查看清单</div>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value1: 0,
      value2: 0,
      option2:[
        { text: "全部订单", value: 0 },
        { text: "我接的订单", value: 1 },
        { text: "未接订单", value: 2 },
        { text: "备货的订单", value: 3 },
        { text: "配送中的订单", value: 4 },
        { text: "已完成的订单", value: 5 },
      ],
      option1: [
        { text: "按时间排序", value: 0 },
        { text: "按数量排序", value: 1 },
        { text: "按价格排序", value: 2 },
      ],
      activeNames: [],
      message: "傻逼吧你",
      form: {
        id: "001",
        name: "蒋雨成",
        phone: 17179151375,
        large: "无特大物品",
        range: "秀市镇-蒋家村委会",
        address: "蒋家村",
        status: "配货中",
        supermarketName: "1家超市",
        budget: "49.00元",
        money:'9.00',
        startTime: "2020-11-04 10:38:08",
        serviceTime: "2020-11-05 10:00:00",
        surplusTime: "18小时59分",
        remark: "尽快送达",
      },
    };
  },
  methods: {
    onClickLeft() {
      this.$router.back();
    },
    onClickRight() {      
      this.$router.push({ path: "/purchasingAgent/purchasingAdd" });
    },
    pushClick() {
      this.$router.push({ path: "/purchasingAgent/purchasingList" });
    },
  },
};
</script>
<style scoped>
>>>#agent .van-cell--clickable {
  background-color: #fafafa;
  border-bottom: 3px solid #fff;
}
/* >>> .van-dropdown-menu__bar {
  height: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
>>> .van-dropdown-menu__item {
  margin-right: 8vw;
} */
>>> .van-ellipsis {
  font-size: 3.74vw;
}
.page_css {
  background-color: #fff;
}
.cline-any {
  font-size: 3.2vw;
}
.qian_css {
  color: red;
  font-size: 4vw;
}
.qingdan_css {
  width: 40vw;
  height: 10vw;
  background-color: #fca85f;
  border-radius: 10vw;
  margin: 3vw auto;
  color: #fff;
  font-size: 3.74vw;
  text-align: center;
  line-height: 10vw;
}
.xuhao_css {
  min-width: 5vw;
  height: 5vw;
  display: block;
  border-radius: 50%;
  text-align: center;
  line-height: 5vw;
  background-color: #fca85f;
  color: #fff;
  font-size: 10px;
}
</style>