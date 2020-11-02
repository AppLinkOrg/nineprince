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
import { from } from 'rxjs';
 

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
  mobile='' ;

  segmentChanged(ev: any) {
    console.log('选中的', ev.detail.value);
    this.checked=ev.detail.value;
  }
  myDate='2020-08-14T05:30Z';
  onMyLoad(e=undefined) {
    this.params;
    this.setTitle("预约理疗服务")
    var that = this; 
    var date = new Date();
    
    console.log(date)
    var yy=date.getFullYear();
    var mm=( date.getMonth() + 1)>10?( date.getMonth() + 1):+'0'+( date.getMonth() + 1);
    var dd=date.getDate()>10?date.getDate():'0'+date.getDate();
    this.myDate=yy+'-'+mm+'-'+dd+'T05:30Z';
    console.log(this.myDate)
  }
 
   
  onMyShow() {
    this.memberApi.info({id:this.MemberInfo.id}).then((info: any) => { 
          this.mobile=info.mobile;
          this.gonghao=info.gonghao;
    })

    this.memberApi.timeslotlist({}).then((durationlist: any) => { 
      this.optionslist=[];
      for (let i = 0; i < durationlist.length; i++) {
        this.optionslist.push({
              text: durationlist[i].name,
              id:durationlist[i].id,
              value: i
          });
      } 

      this.durationlist = durationlist;
  
    })

    this.memberApi.addresslist({enterprise_id:AppBase.MemberInfo.enterprise_id}).then((addresslist: any) => { 

      for (let i = 0; i < addresslist.length; i++) {
        this.options2list.push({
              text: addresslist[i].name,
              id:addresslist[i].id,
              value: i
          });
      } 

      this.addresslist = addresslist;
  
    })

    if(AppBase.MemberInfo!=null){
      this.memberApi.projects({
        id:AppBase.MemberInfo.enterprise_id
      }).then((projectlist:any)=>{
        this.options3list=[];
      for (let i = 0; i < projectlist.length; i++) {
        
          this.options3list.push({
            text: projectlist[i].name,
            id:projectlist[i].id,
            value: i
          });
       
         
        } 

        this.projectlist = projectlist;
        })
    }
   
      this.gettech();
  }

  gettech(){

    var json={
      enterprise_id:0,
      project_ids:'',
      restdate:'',
      timeslots_id:''
    };
    if(AppBase.MemberInfo!=null){
      json.enterprise_id=AppBase.MemberInfo.enterprise_id;
    }
    
    if(this.project_id!=''){
      json.project_ids=this.project_id;
    }
    if(this.startdate!=''){
      json.restdate=this.startdate;
    }
    if(this.date_id!=''){
      json.timeslots_id=this.date_id;
    }
    this.memberApi.technicianlist	(json).then((technicianlist	: any) => { 
      this.options4list=[];
      for (let i = 0; i < technicianlist.length; i++) {
        if(technicianlist[i].datelist.length>0 && technicianlist[i].projects.length>0){
        this.options4list.push({
              text: technicianlist[i].name,
              id:technicianlist	[i].id,
              value: i
          });
        }
      } 

      this.technicianlist	 = technicianlist	;
  
    })
  }
  disabledDate(current) {
    // return current < this.myDate().subtract(1, 'day') 
  }
  update(){
    console.log(this.startdate,'日期')


    this.startdate= AppUtil.switchTimeFormat(this.startdate);
      
      this.date_id='';
      this.date_name=''; 
      this.gettech();
  }
 

   async openPicker() {

    if(this.checked=='b'){
      this.optionslist=[];
      var arr =[];
      arr=this.technicianlist[this.techseq].datelist;
      for(var i=0;i< arr.length;i++){
        if(arr[i].timeslots_id>0){
          this.optionslist.push({
            text: arr[i].timeslots_id_name,
            id:arr[i].timeslots_id,
            value: i
           })
        }
         
      }
      if(arr.length==0){
        this.toast('该技师今天休息,请重新选择日期');
        return
      }
    }

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
                    if(this.checked=='a'){
                      this.gettech();
                    }
                   
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

  if(this.checked=='b'){
    this.options3list=[];
    var arr=[];
    arr=this.technicianlist[this.techseq].projects;
    for(var i=0;i< arr.length;i++){
       this.options3list.push({
            text: arr[i].name,
            id:arr[i].id,
            value: i
          });
    }
  }


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

                  // if(this.checked=='a'){
                    this.gettech();
                  // }
              }
          }
      ]
  });
  await picker.present();
  
}
techseq='';
async openPicker4() {
  if(this.checked=='a'){
    if(this.startdate=='' || this.date_name==''){
      this.toast('请选择时间');
      return
    }
    if(this.project_name==''){
      this.toast('请选择项目');
      return
    }
  }

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
                  this.techseq=value.role.value;
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
