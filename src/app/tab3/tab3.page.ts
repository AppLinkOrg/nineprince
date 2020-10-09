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
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  providers:[MemberApi,ClientApi,AliyunApi]
})
export class Tab3Page extends AppBase {

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
  onMyLoad(){
    this.params;
  }
  houxuanlist=[];
  jzz=true;
  onMyShow(e=undefined) {
    var that = this;
    this.clientApi.houxuanlist({
      jiedan_id:this.params.jiedan_id
    }).then((houxuanlist:any)=>{
      this.houxuanlist=houxuanlist;
      this.jzz=false;
      console.log(this.jzz,this.houxuanlist.length);
      console.log(this.jzz==false && this.houxuanlist.length==0);
    })

  }
  xiangqing(id){
    this.navigate('tab2',{id:id,jiedan_id:this.params.jiedan_id});
  }
  shanchu(id){
    this.clientApi.delehouxuan({id:id}).then((res)=>{
      console.log(res);
      this.toast('删除成功');
      this.onMyShow();
    })
  }
  tijiao(){
    
    var datajson = JSON.stringify(this.houxuanlist);

    


    console.log(datajson);
    // return;
    this.clientApi.jiedanhuman({datajson:datajson}).then((res)=>{
      console.log(res); 
      this.aliyunApi.tongzhi({jiedan_id:this.params.jiedan_id}).then((res)=>{
        window.location.href=''; 
      })

      // this.navigate('');
  
    })
  }
 
}
