  
import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgZone } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams, IonSlides } from '@ionic/angular';
import { AppUtil } from '../app.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MemberApi } from 'src/providers/member.api';
import { InstApi } from 'src/providers/inst.api';
import { AliyunApi } from 'src/providers/aliyun.api';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.page.html',
  styleUrls: ['./orderlist.page.scss'],
  providers: [MemberApi, InstApi, AliyunApi]
})
export class OrderlistPage extends AppBase {

  constructor(public zone: NgZone, public router: Router,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public instApi: InstApi,
    public aliyunApi: AliyunApi,
    public memberApi: MemberApi) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl, activeRoute, zone);
    this.headerscroptshow = 480;

  }


  indexbanner = [];
  orderlist=[];
  check='A';
  onMyLoad(e = undefined) {
    //参数
    this.params;

    this.instApi.indexbanner({ id: this.params.id }).then((indexbanner: any) => { 
      this.indexbanner = indexbanner;
      console.log(indexbanner);
    })

    this.order('A')
 
  }

  onMyShow() {
  
  }

  checked(type){
    this.check=type;
    
    this.order(type);
  }

  order(type){
    this.memberApi.orderlist({orderstatus:type}).then((orderlist: any) => { 
      this.orderlist = orderlist;
      console.log(orderlist);
    })
  }





  
}
