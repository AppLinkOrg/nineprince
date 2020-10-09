import { Component, NgZone, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppBase } from '../AppBase';
import { Router } from '@angular/router';
import {  ActivatedRoute, Params } from '@angular/router';
import { NavController, ModalController, ToastController, AlertController, NavParams,IonSlides } from '@ionic/angular';
import { AppUtil } from '../app.util';
import { DomSanitizer } from '@angular/platform-browser';
import { MemberApi } from 'src/providers/member.api'; 
import { HumanApi } from 'src/providers/human.api';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers:[MemberApi,HumanApi]
})
export class Tab1Page  extends AppBase {

  constructor(public zone:NgZone, public router: Router, 
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public memberApi:MemberApi, 
    public humanApi:HumanApi,
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone);
      
  }

  shooselist=[];
  age=null;
  exp=null;
  shenfen=null;
  xueli=null;
  xingge=[];
  type=null;
  zhujia='';
  jzz=true;
  onMyLoad(e=undefined) {
    var that = this; 
    this.params;

    this.shooselist=JSON.parse(this.params.jsonlist);
    
    this.age=this.shooselist[0].age;
    this.exp=this.shooselist[0].jingyan;
    this.shenfen=this.shooselist[0].jiguan;
    this.xueli=this.shooselist[0].xueli;
    this.xingge=this.shooselist[0].xingge;
    this.type=this.shooselist[0].abilitytype_id;
    this.zhujia=this.shooselist[0].zhujia;

    console.log(this.shooselist[0],'onMyLoad-------');
  }

  humanlist=[];
  num=0;
  onMyShow() {
    // ,type:'B',ages:this.age,exp:this.exp,
    // searchyx:this.type,shenfen:this.shenfen,
    // xueli:this.xueli,zhujia:this.zhujia,xingges:this.xingge

    console.log('112233-------');
      this.humanApi.humanlist({type:'B',ages:this.age,exp:this.exp,
      searchyx:this.type,shenfen:this.shenfen,i:this.num,
      xueli:this.xueli,zhujia:this.zhujia,xingges:this.xingge}).then((humanlist:any)=>{
        for(let item of humanlist){
          if (item.jingyan.indexOf('年') == -1) {
            item.jingyan += '年经验'
          }
          if (item.age.indexOf('岁') == -1) {
            item.age += '岁'
          }
        }
        this.humanlist=humanlist;
        if(this.humanlist.length<10){

        }else {
          this.num++;
        }
        
        this.jzz=false;
        console.log(this.humanlist,'=====');
      })
    
  }
  xiangqing(id){
    this.num=this.num-1;
    this.navigate('tab2',{id:id,jiedan_id:this.params.jiedan_id});
  }
  houxuan(){
    this.num=this.num-1;
    this.navigate("tab3",{jiedan_id:this.params.jiedan_id});
  }
  xh=0;
  xianshilist=[];
  huanyi(){
   
    this.humanApi.humanlist({type:'B',ages:this.age,exp:this.exp,
      searchyx:this.type,shenfen:this.shenfen,i:this.num,
      xueli:this.xueli,zhujia:this.zhujia,xingges:this.xingge}).then((humanlist:any)=>{
        for(let item of humanlist){
          if (item.jingyan.indexOf('年') == -1) {
            item.jingyan += '年经验'
          }
          if (item.age.indexOf('岁') == -1) {
            item.age += '岁'
          }
        }
        this.humanlist=humanlist;
       
        if(humanlist.length<10){
          this.num=0;
        }else {
          this.num++;
        }
        this.jzz=false;
        console.log(this.humanlist,'=====');
      })
    // var courselist = this.humanlist;
    // var xh=this.xh;
    // var xianshilist=[];
    // for (var i = 0; i < courselist.length; i++) {
    //   if (i == xh) {
    //     console.log("进来了");
    //     console.log(i);

    //     if (courselist.length == 1) {
    //       xianshilist.push(courselist[i]);
    //       // xianshilist.push(courselist[0]);
    //       //xianshilist.push(courselist[1]);
    //       xh = 2;
    //      this.xianshilist=xianshilist;
    //      this.xh=xh;
    //       console.log(xianshilist);
    //       console.log(66666666);
    //       return
    //     }
    //     if (courselist.length == 2) {
    //       xianshilist.push(courselist[i]);
    //       xianshilist.push(courselist[0]);
    //       //xianshilist.push(courselist[1]);
    //       xh = 2;
    //       this.xianshilist=xianshilist;
    //       this.xh=xh;
    //       console.log(xianshilist);
    //       console.log(66666666);
    //       return
    //     }


    //     if (i == courselist.length - 2) {
    //       xianshilist.push(courselist[i]);
    //       xianshilist.push(courselist[i + 1]);
    //       xianshilist.push(courselist[0]);
    //       xh = 1;
    //       this.xianshilist=xianshilist;
    //      this.xh=xh;
    //       console.log(xianshilist);
    //       console.log(66666666);
    //       return
    //     }
    //     if (i == courselist.length - 1) {
    //       xianshilist.push(courselist[i]);
    //       xianshilist.push(courselist[0]);
    //       xianshilist.push(courselist[1]);
    //       xh = 2;
    //       this.xianshilist=xianshilist;
    //       this.xh=xh;
    //       console.log(xianshilist);
    //       console.log(66666666);
    //       return
    //     }


    //     if (i == courselist.length) {
    //       console.log(788888888);
    //       xianshilist.push(courselist[0]);
    //       xianshilist.push(courselist[1]);
    //       xianshilist.push(courselist[2]);
    //       xh = 3;
    //       this.xianshilist=xianshilist;
    //      this.xh=xh;
    //       return
    //     }


    //     xianshilist.push(courselist[i]);
    //     xianshilist.push(courselist[i + 1]);
    //     xianshilist.push(courselist[i + 2]);
    //     xianshilist.push(courselist[i + 3]);
    //     xianshilist.push(courselist[i + 4]);
    //     xianshilist.push(courselist[i + 5]);
    //     xianshilist.push(courselist[i + 6]);
    //     xianshilist.push(courselist[i + 7]);
    //     xianshilist.push(courselist[i + 8]);
    //     xianshilist.push(courselist[i + 9]);
    //     xh = xh + 10;
    //     if (xh == courselist.length) {
    //       xh = 0;
    //     }
    //     console.log(xh,'-----');
    //     this.xianshilist=xianshilist;
    //      this.xh=xh;
    //     return
    //   }

    // }
  }
}
