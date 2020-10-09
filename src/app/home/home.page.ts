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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [MemberApi, InstApi, AliyunApi]
})
export class HomePage extends AppBase {

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


  yixianlist = [];
  xinzilist = [];
  date = '';
  zj = '';
  lx = null;
  zsm = 1;
  cuisinelist = [];
  caixi = null;
  mianjilist = [];
  mj = null;
  kidlist = [{ id: 1, age: 0.1 }];
  num = 1;
  sex = 'A';
  oldmansex = 'A';

  zl = 'A';
  fl = 1;
  zsmlist = [{ id: 1, name: '做饭做家务', check: false }, { id: 2, name: '照顾小孩', check: false }, { id: 3, name: '照顾老人', check: false }];
  experiencelist = [];
  jy = null;
  jy_id = null;

  agelist = [];
  xuelilist = [];
  xinggelist = [];
  provincelist = [];
  age = null;
  age_id = null;
  mj_id = null;

  zhujia=null;
  zhujia_id=null;

  province = null;
  province_id = null;

  xueli = null;
  xueli_id = null;

  xingge = null;
  money = 4500;
  xzshen = '';
  xzshi = '';
  xzqu = '';
  shi = [];
  qu = [];
  shen = [];
  name = '';
  phone = '';
  xiaoqu = '';
  lx_id = null;

  alllist = [];
  zhujialist=[];

  fenxiaoshang = '';
  onMyLoad(e = undefined) {
    //参数
    this.params;

    this.instApi.fenxiaoshang({ id: this.params.id }).then((fenxiaoshang: any) => {

      this.fenxiaoshang = fenxiaoshang.name;
    })



    this.instApi.yixianlist({}).then((yixianlist: any) => {
      console.log(yixianlist);
      this.yixianlist = yixianlist;
    })

    this.instApi.zhujialist({}).then((zhujialist: any) => {
      console.log(zhujialist);
      this.zhujialist = zhujialist;
    })

    

    //经验
    this.instApi.experiencelist({}).then((experiencelist: any) => {
      console.log(experiencelist);
      this.experiencelist = experiencelist;
    })

    //年龄
    this.instApi.agelist({}).then((agelist: any) => {
      console.log(agelist);
      this.agelist = agelist;
    })

    //学历
    this.instApi.xuelilist({}).then((xuelilist: any) => {
      console.log(xuelilist);
      this.xuelilist = xuelilist;
    })

    //省份
    this.instApi.provincelist({}).then((provincelist: any) => {
      console.log(provincelist);
      this.provincelist = provincelist;
    })

    //性格
    this.instApi.xinggelist({}).then((xinggelist: any) => {
      console.log(xinggelist);
      for (var i = 0; i < xinggelist.length; i++) {
        xinggelist[i].check = false;
      }
      this.xinggelist = xinggelist;
    })
 
    this.instApi.xinzilist({}).then((xinzilist: any) => {
      console.log(xinzilist);
      this.xinzilist = xinzilist;
    })
    this.instApi.provincelist({}).then((shen: any) => {
      console.log(shen);
      this.shen = shen;
    })

    this.instApi.cuisinelist({}).then((caixi: any) => {
      console.log(caixi);
      for (var i = 0; i < caixi.length; i++) {
        caixi[i].check = false;
      }
      this.cuisinelist = caixi;
    })

    this.instApi.mianjilist({}).then((mianji: any) => {
      console.log(mianji);
      for (var i = 0; i < mianji.length; i++) {
        mianji[i].check = false;
      }
      this.mianjilist = mianji;
    })


  }


  onMyShow(e = undefined) {


  }

  setnull(){
 
    this.yixianlist = [];
    this.xinzilist = [];
    this.date = '';
    this.zj = '';
    this.lx = null;
    this.zsm = 1;
    this.cuisinelist = [];
    this.caixi = null;
    this.mianjilist = [];
    this.mj = null;
    this.kidlist = [{ id: 1, age: 0.1 }];
    this.num = 1;
    this.sex = 'A';
    this.oldmansex = 'A';
  
    this.zl = 'A';
    this.fl = 1;
    this.zsmlist = [{ id: 1, name: '做饭做家务', check: false }, { id: 2, name: '照顾小孩', check: false }, { id: 3, name: '照顾老人', check: false }];
    this.experiencelist = [];
    this.jy = null;
    this.jy_id = null;
  
    this.agelist = [];
    this.xuelilist = [];
    this.xinggelist = [];
    this.provincelist = [];
    this.age = null;
    this.age_id = null;
    this.mj_id = null;
    this.zhujia=null;
    this.zhujia_id=null;

    this.province = null;
    this.province_id = null;
  
    this.xueli = null;
    this.xueli_id = null;
  
    this.xingge = null;
    this.money = 4500;
    this.xzshen = '';
    this.xzshi = '';
    this.xzqu = '';
    this.shi = [];
    this.qu = [];
    this.shen = [];
    this.name = '';
    this.phone = '';
    this.xiaoqu = '';
    this.lx_id = null;
    this.zhujialist=[];


    this.instApi.yixianlist({}).then((yixianlist: any) => {
      console.log(yixianlist);
      this.yixianlist = yixianlist;
    })

    this.instApi.zhujialist({}).then((zhujialist: any) => {
      console.log(zhujialist);
      this.zhujialist = zhujialist;
    })

    //经验
    this.instApi.experiencelist({}).then((experiencelist: any) => {
      console.log(experiencelist);
      this.experiencelist = experiencelist;
    })

    //年龄
    this.instApi.agelist({}).then((agelist: any) => {
      console.log(agelist);
      this.agelist = agelist;
    })

    //学历
    this.instApi.xuelilist({}).then((xuelilist: any) => {
      console.log(xuelilist);
      this.xuelilist = xuelilist;
    })

    //省份
    this.instApi.provincelist({}).then((provincelist: any) => {
      console.log(provincelist);
      this.provincelist = provincelist;
    })

    //性格
    this.instApi.xinggelist({}).then((xinggelist: any) => {
      console.log(xinggelist);
      for (var i = 0; i < xinggelist.length; i++) {
        xinggelist[i].check = false;
      }
      this.xinggelist = xinggelist;
    })
 
    this.instApi.xinzilist({}).then((xinzilist: any) => {
      console.log(xinzilist);
      this.xinzilist = xinzilist;
    })
    this.instApi.provincelist({}).then((shen: any) => {
      console.log(shen);
      this.shen = shen;
    })

    this.instApi.cuisinelist({}).then((caixi: any) => {
      console.log(caixi);
      for (var i = 0; i < caixi.length; i++) {
        caixi[i].check = false;
      }
      this.cuisinelist = caixi;
    })

    this.instApi.mianjilist({}).then((mianji: any) => {
      console.log(mianji);
      for (var i = 0; i < mianji.length; i++) {
        mianji[i].check = false;
      }
      this.mianjilist = mianji;
    })

 
  }

  jiaqian() {

    this.money = this.money + 100
  }
  kouqian() {
    if (this.money > 100) {
      this.money = this.money - 100
    }
  }

  checkjinyan(index, id) {
    this.jy = index;
    this.jy_id = id;
  }

  checkage(index, id) {
    this.age = index;
    this.age_id = id;
  }

  checkprovince(index, id) {
    this.province = index;
    this.province_id = id;
  }

  checkxueli(index, id) {
    this.xueli = index;
    this.xueli_id = id;
  }

  checkxingge(index) {

    if (this.xinggelist[index].check == true) {
      this.xinggelist[index].check = false;
    } else {
      this.xinggelist[index].check = true;
    }

    //this.xingge=index;
  }



  add() {
    this.num++;
    this.kidlist.push({ id: this.num, age: 0.1 })
  }

  checksex(sex) {
    this.sex = sex;
  }

  checkoldmansex(sex) {
    this.oldmansex = sex;
  }

  checkfenlei(index) {
    this.fl = index;
  }

  laoren(type3) {
    this.zl = type3;
  }

  jia(index) {
    // console.log(index,'序号')

    if (this.kidlist[index].age < 1 && this.kidlist[index].age > 0) {
      this.kidlist[index].age = this.roundFun((this.kidlist[index].age + 0.1), 1);
    } else {
      this.kidlist[index].age = this.kidlist[index].age + 0.5
      console.log("走没走")
    }

    console.log(this.kidlist[index].age, '序号')
  }
  jian(index) {

    console.log(index, '序号')

    if (this.kidlist[index].age <= 0.1) {
      this.toast("不能低于0");
    } else if (this.kidlist[index].age < 1 && this.kidlist[index].age > 0.1) {

      this.kidlist[index].age = this.roundFun((this.kidlist[index].age - 0.1), 1);


      console.log("走没走")
    } else {
      this.kidlist[index].age = this.kidlist[index].age - 0.5
    }

    // this.kidlist[index].age--
  }

  roundFun(value, n) {
    return Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
  }

  check(type) {
    console.log(type, '选哪个')
    this.zj = type;
  }

  xuanleixin(index, id) {
    this.lx = index;
    this.lx_id = id;
  }

  xuanzhujia(index, id) {
    this.zhujia = index;
    this.zhujia_id = id;
  }

  // 选菜系
  xuancaixi(index) {
    this.caixi = index;
    if (this.cuisinelist[index].check == true) {
      this.cuisinelist[index].check = false;
    } else {
      this.cuisinelist[index].check = true;
    }

  }

  //选面积
  xuanmianji(index, id) {
    this.mj = index;
    this.mj_id = id;

  }
  //希望能做什么
  zuoshenme(type2) {
    this.zsm = type2;
  }
  zuoshenme2(index) {


    if (this.zsmlist[index].check == true) {
      this.zsmlist[index].check = false;
    } else {
      this.zsmlist[index].check = true;
    }
    // console.log(this.zsmlist);
  }


  submit() {






    console.log(this.zsmlist)
    var ciyaolist = this.zsmlist;
    var ciyao = '';

    for (var i = 0; i < this.zsmlist.length; i++) {
      if (this.zsmlist[i].check == true) {
        ciyao += this.zsmlist[i].name + ','
      }
    }

    var ciyao = ciyao.substr(0, ciyao.length - 1);
    //console.log(ciyao)

    //return;


    console.log(this.xinggelist)
    var xingge = [];

    for (var j = 0; j < this.xinggelist.length; j++) {
      if (this.xinggelist[j].check == true) {
        xingge.push(this.xinggelist[j].id)
      }
    }

    var caixi = [];

    for (var j = 0; j < this.cuisinelist.length; j++) {
      if (this.cuisinelist[j].check == true) {
        caixi.push(this.cuisinelist[j].id)
      }
    }

    var jingyan = [];

    for (var j = 0; j < this.experiencelist.length; j++) {
      if (this.experiencelist[j].check == true) {
        jingyan.push(this.experiencelist[j].id)
      }
    }

    var age = [];

    for (var j = 0; j < this.agelist.length; j++) {
      if (this.agelist[j].check == true) {
        age.push(this.agelist[j].id)
      }
    }
    var jiguan = [];

    for (var j = 0; j < this.provincelist.length; j++) {
      if (this.provincelist[j].check == true) {
        jiguan.push(this.provincelist[j].id)
      }
    }
    var xueli = [];

    for (var j = 0; j < this.xuelilist.length; j++) {
      if (this.xuelilist[j].check == true) {
        xueli.push(this.xuelilist[j].id)
      }
    }
    //var xingge=xingge.substr(0, ciyao.length - 1); 


    console.log(xingge);
    
    // return;

    if (this.zhujia == null) {
      this.toast("请选择是否需要阿姨住家");
      return
    }

    if (this.xzshen == '' || this.xzshi == '') {
      this.toast("请选择工作地点");
      return
    }

    if (this.xiaoqu == '') {
      this.toast("请填写街道/小区");
      return
    }

    if (this.date == '') {
      this.toast("请选择上户日期");
      return
    }

    if (this.lx == null) {
      this.toast("请选择所需的阿姨类型");
      return
    }


    if (this.zsm == 1) {
      var kouwei = 0;
      for (var i = 0; i < this.cuisinelist.length; i++) {
        if (this.cuisinelist[i].check == true) {
          var kouwei = 1;
        }
      }

      if (kouwei == 0) {
        this.toast("请选择口味要求");
        return
      }

      if (this.mj == null) {
        this.toast("请选择家庭卫生面积");
        return
      }

    }

    if (this.zsm == 1) {
      this.oldmansex = '';
    }




    // if (jingyan.length == 0) {
    //   this.toast("请选择经验");
    //   return
    // }
    // if (age.length == 0) {
    //   this.toast("请选择年龄");
    //   return
    // }
    // if (jiguan.length == 0) {
    //   this.toast("请选择籍贯");
    //   return
    // }
    // if (xueli.length == 0) {
    //   this.toast("请选择学历");
    //   return
    // }
 


    if (this.name == '') {
      this.toast("请输入姓名");
      return
    }

    if (this.phone == '') {
      this.toast("请输入联系方式");
      return
    }
    var json={
      zhujia: this.zhujia_id,
      dizhi: this.xzshen + this.xzshi + this.xzqu,
      jiedao: this.xiaoqu,
      riqi: this.date,
      abilitytype_id: this.lx_id,
      workcontent_id: this.zsm,
      oldmansex: this.oldmansex,
      jingyan: jingyan,
      age: age,
      jobcontent: ciyao,
      jiguan: jiguan,
      xueli: xueli,
      gongzi: this.money,
      xingge: xingge,
      cuisine: caixi,
      sex: this.sex,
      name: this.name,
      phone: this.phone,
      areas_id: this.mj_id,
      fenxiao:this.params.id,
      zili:this.zl
    }
    this.aliyunApi.verifycode({
      mobile: this.phone,
      verifycode: this.yanzhanma,
      type: 'xuqiutijiao'
    }).then((verifycode: any) => {
      console.log(verifycode);
      if (verifycode.code == '0') {

        this.instApi.submit(json).then((submit) => {
    
    
          var chooselist = [{
            zhujia: this.zhujia_id,
            abilitytype_id: this.lx_id,
            jingyan: jingyan,
            age: age,
            jiguan: jiguan,
            xueli: xueli,
            xingge: xingge,
          }];
          var jsonlist = JSON.stringify(chooselist);
    
          if (this.zsm == 2) {
            var json = [];
            for (var i = 0; i < this.kidlist.length; i++) {
              json.push({ jiedan_id: submit.return, name: this.kidlist[i].age, status: 'A' })
            }
    
            var datajson = JSON.stringify(json);
            console.log(json, datajson, '昆仑决昂克赛拉的'); 

            this.instApi.addchild({ datajson: datajson }).then((addchild) => {
              console.log(addchild);
              this.setnull();

              this.navigate("tab1", { jsonlist: jsonlist, jiedan_id: submit.return });
            })
          }
    
          else {
            this.setnull();
            
            this.navigate("tab1", { jsonlist: jsonlist, jiedan_id: submit.return });
          }
    
        })
      } else {
        this.toast('验证码错误');
        return
      }
    })


    // this.alllist.push({

    // })

    // var list=this.alllist;


    // console.log(this.alllist,'柯尼卡')


  }
  xzsex(id) {
    console.log(111);
    console.log(id);
    this.sex = id;
  }

  xzshen1(name) {
    this.xzshi = '';
    this.xzqu = '';
    var shi = this.shen.filter((item) => {
      return item.name == name;
    })
    console.log(shi);
    this.shi = shi[0].city;
  }
  xzshi1(name) {

    var qu = this.shi.filter((item) => {
      return item.name == name;
    })
    this.instApi.getqu({ city_id: qu[0].id }).then((qu) => {
      this.qu = qu;
    })

    console.log(qu, '看看')

  }
  yanzhanma = '';
  shijian = 0;

  send() {

    if (this.phone.toString().length != 11 || this.phone.toString()[0] != '1') {
      this.showAlert("手机号格式错误");
      return
    }
    this.aliyunApi.sendverifycode({
      mobile: this.phone
    }).then((ret: any) => {
      if (ret.code == '0') {
        this.toast('验证码已发送');
        this.shijian = 60;
        var aaaa = setInterval(() => {
          this.shijian--;
          if (this.shijian == 0) {
            clearInterval(aaaa);
          }
        }, 1000)
      } else {
        this.toast('发送失败');
      }

    })
  }
}
