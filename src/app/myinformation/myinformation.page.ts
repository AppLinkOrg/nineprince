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

@Component({
  selector: 'app-myinformation',
  templateUrl: './myinformation.page.html',
  styleUrls: ['./myinformation.page.scss'],
  providers:[MemberApi,ClientApi,AliyunApi]
})
export class MyinformationPage extends AppBase {

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
  name='';
  mobile='';
  gonghao='';
  info=[];
  onMyLoad(){
   
    this.params;
    this.setTitle("修改个人资料")
    this.memberApi.info({id:this.params.id}).then((info:any)=>{
      this.name=info.name;
      this.mobile=info.mobile;
      this.gonghao=info.gonghao;
    })
  }
   
  onMyShow() {
    var that = this;
    

  }
  comfrim(){

    this.memberApi.update({id:this.params.id,name:this.name,mobile:this.mobile,gonghao:this.gonghao}).then((res:any)=>{

      this.toast('保存成功');

    })

  }
  
 
}