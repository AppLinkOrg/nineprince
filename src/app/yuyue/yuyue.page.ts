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
import { async } from '@angular/core/testing';
 

@Component({
  selector: 'app-yuyue',
  templateUrl: './yuyue.page.html',
  styleUrls: ['./yuyue.page.scss'],
  providers:[MemberApi]
})
export class YuyuePage extends AppBase {

  constructor(public zone:NgZone, public router: Router, 
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public pickerController:PickerController,
    public activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public memberApi:MemberApi,  
    ) {
    super(router, navCtrl, modalCtrl, toastCtrl, alertCtrl,activeRoute,zone,pickerController);
      
  }

  checked="a";
  startdate='';

  durationlist=[];
  addresslist = [];
  projectlist = [];
  technicianlist = [];

  optionslist = [];
  options2list = [];
  options3list = [];
  options4list = [];


 
  date_id='';
  date_name='';

  address_id='';
  address_name='';

  project_id='';
  project_name='';

  technician_id='';
  technician_name='';

  gonghao='';
  mobile='' 
  segmentChanged(ev: any) {
    console.log('选中的', ev.detail.value);
    this.checked=ev.detail.value;
  }

  onMyLoad(e=undefined) {
    this.params;
    var that = this; 
  }
 
   
  onMyShow() {
    this.memberApi.durationlist({}).then((durationlist: any) => { 

      for (let i = 0; i < durationlist.length; i++) {
        this.optionslist.push({
              text: durationlist[i].name,
              id:durationlist[i].id,
              value: i
          });
      } 

      this.durationlist = durationlist;
  
    })

    this.memberApi.addresslist({}).then((addresslist: any) => { 

      for (let i = 0; i < addresslist.length; i++) {
        this.options2list.push({
              text: addresslist[i].name,
              id:addresslist[i].id,
              value: i
          });
      } 

      this.addresslist = addresslist;
  
    })


    this.memberApi.projectlist({}).then((projectlist: any) => { 

      for (let i = 0; i < projectlist.length; i++) {
        this.options3list.push({
              text: projectlist[i].name,
              id:projectlist[i].id,
              value: i
          });
      } 

      this.projectlist = projectlist;
  
    })

    this.memberApi.technicianlist	({}).then((technicianlist	: any) => { 

      for (let i = 0; i < technicianlist	.length; i++) {
        this.options4list.push({
              text: technicianlist	[i].name,
              id:technicianlist	[i].id,
              value: i
          });
      } 

      this.technicianlist	 = technicianlist	;
  
    })
     
  }

  update(){
    console.log(this.startdate,'日期')
    this.startdate= AppUtil.switchTimeFormat(this.startdate);
    
  }
 

   async openPicker() {
    const picker = await this.pickerController.create({
        columns: [{name:'role',options:this.optionslist}],
        buttons: [
            {
                text: '取消',
                role: 'cancel'
            },
            {
                text: '确定',
                handler: value => {
                    console.log(value.role.value);
                    this.date_id=this.durationlist[value.role.value].id;
                    this.date_name=value.role.text; 
                }
            }
        ]
    });
    await picker.present();
}

async openPicker2() {
  const picker = await this.pickerController.create({
      columns: [{name:'role',options:this.options2list}],
      buttons: [
          {
              text: '取消',
              role: 'cancel'
          },
          {
              text: '确定',
              handler: value => {
                 
                  this.address_id=this.addresslist[value.role.value].id;
                  this.address_name=value.role.text; 
              }
          }
      ]
  });
  await picker.present();
}

async openPicker3() {
  const picker = await this.pickerController.create({
      columns: [{name:'role',options:this.options3list}],
      buttons: [
          {
              text: '取消',
              role: 'cancel'
          },
          {
              text: '确定',
              handler: value => {
                  console.log(value.role.value);
                  this.project_id=this.projectlist[value.role.value].id;
                  this.project_name=value.role.text; 
              }
          }
      ]
  });
  await picker.present();
}

async openPicker4() {
  const picker = await this.pickerController.create({
      columns: [{name:'role',options:this.options4list}],
      buttons: [
          {
              text: '取消',
              role: 'cancel'
          },
          {
              text: '确定',
              handler: value => {
                  console.log(value.role.value);
                  this.technician_id=this.technicianlist[value.role.value].id;
                  this.technician_name=value.role.text; 
              }
          }
      ]
  });
  await picker.present();
}
 
 
submit(){
  console.log(this.MemberInfo);
  console.log(this.MemberInfo.id,
    this.technician_id,
    this.project_id,
     this.date_id,
     this.gonghao,
     this.mobile)
  
  this.memberApi.ordersubmit({
    ordertype:this.params.type,
    member_id:this.MemberInfo.id,
    address_id:this.address_id,
    technician_id:this.technician_id,
    project_id:this.project_id,
    duration_id:this.date_id,
    yuyueriqi:this.startdate,
    gh:this.gonghao,
    mobile:this.mobile
  }).then((res: any) => { 
 
    
    if(res.code==0){
       this.navigate("dindanqueren",{id:res.return})
    }else{
      this.showAlert(res.result);
    }
    console.log(res)

  })
}
 
 
}
