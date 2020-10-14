  
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
import { InstApi } from 'src/providers/inst.api';

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
    public sanitizer: DomSanitizer,
    public instApi: InstApi,
    public memberApi:MemberApi, 
    public clientApi:ClientApi,
    public aliyunApi:AliyunApi,
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone);
      
  }

  indexbanner=[];
  onMyLoad(){
    this.params;

    this.instApi.indexbanner({ id: this.params.id }).then((indexbanner: any) => { 
      for(var i=0;i<indexbanner.length;i++){
        indexbanner[i].checked=false;
      }
      this.indexbanner = indexbanner;
      console.log(indexbanner);
    })
  }
   
  onMyShow() {
    var that = this;
    

  }
  checked(e){
    console.log(e);
  }
  
 
}
