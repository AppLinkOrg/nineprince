
import { Component, NgZone, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams, IonSlides, PickerController } from '@ionic/angular';
import { AppUtil } from '../app.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MemberApi } from 'src/providers/member.api';
import { ClientApi } from 'src/providers/client.api';
import { AliyunApi } from 'src/providers/aliyun.api';
import { InstApi } from 'src/providers/inst.api';
import { HomePage } from '../home/home.page';
declare let WeixinJSBridge: any;

@Component({
  selector: 'app-dindanqueren',
  templateUrl: './dindanqueren.page.html',
  styleUrls: ['./dindanqueren.page.scss'],
  providers: [MemberApi, ClientApi, AliyunApi, InstApi]
})
export class DindanquerenPage extends AppBase {

  constructor(public zone: NgZone, public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public activeRoute: ActivatedRoute,
    public pickerController: PickerController,
    public sanitizer: DomSanitizer,
    public memberApi: MemberApi,
    public clientApi: ClientApi,
    public aliyunApi: AliyunApi,
    public instApi: InstApi,
  ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl, activeRoute, zone, pickerController);

  }

  indexbanner = [];
  daijinquan = [];
  orderinfo = null;
  checking = 'A';
  type = '';
   msg='';
   Interval=null;
   order_time=null;
   show=true;
  onMyLoad() {
    this.params;
    this.setTitle("订单信息确认")
    console.log(this.params.id, '传入的ID')

    this.memberApi.orderinfo({ id: this.params.id }).then((orderinfo: any) => {
      this.orderinfo = orderinfo;
      this.type = orderinfo.ordertype;

      //this.CountDown(orderinfo.ordertime);
    
      this.Interval= setInterval(() => { 
        this.CountDown(orderinfo.ordertime);
      },  1000);
   
     // console.log(orderinfo.ordertime,'aaa');
    })
   
  


  }
   CountDown(time) {
    console.log(time,'考快乐快乐快乐')
    var nowtime= (new Date()).getTime();
    var ordertime2=(new Date(time)).getTime()+900000; 
    var cha=ordertime2-nowtime; 
    var daojishi= AppUtil.formatDuring(cha);


   // console.log(nowtime,"111",ordertime2,'---',cha,'-----',daojishi)

    if (cha<=0) {
      console.log("到时间了再见")
      this.show=false;
      clearInterval(this.Interval);
    }else{
      this.order_time=AppUtil.formatDuring(cha);
      console.log(nowtime,"111",ordertime2,'---',cha,'-----',daojishi)
    }

     
    // if (maxtime >= 0) {
    //       var  minutes = Math.floor(maxtime / 60);
    //        var    seconds = Math.floor(maxtime % 60);

    //         this.msg = "距离结束还有" + minutes + "分" + seconds + "秒";

    //           if (maxtime == 5 * 60)alert("还剩5分钟");
    //                --maxtime;
    //      } else{
    //        clearInterval(this.Interval);
    //      alert("时间到，结束!");
    // }
  }
        



  // countDown() {
  //   this.nowtime = (new Date()).getTime();
  //   this.endtime = (new Date("2020/10/23,19:57:00")).getTime();
  //   this.lefttime = parseInt(this.endtime) - parseInt(this.nowtime) / 1000;
  //   this.d = parseInt(this.lefttime) / 86400;
  //   this.h = parseInt(this.lefttime) / (60 * 60) % 24;
  //   this.m = parseInt(this.lefttime) / 60 % 60;
  //   this.s = parseInt(this.lefttime) % 60;
  //   this.d = AppUtil.addZero(this.d)
  //   this.h = AppUtil.addZero(this.h);
  //   this.m = AppUtil.addZero(this.m);
  //   this.s = AppUtil.addZero(this.s);
  //   document.querySelector(".count").innerHTML = `活动倒计时  ${this.d}天 ${this.h} 时 ${this.m} 分 ${this.s} 秒`;
  //   if (this.lefttime <= 0) {
  //     document.querySelector(".count").innerHTML = "活动已结束";
  //     return;
  //   }
  //   setTimeout(this.countDown, 1000);
  // }

  

  onMyShow() {
    var that = this;

   
    this.memberApi.daijinquan({ member_id: this.MemberInfo.id, status: 'A', type: this.type }).then((daijinquan: any) => {
      for (var i = 0; i < daijinquan.length; i++) {
        daijinquan[i].checked = false;
      }
      this.daijinquan = daijinquan;
      console.log(daijinquan);
    })

  }
  checked(e) {

    this.checking = e.detail.value;
    console.log(this.checking);
  }

  comfrim(price, quota, quan_id) {
    if (this.checking == 'A') {
      console.log(price, '价格')

      this.memberApi.info({ id: this.MemberInfo.id }).then((info: any) => {
        console.log(info, parseInt(price));
        console.log(info.quota, '额度')

        if (parseInt(price) > parseInt(info.quota)) {
          this.toast("余额不足");
        } else {
          this.memberApi.updatestatus({ id: this.params.id, orderstatus: 'B' }).then((res: any) => {
            this.navigate("orderlist", { check: 'B' })
          })
          //this.navigate("orderlist")
        }
      })
    } else if (this.checking == 'B') {
      console.log('微信支付')

      var openid = window.sessionStorage.getItem("openid");
      console.log(openid);


      this.memberApi.prepay({ order_id: this.params.id, openid: openid }).then((prepay: any) => {
        console.log(prepay, '看看')

        WeixinJSBridge.invoke("getBrandWCPayRequest", prepay, (res) => {

          if (res.err_msg == "get_brand_wcpay_request:ok") {

            this.navigate("orderlist", { check: 'B' })
          }
        });

        //window.open(prepay.return);
      })


      //this.loadwechat();
    } else {
      this.memberApi.updatestatus({ id: this.params.id, orderstatus: 'B' }).then((res: any) => {

        this.memberApi.xiaohaoquan({ id: this.checking }).then((res: any) => {
          this.navigate("orderlist", { check: 'B' })
        })

      })
      console.log('代金券支付')
    }
  }

  cancel() {

    this.showConfirm('确认取消订单？', (ret) => {
      if (ret == true) {
        this.memberApi.updatestatus({ id: this.params.id, orderstatus: 'D' }).then((res: any) => {
          this.toast("取消成功")
          this.back();
        })
      }
    })

  }

  complete() {

    this.showConfirm('确认完成订单？', (ret) => {
      if (ret == true) {
        this.memberApi.updatestatus({ id: this.params.id, orderstatus: 'C' }).then((res: any) => {
          this.toast("订单已完成")
          this.back();
        })
      }
    })

  }




  payment() {

  }





}
