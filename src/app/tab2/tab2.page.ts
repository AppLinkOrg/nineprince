import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgZone } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams, IonSlides,PickerController } from '@ionic/angular';
import { AppUtil } from '../app.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MemberApi } from 'src/providers/member.api';
import { InstApi } from 'src/providers/inst.api';
import { AliyunApi } from 'src/providers/aliyun.api';
import { isNgTemplate } from '@angular/compiler';
declare let WeixinJSBridge: any; 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [MemberApi, InstApi, AliyunApi]
})
export class Tab2Page extends AppBase {

  constructor(public zone:NgZone, public router: Router, 
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public activeRoute: ActivatedRoute,
    public pickerController: PickerController,
    public sanitizer: DomSanitizer,
    public memberApi:MemberApi,  
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone,pickerController);
      
  }
  
  check='A';
  packagelist=[];
  package=null;
  amount=0;
  give_amount=0;
  duihuan='';
  quota=0;
  zon=0;
  onMyLoad(e=undefined) {
    this.params;
    this.setTitle("个人钱包")
    var that = this;
    this.memberApi.packagelist({}).then((packagelist: any) => { 
      this.packagelist = packagelist;
      console.log(packagelist);
    })
    
  }
 
  onMyShow() {
    this.memberApi.info({id:this.MemberInfo.id}).then((info:any)=>{
      this.quota=info.quota;
    })
  }
  checked(type){
    this.check=type;
     
  }
  checking(i){
   this.package=i;
   
   this.amount=parseInt(this.packagelist[i].amount);
   this.give_amount=parseInt(this.packagelist[i].give_amount);
   
   this.zon=this.amount+this.give_amount;
   console.log(this.amount,'充值金额');
   console.log(this.give_amount,'赠送的金额');
   console.log(this.zon);
  }
  

  payment(){
    var openid=localStorage.getItem("openid");
    console.log(openid);
   
    // this.memberApi.chongzhi({
    //   member_id:this.MemberInfo.id,
    //   quota:this.zon, 
    // }).then((res:any)=>{
      
    //   if (res.code==0) {
    //     this.memberApi.info({id:this.MemberInfo.id}).then((info:any)=>{
    //       this.quota=info.quota;
    //     })
    //   }
      
    // })

    this.memberApi.prepay2({amount:this.amount,openid:openid}).then((prepay2: any) => { 
      console.log(prepay2,'看看') 
    
      WeixinJSBridge.invoke("getBrandWCPayRequest", prepay2, (res) => {
        if (res.err_msg == "get_brand_wcpay_request:ok") {

          this.memberApi.chongzhi({
            member_id:this.MemberInfo.id,
            quota:this.zon, 
          }).then((res:any)=>{

            if (res.code==0) {
              this.toast("充值成功!");
              // this.onMyShow();
              this.memberApi.info({id:this.MemberInfo.id}).then((info:any)=>{
                this.quota=info.quota;
              })
            }
            
          })
          
         
        }
      });

      
    })
  }
 
}
