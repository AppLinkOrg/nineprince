 

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
  selector: 'app-mine',
  templateUrl: './mine.page.html',
  styleUrls: ['./mine.page.scss'],
  providers:[MemberApi,ClientApi,AliyunApi]
})
export class MinePage extends AppBase {

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
  onMyLoad(){
    this.params;
    this.setTitle("个人中心")
  }
  name='';
  
  onMyShow() {
    var that = this; 
    this.memberApi.info({id:this.MemberInfo.id}).then((info:any)=>{
      this.name=info.name;
    })

  }
  toupdate(id){
    this.navigate('myinformation',{id:id})
  }
  
 
}