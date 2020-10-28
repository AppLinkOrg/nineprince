<template>
  <div class="bg-d4">
    <!-- 待服务背景图片  -->
    <div class="h-494" v-show="mes === '待服务' ?  true:false">
      <img :src="uploadpath + 'resource/' + Res.blueicon" class="h-494" />
    </div>
    <div class="h-494" v-show="mes === '服务中' ?  true:false">
      <img :src="uploadpath + 'resource/' + Res.orangeicon" class="h-494" />
    </div>
    <div class="h-494" v-show="mes === '已完成' ?  true:false">
      <img :src="uploadpath + 'resource/' + Res.greenicon" class="h-494" />
    </div>
    <div class="h-494" v-show="mes === '已取消' ?  true:false">
      <img :src="uploadpath + 'resource/' + Res.greyicon" class="h-494" />
    </div>
    <!-- 待服务 -->
    <div class="margin-top494"></div>
    <div class="h-48 f-w bolder-500 margin-top-5x padding-left-6x padding-bottom-3x ">{{mes}}</div>
    <!-- 待服务详情  -->
    <div class="flex-row">
      <div class="flex-1"></div>
      <div class="w-696">
        <div class="padding-1413 bg-w box-s0330">
          <div
            class="padding-top padding-bottom flex-row flex-center border-bottomEEE"
          >
            <img
              :src="uploadpath + 'resource/' + Res.blueicon"
              class="personicon"
            />
            <div class="padding-left-25 f-g100 h2 bolder-500 flex-1">
              办公室推拿
            </div>
            <div class="txt-33 h2 bolder-500">*1</div>
          </div>
          <!-- 客户姓名 -->
          <div
            class="padding-top-3x padding-bottom-3x border-bottomEEE flex-row flex-center "
          >
            <div class="flex-1 txt-666 f-24 ">客户姓名</div>
            <div class="txt-33 f-24 ">王小明</div>
          </div>
          <!-- 联系客户 -->
          <div
            class="padding-top-3x padding-bottom-3x border-bottomEEE flex-row flex-center "
          >
            <div class="flex-1 txt-666 f-24 ">联系客户</div>
            <div class="txt-33 f-24 padding-right-5x">13578989753</div>
            <img
              :src="uploadpath + 'resource/' + Res.Telephoneicon"
              class="Telephoneicon"
            />
          </div>
          <!-- 服务时间 -->
          <div
            class="padding-top-3x padding-bottom-3x border-bottomEEE flex-row flex-center "
          >
            <div class="flex-1 txt-666 f-24 ">服务时间</div>
            <div class="txt-33 f-24 bolder-500">2020.08.11 14：00</div>
          </div>
          <!-- 服务地址 -->
          <div class="padding-top-3x padding-bottom-3x  flex-row flex-center ">
            <div class="flex-1 txt-666 f-24 ">服务地址</div>
            <div class="txt-33 f-24 bolder-500">
              深圳市罗湖区东门中路2110号东方大厦
            </div>
          </div>
        </div>
        <!-- 下部分消息 -->
        <div class="padding-1413 bg-w box-s0330 margin-top">
          <!-- 订单编号 -->
          <div
            class="padding-top-3x padding-bottom-3x  flex-row flex-center border-bottomEEE"
          >
            <div class="flex-1 txt-666 f-24 ">订单编号</div>
            <div class="txt-33 f-24 bolder-500">9876543211025666</div>
          </div>
          <!-- 下单时间 -->
          <div
            class="padding-top-3x padding-bottom-3x  flex-row flex-center border-bottomEEE"
          >
            <div class="flex-1 txt-666 f-24 ">下单时间</div>
            <div class="txt-33 f-24 bolder-500">2020.08.11 14：00</div>
          </div>
          <!-- 支付金额 -->
          <div
            class="padding-top-3x padding-bottom-3x  flex-row flex-center border-bottomEEE"
          >
            <div class="flex-1 txt-666 f-24 ">支付金额</div>
            <div class="txt-33 f-24 bolder-500">58.0元</div>
          </div>
          <!-- 支付方式 -->
          <div class="padding-top-3x padding-bottom-3x  flex-row flex-center">
            <div class="flex-1 txt-666 f-24 ">支付方式</div>
            <div class="txt-33 f-24 bolder-500">微信支付</div>
          </div>
        </div>
        <!-- 开始服务按钮 -->
        <div class="h-88 margin-top-5x startbtn flex-row flex-center"  v-show="mes === '待服务' ?  true:false">
            <div class=" text-center h-40 f-w bolder-500 w-100">开始服务</div>
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
  </div>
</template>
<script>
import Config from "../Config";
import { PageHelper } from "../PageHelper";
import { HttpHelper } from "../HttpHelper";
import { Utils } from "../Utils";

export default {
  data() {
    return {
      Res: {},
      Inst: {},
      Member: null,
      mes: "已完成",
    };
  },
  created() {
    PageHelper.Init(this);
  },
  methods: {}
};
</script>
<style scoped>
.bg-d4 {
  min-height: 100vh;
  background: #f5f5f5;
}
.h-494 {
  height: 494px;
}
.margin-top494{
    margin-top: -494px;
}
.w-696 {
  width: 696px;
}
.padding-1413 {
  padding: 10px 40px 10px 30px;
}
.personicon {
  width: 66px;
  height: 65px;
}
.padding-left-25 {
  padding-left: 25px;
}
.Telephoneicon {
  width: 36px;
  height: 36px;
}
.box-s0330 {
  box-shadow: 0px 3px 3px 0px rgba(165, 165, 165, 0.1);
}
.h-88 {
  height: 88px;
}
.startbtn{
  background: linear-gradient(#59c69c 0%, #89d464 100%);
  border-radius: 8px;
}
</style>