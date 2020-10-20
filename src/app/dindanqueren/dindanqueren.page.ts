  
import { Component, NgZone, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import {  ActivatedRoute, Params } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams, IonSlides,PickerController } from '@ionic/angular';
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
  providers:[MemberApi,ClientApi,AliyunApi,InstApi]
})
export class DindanquerenPage extends AppBase {

  constructor(public zone:NgZone, public router: Router, 
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public activeRoute: ActivatedRoute,
    public pickerController: PickerController,
    public sanitizer: DomSanitizer,
    public memberApi:MemberApi, 
    public clientApi:ClientApi,
    public aliyunApi:AliyunApi,
    public instApi:InstApi,
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone,pickerController);
      
  }

  indexbanner=[];
  daijinquan=[];
  orderinfo='';
  checking='A';
  onMyLoad(){
    this.params;

    console.log(this.params.id,'传入的ID')

    this.memberApi.orderinfo({ id: this.params.id }).then((orderinfo: any) => { 
      this.orderinfo = orderinfo;
      console.log(orderinfo);
    })


  }
   
  onMyShow() {
    var that = this;

    this.memberApi.daijinquan({ member_id: this.MemberInfo.id,status:'A' }).then((daijinquan: any) => { 
      for(var i=0;i<daijinquan.length;i++){
        daijinquan[i].checked=false;
      }
      this.daijinquan = daijinquan;
      console.log(daijinquan);
    })

  }
  checked(e){
    
    this.checking=e.detail.value;
    console.log(this.checking);
  }

  comfrim(price,quota){
    if(this.checking=='A'){
      console.log(price,'价格')
      
      this.memberApi.info({id:this.MemberInfo.id}).then((info:any)=>{
       console.log(info,parseInt(price));
       console.log(info.quota,'额度')

       if(parseInt(price)>parseInt(info.quota)){
        this.toast("余额不足");
       }else{ 
          this.memberApi.updatestatus({ id:this.params.id}).then((res: any) => { 
            this.navigate("orderlist")
         })
         //this.navigate("orderlist")
       }
      })
    }else if(this.checking=='B'){
      console.log('微信支付')
     
        var openid=window.sessionStorage.getItem("openid");
        console.log(openid);
        //return;
  

        this.memberApi.prepay({order_id:this.params.id,openid:openid}).then((prepay: any) => { 
          console.log(prepay,'看看') 
          //alert(JSON.stringify(prepay));
          WeixinJSBridge.invoke("getBrandWCPayRequest", prepay, (res) => {
            // alert(JSON.stringify(res));
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              // window.location.href="/orderlist";
              this.navigate("orderlist")
            }
          });

          //window.open(prepay.return);
        })
     
      
      //this.loadwechat();
    }else{
      this.memberApi.updatestatus({ id:this.params.id}).then((res: any) => { 
        this.navigate("orderlist")
      })
      console.log('代金券支付')
    }
  }


  payment(){
 
  }

 


  
}
