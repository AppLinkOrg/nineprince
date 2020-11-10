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
  project_price=0;

  technician_id='';
  technician_name='';

  gonghao='';
  mobile='' ;

  segmentChanged(ev: any) {
    console.log('选中的', ev.detail.value);
    this.checked=ev.detail.value;
  }
  myDate='2020-08-14T05:30Z';
  type='';
  onMyLoad(e=undefined) {
    this.params;
    this.type=this.params.type;
    if(this.params.type=='A'){
      this.setTitle("预约理发服务")
    
    }else {
      this.setTitle("预约理疗服务")
    }
   
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

      this.gettech();
      this.gettime();
      this.getaddress();
      this.getproject();
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
    
    if(this.project_id!='' && this.checked=='a'){
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
  gettime(){
    this.memberApi.timeslotlist({}).then((durationlist: any) => { 
      this.optionslist=[];
     
      for (let i = 0; i < durationlist.length; i++) {
       
        this.optionslist.push({
              text: durationlist[i].name,
              id:durationlist[i].id,
              value:  durationlist[i].id
          });
      } 
    
      this.durationlist = durationlist;
  
    })
  }

  getaddress(){
    this.memberApi.addresslist({enterprise_id:AppBase.MemberInfo.enterprise_id}).then((addresslist: any) => { 
      this.options2list=[];
      for (let i = 0; i < addresslist.length; i++) {
        this.options2list.push({
              text: addresslist[i].name,
              id:addresslist[i].id,
              value: i
          });
      } 

      this.addresslist = addresslist;
  
    })
  }
  getproject(){
    if(AppBase.MemberInfo!=null){

      this.memberApi.projects({
        id:AppBase.MemberInfo.enterprise_id,
        type:this.params.type
      }).then((projectlist:any)=>{
        this.options3list=[];
      for (let i = 0; i < projectlist.length; i++) {
        
          this.options3list.push({
            text: projectlist[i].name,
            id:projectlist[i].id,
            value: projectlist[i].id,
            price: projectlist[i].price
          });
       
         
        } 

        this.projectlist = projectlist;
        })
    }
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
 
  compare(arg) {
    return function(a, b) {
        return a[arg] - b[arg];
    }
}
   async openPicker() {
    this.gettime();
    if(this.checked=='b'){
      if(this.technician_id=='' ){
        this.toast('请选择技师');
        return
      }
      console.log(this.project_id)
      if(this.project_id=='' ){
        this.toast('请选择项目');
        return
      }
    
      this.optionslist=[];
      var arr =[];
      arr=this.technicianlist[this.techseq].datelist;
      for(var i=0;i< arr.length;i++){
        
            if(arr[i].timeslots_id>0){
              this.optionslist.push({
                text: arr[i].timeslots_id_name,
                id:arr[i].timeslots_id,
                value: arr[i].timeslots_id
               })
              }
         
      }
      if(arr.length==0){
        this.toast('该技师今天休息,请重新选择日期');
        return
      }
      this.optionslist=this.optionslist.sort(this.compare('id'));
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
                    console.log(this.optionslist,'aa');
                    this.date_id=value.role.value;
                    this.date_name=value.role.text; 
                    if(this.checked=='a'){
                        this.technician_id='';
                        this.technician_name='';
                      
                      this.gettech();
                    }
                   
                }
            }
        ]
    });
    await picker.present();

   
}

async openPicker2() {
  this.getaddress();
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
  this.getproject();

  if(this.checked=='b'){
    if(this.technician_id=='' ){
      this.toast('请选择技师');
      return
    }
    console.log('bbbb')
    this.options3list=[];
    var arr=[];
    arr=this.technicianlist[this.techseq].projects;
    for(var i=0;i< arr.length;i++){
       this.options3list.push({
            text: arr[i].name,
            id:arr[i].id,
            value: arr[i].id,
            price:arr[i].price
          });
    }
    if(arr.length==0){
      this.toast('该技师还没有项目，请现在别的技师');
      return
    }
    console.log(arr,'arr')
  }else {
    if(this.startdate=='' || this.date_name==''){
      this.toast('请选择时间');
      return
    }
  }
  
  console.log(this.options3list,'pppp');
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
                  console.log(value);
                 
                  this.project_id=value.role.value;
                  this.project_name=value.role.text; 
                  this.project_price=this.options3list[value.role.value].price;
                  if(this.checked=='a'){
                    this.technician_id='';
                    this.technician_name='';
                  }
                  // if(this.checked=='a'){
                    this.gettech();
                  // }
              }
          }
      ]
  });
  await picker.present();
  
}
techseq=0;
async openPicker4() {
  this.gettech();
  if(this.checked=='a'){
    if(this.startdate=='' || this.date_name==''){
      this.toast('请选择时间');
      return
    }
    if(this.project_name==''){
      this.toast('请选择项目');
      return
    }
    if(this.options4list.length==0){
      this.toast('这个时间段没有技师哦~');
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
                  if(this.checked=='b'){
                    this.project_id='';
                    this.project_name='';
                    this.project_price=0;
                    this.date_id='';
                    this.date_name='';
                  }
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

     if(this.checked=='a'){

      if(this.startdate==''){
        this.toast('请选择预约日期');
        return
      }
      if(this.date_id==''){
        this.toast('请选择时段');
        return
      }
      if(this.address_id==''){
        this.toast('请选择地址');
        return
      }
      if(this.project_id==''){
        this.toast('请选择项目');
        return
      }
      if(this.technician_id==''){
        this.toast('请选择技师');
        return
      }
     }else{

      if(this.technician_id==''){
        this.toast('请选择技师');
        return
      }
      if(this.project_id==''){
        this.toast('请选择项目');
        return
      }
      if(this.address_id==''){
        this.toast('请选择地址');
        return
      }
      if(this.startdate==''){
        this.toast('请选择预约日期');
        return
      }
      if(this.date_id==''){
        this.toast('请选择时段');
        return
      }

     }

 
  this.memberApi.ordersubmit({
    ordertype:this.params.type,
    member_id:this.MemberInfo.id,
    address_id:this.address_id,
    technician_id:this.technician_id,
    project_id:this.project_id,
    duration_id:this.date_id,
    yuyueriqi:this.startdate,
    gh:this.gonghao,
    mobile:this.mobile,
    price:this.project_price
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
