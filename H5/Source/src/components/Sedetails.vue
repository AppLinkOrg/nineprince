<template>
  <div class="bg-d4" v-if="orderinfo!=null">
    <!-- 待服务背景图片  -->
    <div class="h-494" v-show="orderinfo.orderstatus === 'B' ?  true:false">
      <img :src="uploadpath + 'resource/' + Res.blueicon" class="h-494" />
    </div>
    <div class="h-494" v-show="orderinfo.orderstatus === 'U' ?  true:false">
      <img :src="uploadpath + 'resource/' + Res.orangeicon" class="h-494" />
    </div>
    <div class="h-494" v-show="orderinfo.orderstatus === 'C' ?  true:false">
      <img :src="uploadpath + 'resource/' + Res.greenicon" class="h-494" />
    </div>
    <div class="h-494" v-show="orderinfo.orderstatus === 'D' ?  true:false">
      <img :src="uploadpath + 'resource/' + Res.greyicon" class="h-494" />
    </div>
    <!-- 待服务 -->
    <div class="margin-top494"></div>
    <div class="h-48 f-w bolder-500 margin-top-5x padding-left-6x padding-bottom-3x ">{{orderinfo.orderstatus=='B'?'待服务':(orderinfo.orderstatus=='U'?'服务中':(orderinfo.orderstatus=='C'?'已完成':'已取消'))}}</div>
    <!-- 待服务详情  -->
    <div class="flex-row">
      <div class="flex-1"></div>
      <div class="w-696">
        <div class="padding-1413 bg-w box-s0330">
          <div
            class="padding-top padding-bottom flex-row flex-center border-bottomEEE"
          >
            <img
              :src="uploadpath + 'technician/' + orderinfo.technician_photo"
              class="personicon"
            />
            <div class="padding-left-25 f-g100 h2 bolder-500 flex-1">
              {{orderinfo.project_name}}
            </div>
            <div class="txt-33 h2 bolder-500">*1</div>
          </div>
          <!-- 客户姓名 -->
          <div
            class="padding-top-3x padding-bottom-3x border-bottomEEE flex-row flex-center "
          >
            <div class="flex-1 txt-666 f-24 ">客户姓名</div>
            <div class="txt-33 f-24 ">{{orderinfo.member_name}}</div>
          </div>
          <!-- 联系客户 -->
          <div
            class="padding-top-3x padding-bottom-3x border-bottomEEE flex-row flex-center "
          >
            <div class="flex-1 txt-666 f-24 ">联系客户</div>
            <div class="txt-33 f-24 padding-right-5x">{{orderinfo.mobile}}</div>
            
            <a :href="'tel:'+orderinfo.mobile">

             <img
              :src="uploadpath + 'resource/' + Res.Telephoneicon"
              class="Telephoneicon"
            />
            </a>
          </div>
          <!-- 服务时间 -->
          <div
            class="padding-top-3x padding-bottom-3x border-bottomEEE flex-row flex-center "
          >
            <div class="flex-1 txt-666 f-24 ">服务时间</div>
            <div class="txt-33 f-24 bolder-500">{{orderinfo.yuyueriqi}}</div>
          </div>
          <!-- 服务地址 -->
          <div class="padding-top-3x padding-bottom-3x  flex-row flex-center ">
            <div class="flex-1 txt-666 f-24 ">服务地址</div>
            <div class="txt-33 f-24 bolder-500">
              {{orderinfo.address_name}}
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
            <div class="txt-33 f-24 bolder-500">{{orderinfo.orderno}}</div>
          </div>
          <!-- 下单时间 -->
          <div
            class="padding-top-3x padding-bottom-3x  flex-row flex-center border-bottomEEE"
          >
            <div class="flex-1 txt-666 f-24 ">下单时间</div>
            <div class="txt-33 f-24 bolder-500">{{orderinfo.ordertime}}</div>
          </div>
          <!-- 支付金额 -->
          <div
            class="padding-top-3x padding-bottom-3x  flex-row flex-center border-bottomEEE"
          >
            <div class="flex-1 txt-666 f-24 ">支付金额</div>
            <div class="txt-33 f-24 bolder-500">{{orderinfo.price}}元</div>
          </div>
          <!-- 支付方式 -->
          <div class="padding-top-3x padding-bottom-3x  flex-row flex-center">
            <div class="flex-1 txt-666 f-24 ">支付方式</div>
            <div class="txt-33 f-24 bolder-500">{{orderinfo.payment_name}}</div>
          </div>
        </div>
        <!-- 开始服务按钮 -->
        <div class="h-88 margin-top-5x startbtn flex-row flex-center"  v-show="orderinfo.orderstatus === 'B' ?  true:false">
            <div class=" text-center h-40 f-w bolder-500 w-100" @click="start">开始服务</div>
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
      orderinfo:null
    };
  },
  created() {
    PageHelper.Init(this);
    PageHelper.LoginAuth(this);
    this.getorder()
  },
  methods: {
    start(){
      HttpHelper.Post('member/startservice',{id:this.$route.query.id}).then((res)=>{
        this.getorder();
      })
    },
    getorder(){
      HttpHelper.Post('member/orderinfo',{id:this.$route.query.id}).then((orderinfo)=>{
        this.orderinfo=orderinfo
        console.log(orderinfo,'1111')
      })
    }
  }
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