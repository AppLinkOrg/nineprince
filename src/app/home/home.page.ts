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

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [MemberApi, InstApi, AliyunApi]
})
export class HomePage extends AppBase {

  constructor(public zone:NgZone, public router: Router, 
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public activeRoute: ActivatedRoute,
    public pickerController: PickerController,
    public sanitizer: DomSanitizer,
    public memberApi:MemberApi,  
    public aliyunApi:AliyunApi,
    public instApi:InstApi,
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone,pickerController);
      
  }


  indexbanner = [];
 
  onMyLoad(e = undefined) {
    //参数
    this.params;
    
    this.instApi.indexbanner({ id: this.params.id }).then((indexbanner: any) => { 
      this.indexbanner = indexbanner;
      console.log(indexbanner);
    })
 

  }

  projectmodule=[];
  onMyShow() {
    this.setTitle("企业服务")
    console.log(AppBase.MemberInfo)
    if(AppBase.MemberInfo!=null){
      this.memberApi.projectmodule({
        id:AppBase.MemberInfo.enterprise_id
      }).then((res:any)=>{
      
       this.projectmodule=this.group(res,2);
       console.log(this.projectmodule);
      })
    }
  
  }
  group(array, subGroupLength) {
    let index = 0;
    let newArray = [];
    while(index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
}

  
dianji(url){
  if(url==''){
    this.toast('暂未开放')
    return
  }
  this.navigate(url);
}


  
}
