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
    public sanitizer: DomSanitizer,
    public memberApi:MemberApi, 
    public clientApi:ClientApi,
    public aliyunApi:AliyunApi,
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone);
      
  }
  daima='';
  onMyLoad(){
    this.params;
  }
   
  onMyShow() {
    var that = this;
     
  }
  yanzheng(){
    if(this.daima==''){
      this.showAlert('请输入企业代码');
     return;
    }
    this.memberApi.qiyema({ qiyema: this.daima }).then((res: any) => {  
      console.log(res);
      if(res.code==0){
        console.log("昆仑决");  
        this.navigate("/bangdin")
      }else{
        this.showAlert(res.result);
      }

    })
  }
  
 
}