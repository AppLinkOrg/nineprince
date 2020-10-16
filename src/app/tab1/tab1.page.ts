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
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [MemberApi, InstApi, AliyunApi]
})
export class Tab1Page  extends AppBase {

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

  name='';
  mobile=''; 
  shebao='';
  onMyLoad(e=undefined) {
    var that = this; 
    this.params;

 
  }

 
  onMyShow() {
  
    
  }
  submit(member_id){
    if(this.name==''){
      this.showAlert('请输入姓名');
     return;
    }
    if(this.mobile==''){
      this.showAlert('请输入电话号码');
     return;
    }
    if(this.shebao==''){
      this.showAlert('请输入社保卡号');
     return;
    }
    this.memberApi.bangshebao({  member_id:member_id,name:this.name,mobile:this.mobile,cardid:this.shebao }).then((res: any) => {  
      console.log(res);
      if(res.code==0){
         this.back();
      }else{
        this.showAlert(res.result);
      }

    })
  }
 
}
