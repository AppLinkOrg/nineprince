import { Component, NgZone, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import {  ActivatedRoute, Params } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams,IonSlides } from '@ionic/angular';
import { AppUtil } from '../app.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MemberApi } from 'src/providers/member.api'; 
import { HumanApi } from 'src/providers/human.api';
import { ClientApi } from 'src/providers/client.api';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers:[MemberApi,HumanApi,ClientApi]
})
export class Tab2Page extends AppBase {

  constructor(public zone:NgZone, public router: Router, 
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public memberApi:MemberApi, 
    public humanApi:HumanApi,
    public clientApi:ClientApi,
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone);
      
  }


  onMyLoad(e=undefined) {
    this.params;
    var that = this;
    // this.params.jiedan_id='1';
    console.log('onMyLoad-------');
    this.jiedan_id=this.params.jiedan_id;
  }
  jiedan_id=0;
  humandetail={
    kehu_name:'',
    img:'',
    name:'',
    xinyong:'',
    xingge:'',
    shenfenyanzhen:'',
    workstatus:'',
    workstatus_name:'',
    age:'',
    jingyan:'',
    yixian_name:'',
    video:'',
    city_provincecity:'',
    genitals_name:'',
    nationality_name:'',
    xueli:'',
    xueli_name:'',
    hunyin:'',
    hunyin_name:'',
    yiyu:'',
    yiyu_name:'',
    shengao:'',
    weight:'',
    languagename:'',
    cuisinename:'',
    humanxingget:'',
    work:[],
    certificate:[],
    baogao:[],
    fuwu:[],
  };
  onMyShow() {
    this.humanApi.humandetail({ id: this.params.id }).then( (humandetail:any) => {
      this.humandetail=humandetail;
    })
  }
  jiaoru(){
    this.clientApi.addhouxuan({
      human_id:this.params.id,
      jiedan_id:this.jiedan_id
    }).then((addhouxuan)=>{
      console.log(addhouxuan);
      if(addhouxuan.code=='0'){
        this.navigate("tab3",{jiedan_id:this.jiedan_id});
      }
    })
  }
}
