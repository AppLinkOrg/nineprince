import { Component, NgZone, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import {  ActivatedRoute, Params } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams,IonSlides,PickerController } from '@ionic/angular';
import { AppUtil } from '../app.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MemberApi } from 'src/providers/member.api'; 
import { ClientApi } from 'src/providers/client.api';
import { AliyunApi } from 'src/providers/aliyun.api';

@Component({
  selector: 'app-shudaima',
  templateUrl: './shudaima.page.html',
  styleUrls: ['./shudaima.page.scss'],
  providers:[MemberApi,ClientApi,AliyunApi]
})
export class ShudaimaPage extends AppBase {

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
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone,pickerController);
      
  }
  daima='';
  showq='';
  onMyLoad(){
    this.params;
    this.setTitle("企业服务")
  }
   
  onMyShow() {
    var that = this;
    
  }
  yanzheng(){

    if(this.daima==''){
      this.showAlert('请输入企业代码');
     return;
    }
    if (this.MemberInfo!=null) {
      this.memberApi.info({id:this.MemberInfo.id}).then((info:any)=>{

        if(info.enterprise_code!=this.daima){
          if(this.daima==''){
            this.showAlert('请输入正确的企业代码');
           return;
          }
        }else{
          
            this.navigate("/home")
         
        }
        console.log(info.enterprise_code)
    })
  }else{
 
    this.memberApi.qiyema({ qiyema: this.daima }).then((res: any) => {  
      console.log(res);
      if(res.code==0){

        if(this.MemberInfo!=null){
          this.memberApi.info({id:this.MemberInfo.id}).then((info:any)=>{
            console.log(info,"啦啦啦啦")
            if (info==null) {
              this.navigate("/bangdin",{qiyema:this.daima})
            }else{
              this.navigate("/home")
            }
          })
        }else{
          this.navigate("/bangdin",{qiyema:this.daima})
        }
 
      }else{
        this.showAlert(res.result);
      }

    })



  }
 
     

  }
  
 
}