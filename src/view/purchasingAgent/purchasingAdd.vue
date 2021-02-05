<template>
  <div class="pageA">
    <van-nav-bar
      title="我要找代购"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="page_css">
      <div>
        <van-form @submit="onSubmit">
          <van-field
            clearable
            v-model="form.name"
            placeholder="请输入接货人"
            label="接货人："
            rows="1"
            name="validatorName"
            autosize
            type="textarea"
            :rules="[{ validator: validatorName }]"
          />

          <van-field
            clearable
            placeholder="请输入接货人电话"
            v-model="form.phone"
            rows="1"
            autosize
            name="validatorphone"
            :rules="[{ validator: validatorphone }]"
            label="接货人电话："
            type="textarea"
          />

          <van-field
            readonly
            clickable
            name="picker"
            :rules="rules"
            v-model="form.range"
            label="配送范围："
            placeholder="请选择配送范围"
            @click="rangeShowPicker = true"
          />
          <van-popup v-model="rangeShowPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="areaList"
              @confirm="rangeOnConfirm"
              @cancel="rangeShowPicker = false"
            />
          </van-popup>

          <van-field
            clearable
            placeholder="请输入详细地址"
            v-model="form.address"
            rows="1"
            maxlength="50"
            autosize
            label="详细地址"
            type="textarea"
            :rules="rules"
          />

          <van-field
            clearable
            placeholder="请输入总共预算"
            v-model="form.budget"
            rows="1"
            maxlength="9"
            autosize
            type="number"
            label="总共预算(元)："
          />

          <van-field
            clearable
            placeholder="请输入你想支付的跑腿费"
            v-model="form.money"
            rows="1"
            maxlength="9"
            autosize
            type="number"
            label="跑腿费(元)："
            :rules="rules"
          />

          <van-field
            readonly
            clickable
            name="large"
            :rules="rules"
            :value="form.large"
            label="有无大物件："
            placeholder="请选择是否有特大物件"
            @click="largeShowPicker = true"
          />
          <van-popup v-model="largeShowPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="largeList"
              @confirm="largeOnConfirm"
              @cancel="largeShowPicker = false"
            />
          </van-popup>

          <van-field
            readonly
            clickable
            name="picker"
            :rules="rules"
            :value="form.supermarketName"
            label="指定超市："
            placeholder="请选择采购超市"
            @click="superShowPicker = true"
          />
          <van-popup v-model="superShowPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="superList"
              @confirm="superOnConfirm"
              @cancel="superShowPicker = false"
            />
          </van-popup>

          <van-field
            readonly
            clickable
            name="picker"
            :rules="rules"
            :value="form.serviceTime"
            label="最晚送达时间："
            placeholder="请选择最晚送达时间"
            @click="dateShowPicker = true"
          />
          <van-popup v-model="dateShowPicker" position="bottom">
            <van-datetime-picker
              type="datehour"
              title="选择年月日小时"
              :min-date="minDate"
              v-model="currentDate"
              @confirm="dateConfirm"
              @cancel="dateShowPicker = false"
            />
          </van-popup>

          <van-field
            clearable
            placeholder="请输入备注"
            v-model="form.remark"
            rows="1"
            autosize
            show-word-limit
            maxlength="50"
            label="备注："
            type="textarea"
          />

          <van-field clearable label="需购物件：">
            <template #input>
              <div class="dis_column_center_center shangchuan_css">
                <div
                  class="dis_column_center_center shangchuan_css"
                  v-if="form.list.length > 0"
                >
                  <div
                    class="dis_column_end_center shangchuan_css neiyi_css"
                    v-for="(item, index) in form.list"
                    :key="index"
                  >
                    <div class="dis_row_between_center xuhao_css">
                      <span>需购货物：{{ index + 1 }}</span>
                      <span
                        ><i
                          class="iconfont iconshanchu color8"
                          style="font-size: 5vw"
                          @click="delClick(index)"
                      /></span>
                    </div>

                    <van-field
                      clearable
                      v-model="item.name"
                      maxlength="15"
                      rows="1"
                      autosize
                      type="textarea"
                      placeholder="请输入物件名称"
                      class="yangsi"
                      :rules="rules"
                    />
                    <van-uploader
                      multiple
                      v-model="item.uploader"
                      :max-count="4"
                    />
                    <div class="dis_row_end_center">
                      <span style="font-size: 3.74vw">数量：</span>
                      <van-stepper :v-model="item.num" />
                    </div>

                    <van-field
                      clearable
                      v-model="item.text"
                      placeholder="请输入物件描述"
                      :rules="rules"
                      rows="1"
                      class="yangsi"
                      show-word-limit
                      maxlength="50"
                      autosize
                      type="textarea"
                    />
                  </div>
                </div>
                <div
                  class="dis_row_center_center dibu_css"
                  @click.stop="addClick"
                >
                  <i class="iconfont iconhao" style="font-size: 3.74vw" />
                  <span>添加物件</span>
                </div>
              </div>
            </template>
          </van-field>
          <div style="margin: 16px">
            <van-button round block type="warning" native-type="submit">
              提交
            </van-button>
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog, Toast } from "vant";
import areaList from "@/utils/area";
export default {
  name: "",
  data() {
    return {
      backFlag: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      areaList,
      rangeColumns: [1, 2, 3],
      largeColumns: [1, 2, 3],
      superColumns: [1, 2, 3],
      rangeShowPicker: false,
      largeShowPicker: false,
      superShowPicker: false,
      dateShowPicker: false,
      form: {
        id: "001",
        name: "蒋雨成",
        phone: "17619151375",
        large: "",
        money: "",
        range: "",
        address: "111",
        status: "",
        supermarketName: "",
        budget: "",
        startTime: "",
        serviceTime: "",
        surplusTime: "",
        remark: "",
        list: [],
      },
    };
  },
  methods: {
    //添加
    addClick() {
      let arr = {
        id: "",
        name: "",
        num: 1,
        uploader: [],
        text: "",
      };
      this.form.list.push(arr);
    },
    //删除物件
    delClick(index) {
      let that = this;
      Dialog.confirm({
        title: "确定删除该物件吗！",
      })
        .then(() => {
          that.form.list.splice(index, 1);
          Toast.success("删除成功");
        })
        .catch(() => {});
    },
    //时间选择
    dateConfirm(value) {
      let str = this.getTimeToDate(value.getTime(), "MM");
      this.form.serviceTime = str;
      this.dateShowPicker = false;
    },
    //超市选择
    superOnConfirm(value) {
      this.form.supermarketName = value;
      this.superShowPicker = false;
    },
    //是否有大物件选择
    largeOnConfirm(value) {
      this.form.large = value;
      this.largeShowPicker = false;
    },
    //
    rangeOnConfirm(value) {
      this.form.range = value[0] + "-" + value[1] + "-" + value[2];
      this.rangeShowPicker = false;
    },
    //提交
    onSubmit() {
      if (this.form.list.length == 0) {
        Dialog({ message: "请至少添加一件你需要找人代购的物品！" });
        return;
      }
      Dialog.confirm({
        title: "确定提交订单吗！",
      })
        .then(() => {
          console.log(this.form);
          Toast.success("提交成功");
        })
        .catch(() => {});
    },
    //返回
    onClickLeft() {
      if (this.backFlag === true || this.form.list.length>0) {
        Dialog.confirm({
          title: "将清空所有数据,确定要返回吗？",
        })
          .then(() => {
            this.$router.back();
          })
          .catch(() => {});
        return;
      }
      this.$router.back();
    },
  },
  updated() {
    this.backFlag = true;
    console.log();
  },
};
</script>
<style scoped>
>>> .van-uploader__upload {
  border: 1px solid #ccc;
  border-radius: 2vw;
}
>>> .van-uploader__preview-delete {
  background-color: red;
}
.preview-cover {
  position: absolute;
  bottom: -100%;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
}
.shangchuan_css {
  width: 100%;
  background-color: #fafafa;
  /* padding: 1vw; */
  /* background-color: #fafafa; */
}
.yangsi {
  background-color: #fff;
  margin: 2vw;
  width: 53vw;
  border-radius: 2vw;
  font-size: 3.8vw;
}
.xuhao_css {
  width: 52vw;
  padding: 0 2vw;
  height: 8vw;
  font-size: 3.74vw;
}
.neiyi_css {
  border-bottom: 1px solid #ccc;
  padding-bottom: 2vw;
  margin-bottom: 3vw;
}
.dibu_css {
  width: 30vw;
  height: 8vw;
  font-size: 3.74vw;
  color: #fca85f;
  margin: 5vw 0;
  border: 1px solid #fca85f;
  border-radius: 5vw;
  background-color: #fff;
}
</style>