<template>
  <div class="bg-f2">
    
    <div class="flex-row flex-center fixedtop bg-w">
      <div class="flex-row flex-column flex-1" v-for="(item,index) of typelist" :key='index' @click='switchnav(item)'>
        <div class="f-30 " :class="currentidx==item.value?'txt-59':'txt-42 margin-bottom-33'">{{item.name}}</div>
        <div :class="currentidx==item.value?'lines':''"></div>
      </div>
    </div>


    <div class="margin-top bg-w " v-for='(item,index) of orderlist' :key='index' @click="routeto('/sedetails?id='+item.id)">
        <div class="flex-row flex-center padd29">
          <div class="flex-1 txt-66 f-24">订单编号:{{item.orderno}}</div>
          <div class="txt-59 f-24">{{item.orderstatus=='B'?'待服务':(item.orderstatus=='U'?'服务中':(item.orderstatus=='C'?'已完成':'已取消'))}}</div>
        </div>

        <div class="flex-row flex-center pro_con">
          <img :src="uploadpath+'project/'+item.project_img" class="pro_img"/>
          <div>
              <div class="bold txt-33 f-40">{{item.project_name}}</div>
              <div class="txt-5c f-30 margin-tb-22 margin-left-17">X1</div>
              <div class="txt-66 f-24">服务时间：{{item.yuyueriqi+' '+item.duantime}}</div>
          </div>
        </div>

        <div class="fuwudz txt-66 f-24">
          服务地址：{{item.address_name}}
        </div>
    </div>
      <div class="height"></div>
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
      typelist:[
        {
          name:'待服务',
          value:'B',
        },
         {
          name:'服务中',
          value:'U',
        },
         {
          name:'已完成',
          value:'C',
        },
         {
          name:'已取消',
          value:'D',
        },
       
      ],
      currentidx:'B',
      currenname:'待服务',
      orderlist:[],
    };
  },
  created() {
    PageHelper.Init(this);
    PageHelper.LoginAuth(this);
    this.getorder()
  },
  methods: {
    switchnav(item){
      this.currentidx=item.value;
      this.currenname=item.name;
      this.getorder()
    },
    getorder(){
      var type = this.currentidx;
      
      HttpHelper.Post('member/orderlist',{orderstatus:type}).then((orderlist)=>{
          this.orderlist=orderlist;
      })
    }
  },
};
</script>
<style scoped>
.bg-f2 {
  min-height: 100vh;
  background: #F2F2F2;
}
.fixedtop {
  width: 100vw;
  padding-top: 28px;
}
.margin-bottom-33 {
  margin-bottom: 33px;
}
.txt-42 {
  color: #424242;
}
.txt-59 {
  color: #59C69C;
}
.lines {
  width: 81px;
  height: 4px;
  background: #59C69C;
  margin-top: 27px;
}
.pro_con {
  /* width: 100%; */
  padding: 23px 22px 22px;
  background: #F7F7F7;
}
.fuwudz {
  /* width: 100vw; */
  padding: 40px 27px 38px;
}
.pro_img {
  width: 160px;
  height: 160px;
  margin-right: 41px;
}
.padd29 {
  padding: 29px 46px 28px 31px;
}
.txt-66 {
  color: #666666;
}
.txt-5c {
  color: #5CC799;
}
.f-40 {
  font-size: 40px;
}
.margin-tb-22 {
  margin-top: 22px;
  margin-bottom: 27px;
}
.margin-left-17 {
  margin-left: 17px;
}
</style>