import { Component, NgZone, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import {  ActivatedRoute, Params } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams,IonSlides } from '@ionic/angular';
import { AppUtil } from '../app.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MemberApi } from 'src/providers/member.api'; 
import { ClientApi } from 'src/providers/client.api';
import { AliyunApi } from 'src/providers/aliyun.api';
import { ApiConfig } from '../api.config';

@Component({
  selector: 'app-bangdin',
  templateUrl: './bangdin.page.html',
  styleUrls: ['./bangdin.page.scss'],
  providers:[MemberApi,ClientApi,AliyunApi]
})
export class BangdinPage extends AppBase {

  constructor(public zone:NgZone, public router: Router, 
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public memberApi:MemberApi, 
    public clientApi:ClientApi,
    public aliyunApi:AliyunApi,
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone);
      
  }
  name='';
  mobile='';
  gonghao='';
  onMyLoad(){
    this.params;
  }
   
  onMyShow() {
    var that = this;
    

  }
  
  register(){
    console.log(this.name);
    console.log(this.mobile);
    console.log(this.gonghao);
    // return;
    if(this.name==''){
      this.showAlert('请输入姓名');
     return;
    }
    if(this.mobile==''){
      this.showAlert('请输入手机号码');
     return;
    }
    if(this.gonghao==''){
      this.showAlert('请输入工号');
     return;
    }
    this.memberApi.register({ name: this.name, mobile:this.mobile,gonghao:this.gonghao,status:'A'}).then((res: any) => {  
      console.log(res,'多少');
      if(res.code==0){
        console.log(res,"昆仑决");  
        this.memberApi.login({ name: this.name, mobile:this.mobile,gonghao:this.gonghao}).then((res: any) => {  


          var token=res.return;

            window.localStorage.setItem("lastname",this.name); 
            window.localStorage.setItem("lastmobile",this.mobile);
            window.localStorage.setItem("lastgonghao",this.gonghao);

            window.sessionStorage.setItem("token",token);

            ApiConfig.SetToken(token);
            this.memberApi.info({id:res.result}).then((info: any) => {
              window.sessionStorage.setItem("MemberInfo",JSON.stringify(info));
              //this.navigate("/");

              window.location.href="/";
              console.log(info,'信息')
          })


          // this.navigate("/home")
        })
        //this.navigate("/home")
      }else{
        this.showAlert("提交失败请重新提交");
      }

    })
  }
 
}