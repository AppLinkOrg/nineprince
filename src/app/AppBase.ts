import { ApiConfig } from "./api.config";
import { AppUtil } from "./app.util";
import { NavController, ModalController, ToastController, NavParams, AlertController,PickerController }
    from "@ionic/angular";
import { InstApi } from "../providers/inst.api";
import { MemberApi } from "../providers/member.api";
import { WechatApi } from "../providers/wechat.api";
import { AppComponent } from "./app.component";
import { ReturnStatement } from "@angular/compiler";
import { ViewController } from '@ionic/core';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { OnInit, OnDestroy, NgZone } from '@angular/core';

declare let wx: any;

export class AppBase implements OnInit, OnDestroy {
    public needlogin = false;

    static CITYID: string = "440300";
    static CITYNAME: string = "深圳市";
    static CITYSET = false;

    mylat = 0;
    mylng = 0;


    static lastlat = 0;
    static lastlng = 0;
    static lastdistance = 0;
    static lastaddress = {
        address: { ad_info: { adcode: "", city: "", province: "", district: "" } }
    };
    address: { ad_info: { adcode: "", city: "", province: "", district: "" } }
    citycode = "0";
    lastdistance = 0;

    public static TABName = "";
    public static LASTTAB = null;
    public static CurrentRoute: Router = null;
    public static CurrentNav: NavController = null;

    public static myapp: AppComponent = null;
    public static instapi: InstApi = null;
    public static memberapi: MemberApi = null;
    public static wechatApi: WechatApi = null;
    public static UNICODE = "hrms";

    public statusBarStyle = "X";//{DARK}
    public uploadpath: string = ApiConfig.getUploadPath();
    public util = AppUtil;
    public static Resources = null;
    public res = null;
    public static InstInfo = null;
    public static MemberInfo = null;
    public InstInfo = {
        fenxiaobili: 0, intotel: "", worktime: "", kefuerweima: "",
        xiajishijian: "", personnumber: "0", h5sharelogo: "", h5sharetitle: "",
        h5sharedesc: "", tel: "", h5appid: "", kf: "", openning: "", successtips: "",
        orderneedknow: "", name: "", logo: "", memberlogo: "", undershipping: 0,
        shippingfee: 0, about1: "", about2: "", about3: "", about4: "", about5: ""
    };
    public MemberInfo = {  mobile: "", id: 0, name: "", gonghao: ""};
    public static MYBABY = [];
    public mybaby = [];
    public options = null;
    public params: Params = null;

    public formdata = null;

    public static jump = true;

    public keyt = "MemberInfo";
    public stat = "stat91";

    public heading = "学榜";

    public firseonshow = true;
    public scrolltop = 0;
    public headerscroptshow = 0;

    static Current = null;
    currentpage = "";
    static daima='';
    static STATICRAND = "";


    mySwiperOption = {
        autoplay: {
            delay: 5000,
        },
        zoom: {
            enabled: false
        },
        loop: true
    }
    mySwiperOption2 = {
        zoom: {
            enabled: false
        }
    }


    public constructor(
        public router: Router,
        public navCtrl: NavController,
        public modalCtrl: ModalController,
        public toastCtrl: ToastController, 
        public alertCtrl: AlertController,
        public activeRoute: ActivatedRoute,
        public zone: NgZone,
        public pickerController:PickerController
    ) {

        var openid= window.sessionStorage.getItem("openid"); 
        if(openid==null){
            this.loadwechat();
        }
       
        
     
        this.activeRoute.queryParams.subscribe((params: Params) => {
            console.log(params);
            this.params = params;
        });
        this.res = [];
        var stat = window.sessionStorage.getItem(this.stat);
        if (stat == null) {
            stat = parseInt((Math.random() * 99999.9).toString()).toString();
            window.sessionStorage.setItem(this.stat, stat);
        }
        AppBase.STATICRAND = stat;

        var MemberInfo = window.localStorage.getItem(this.keyt);
        //console.log(MemberInfo,'瞧瞧这个')
 
        if (MemberInfo != null) {
            AppBase.MemberInfo = JSON.parse(MemberInfo);
            // this.navigate('/home');
        }else {
            if( AppBase.daima==''){
                this.navigate('/shudaima');
            }
        }
        
        console.log("rdw", AppBase.MemberInfo);

        this.formdata = {};
    }
    setStatusBar() {
        //  this.statusBar.styleLightContent();
    }
    ngOnInit() {

        ApiConfig.SetUnicode(AppBase.UNICODE);
        this.getResources();
        this.getInstInfo();
        this.onMyLoad();
        this.getMemberInfo();
        this.setStatusBar();
 
        //var code= this.getUrlKey("code");
       // console.log(code,'这次看看');
        console.log(location.href,'链接看看')
    }
    onMyLoad() {
       
    }

     getCodeApi() { //获取code   
        let urlNow = encodeURIComponent(window.location.href);
        let scope = 'snsapi_userinfo'; //snsapi_userinfo   //静默授权 用户无感知
        let appid='wxed38866af330cfd8';
        let state = "123";
        let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;
    
       //alert(url);
        //console.log(url,"返回的链接")
        window.location.href = url;
      }

      loadwechat() {
        let viewer = window.navigator.userAgent.toLowerCase();
     
          //直接调用微信支付
          let code = this.getUrlKey("code"); //获取url参数code
          if (code) { //拿到code， code传递给后台接口换取opend
            //alert(code);
            
            AppBase.memberapi.getwechatinfo({code:code}).then((res:any)=>{
                console.log(res)
                if (res.errcode == undefined) {
                    //localStorage.setItem("openid", res.openid); 
                    window.sessionStorage.setItem("openid", res.openid);
                    window.sessionStorage.setItem("token", res.openid);
                    // AppBase.memberapi.register(res).then(()=>{

                    // })
                    // this.loadwechatconfig();
                  }
            })
          } else {

            this.getCodeApi();
          }
     
      }

      loadwechatconfig() {
        AppBase.memberapi.gensign({url:location.href.split('#')[0]}).then((config:any)=>{
           
            var json = {
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: "wxed38866af330cfd8", // 必填，公众号的唯一标识
                timestamp: config.timestamp, // 必填，生成签名的时间戳
                nonceStr: config.nonceStr, // 必填，生成签名的随机串
                signature: config.signature, // 必填，签名，见附录1
                jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              };
              console.log("wxconfig",config, json);
              wx.config(json);
        })
 
      }

    getUrlKey(name) { //获取url 参数
        //  alert(location.href)
         let a=1/0;
          return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }

 


    getInstInfo() {
        console.log(66666)
        if (AppBase.InstInfo == null) {
            AppBase.instapi.info({}, false).then((InstInfo) => {
                AppBase.InstInfo = InstInfo;
                this.InstInfo = InstInfo;
                console.log(InstInfo);
                console.log("aaabbbccc", AppBase.STATICRAND);
                if (this.params.code != undefined && this.params.state == AppBase.STATICRAND) {

                } else {
                    // if (AppBase.MemberInfo == null) {

                    //     var url = window.location.href;
                    //     //url="http://yuyue.helpfooter.com/tabs/tab1";
                    //     var redirecturl = encodeURIComponent(url);
                    //     var redurl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + this.InstInfo.h5appid + "&redirect_uri=" + redirecturl + "&response_type=code&scope=snsapi_userinfo&state=" + AppBase.STATICRAND + "#wechat_redirect";
                    //     console.log({ redurl });

                    //     window.location.href = redurl;
                    // }
                }
                //this.setWechatShare();
            });
        } else {
            console.log(55555);
            this.InstInfo = AppBase.InstInfo;
            //this.setWechatShare();
        }
    }
    getMemberInfo() {
        console.log("牛逼了");
        console.log("11111");

        this.MemberInfo=AppBase.MemberInfo;
        // AppBase.memberapi.info({}).then((MemberInfo) => {
        //     if (MemberInfo == null || MemberInfo.mobile == undefined || MemberInfo.mobile == "") {
                
        //         MemberInfo = null;
        //     }
        //     this.MemberInfo = MemberInfo;
        // });
    }
    shouye() {

        this.navCtrl.navigateBack('tabs/home');
        return;


    }
    getResources() {
        if (AppBase.Resources == null) {
            AppBase.instapi.resources({}, false).then((res) => {
                AppBase.Resources = res;
                this.res = res;
            });
        } else {
            this.res = AppBase.Resources;
        }
    }
    ionViewDidEnter() {

        console.log("wx", "onmyshow");
        // if (AppBase.MemberInfo == null) {
        //     //
        //     if (this.params.code != undefined && this.params.state == AppBase.STATICRAND) {
        //         AppBase.memberapi.getuserinfo({ h5: "Y", code: this.params.code, grant_type: "authorization_code" }).then((MemberInfo) => {
        //             MemberInfo.h5openid = MemberInfo.openid;
        //             AppBase.MemberInfo = MemberInfo;
        //             this.MemberInfo = MemberInfo;


        //             ApiConfig.SetToken(MemberInfo.h5openid);
        //             ApiConfig.SetTokenKey(MemberInfo.unionid);
        //             AppBase.memberapi.updateh5(MemberInfo).then((res) => {
        //                 // this.onMyShow();
        //                 AppBase.memberapi.info({}).then((info) => {

        //                     var order = info.order;
        //                     var dfkorder = 0;
        //                     var ypborder = 0;
        //                     var dpjorder = 0;
        //                     var dshorder = 0;
        //                     var tkorder = 0;
        //                     order.map((item) => {

        //                         if (item.pstatus == 'W') {
        //                             dfkorder++;
        //                         }
        //                         if (item.type == 'PT' && item.pstatus == 'PT') {
        //                             ypborder++;
        //                         }
        //                         if (item.pstatus == 'PJ') {
        //                             dpjorder++;
        //                         }
        //                     })
        //                     info.dfkorder = dfkorder;
        //                     info.ypborder = ypborder;
        //                     info.dpjorder = dpjorder;
        //                     info.dshorder = dshorder;
        //                     info.tkorder = tkorder;

        //                     AppBase.MemberInfo = info;
        //                     this.MemberInfo = info;
        //                     window.localStorage.setItem(this.keyt, JSON.stringify(this.MemberInfo));
        //                     this.setWechatShare();
        //                 });
        //             });
        //             //window.location.href="/tabs/tab1";
        //         });
        //     } else {

        //         //alert(1);
        //         //alert("看到这个就是逻辑出大问题了");
        //         this.setWechatShare();
        //         // this.onMyShow();
        //     }
        // } else {
        //     //alert("2"+this.MemberInfo.h5openid);
        //     ApiConfig.SetToken(AppBase.MemberInfo.h5openid);
        //     ApiConfig.SetTokenKey(AppBase.MemberInfo.unionid);
        //     AppBase.memberapi.info({}).then((info) => {
        //         var order = info.order;
        //         var dfkorder = 0;
        //         var ypborder = 0;
        //         var dpjorder = 0;
        //         var dshorder = 0;
        //         var tkorder = 0;
        //         order.map((item) => {

        //             if (item.pstatus == 'W') {
        //                 dfkorder++;
        //             }
        //             if (item.type == 'PT' && item.pstatus == 'PT') {
        //                 ypborder++;
        //             }
        //             if (item.pstatus == 'PJ') {
        //                 dpjorder++;
        //             }
        //         })
        //         info.dfkorder = dfkorder;
        //         info.ypborder = ypborder;
        //         info.dpjorder = dpjorder;
        //         info.dshorder = dshorder;
        //         info.tkorder = tkorder;
        //         AppBase.MemberInfo = info;
        //         this.MemberInfo = info;
        //         console.log("aaaa", this.MemberInfo);

        //         this.setWechatShare();
        //     });

        //     // this.onMyShow();
        // }
        this.onMyShow();

    }

    onMyShow() {

    }
    onPullRefresh(ref) {
        this.onMyShow();
        ref.complete();
    }
    doRefresh(ref) {
        this.onPullRefresh(ref);
        // setTimeout(() => {
        //     ref.complete();
        // }, 1000);
    }
    onLoadMoreRefresh(ref) {
        ref.complete();
    }
    doInfinite(infiniteScroll) {
        this.onLoadMoreRefresh(infiniteScroll);
        // setTimeout(() => {
        //   infiniteScroll.complete();
        // }, 1000);
    }
    isbacking = false;
    back(e = undefined) {
        if (this.isbacking == true) {
            return;
        }
        this.isbacking = true;
        //alert(this.Params.fromtab);
        if (history.length < 2) {
            this.navCtrl.navigateBack('tabs/tab1');
            return;
        }
        if (this.params.fromtab != undefined) {
            this.navCtrl.navigateBack('tabs/' + this.params.fromtab);
        } else {
            this.navCtrl.back();
        }
    }
    backToUrl(url) {
        this.navCtrl.navigateBack(url);
    }
    close(data) {
        this.modalCtrl.dismiss(data);
    }
    returnData(data) {
        this.modalCtrl.dismiss(data);
    }
    windowslocation(url) {
        window.location.href = url;
    }
    navigate(pagename, param = {}, checkLogin = false) {
        if (checkLogin == true) {
            if (this.MemberInfo == null) {
                this.navigate("mobilelogin");
                return;
            }
        }
        this.router.navigate([pagename], { queryParams: param });

    }
    async showModal(pageobj, param = {}, callback = null) {
        var modal = await this.modalCtrl.create({
            component: pageobj,
            componentProps: param
        });
        await modal.onDidDismiss().then((data) => {
            if (callback != null) {
                callback(data);
            }
        });
        await modal.present();
    }

    showContent(title, key) {
        this.navigate("content", { title, key });
        //this.showModal("ContentPage", { title, key });
    }

    decode(val) {
        return AppUtil.HtmlDecode(val);
    }
    contentToLine(str) {
        if (str == null) {
            return "";
        }
        return str.split("\n");
    }

    tel(tel) {
        window.location.href = "tel:" + tel;
    }
    async toast(msg) {
        if (msg == "") {
            return;
        }
        console.log(((msg.length / 3) + 1) * 1000);
        const toast = await this.toastCtrl.create({
            message: msg,
            duration: ((msg.length / 3) + 1) * 500
        });
        toast.present();
    }
    async showAlert(msg, callback = undefined) {

        const alert = await this.alertCtrl.create({
            header: "提示",
            subHeader: msg,
            buttons: [{
                text: "知道了", handler: (blah) => {
                    if (callback != undefined) {
                        callback();
                    }
                }
            }]
        });
        alert.present();
    }
    async showConfirm(msg, confirmcallback) {

        const alert = await this.alertCtrl.create({
            header: "提示",
            subHeader: msg,
            buttons: [{
                text: "取消",
                handler: () => {
                    console.log('Disagree clicked');

                    confirmcallback(false);
                }
            }, {
                text: "确定",
                handler: () => {
                    confirmcallback(true);
                }
            }]
        });
        alert.present();
    }
    async checkLogin(callback) {

    }

    async showActionSheet(actionSheetController, header, buttons) {
        const actionSheet = await actionSheetController.create({
            header: header,
            buttons: buttons
        });
        await actionSheet.present();
    }
    hasLogin() {
        return this.MemberInfo != null;
    }
    logout() {
        window.localStorage.removeItem("UserToken");
        this.MemberInfo = null;
    }
    store(name, value = null) {
        if (value == null) {
            return window.localStorage.getItem(name);
        } else {
            window.localStorage.setItem(name, value);
            return "";
        }
    }

    splitRow(content) {
        return content.split("\n");
    }

    getMemberPhoto(photo: string) {
        if (photo == null || photo == undefined || photo.trim() == "") {
            return this.uploadpath + "inst/" + this.InstInfo.logo;
        } else {
            return this.uploadpath + "member/" + photo;
        }
    }

    logScrollStart() {
        console.log("logScrollStart");
    }
    logScrolling(e) {
        console.log(e);
        this.scrolltop = e.detail.scrollTop;
    }
    logScrollEnd() {
        console.log("logScrollEnd");
    }
    gotoDiv(id) {
        var target = document.querySelector('#' + id);
        target.scrollIntoView();
    }

    tryLogin() {
        this.showModal("MobileloginPage", {});
    }
    adcode = "";
    nocity = 0;
    cityname = "";

    // setWechatShare(title = undefined, desc = undefined) {
    //     var that = this;


    //     if (title == undefined) {
    //         title = this.InstInfo.h5sharetitle;
    //     }
    //     if (desc == undefined) {
    //         desc = this.InstInfo.h5sharedesc;
        // }
        // AppBase.wechatApi.gensign({ url: window.location.href }).then((config) => {
        //     var json = {
        //         debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        //         appId: this.InstInfo.h5appid, // 必填，公众号的唯一标识
        //         timestamp: config.timestamp, // 必填，生成签名的时间戳
        //         nonceStr: config.nonceStr, // 必填，生成签名的随机串
        //         signature: config.signature,// 必填，签名，见附录1
        //         jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "getLocation", 'openLocation'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        //     };
        //     wx.config(json);
        //     console.log("wx", 0);
        //     wx.ready(() => {
        //         wx.onMenuShareAppMessage({
        //             title: title,
        //             desc: desc,
        //             link: window.location.href,
        //             imgUrl: that.uploadpath + "inst/" + that.InstInfo.h5sharelogo,
        //             trigger: function (res) {
        //                 // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        //                 //alert('用户点击发送给朋友');
        //             },
        //             success: function (res) {
        //                 //alert('已分享');
        //             },
        //             cancel: function (res) {
        //                 //alert('已取消');
        //             },
        //             fail: function (res) {
        //                 //alert("onMenuShareAppMessage" + JSON.stringify(res));
        //             }
        //         });

        //         wx.onMenuShareTimeline({
        //             title: title,
        //             link: window.location.href,
        //             imgUrl: that.uploadpath + "inst/" + that.InstInfo.h5sharelogo,
        //             trigger: function (res) {
        //                 // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
        //                 //alert('用户点击分享到朋友圈');
        //             },
        //             success: function (res) {
        //                 //alert('已分享');
        //             },
        //             cancel: function (res) {
        //                 //alert('已取消');
        //             },
        //             fail: function (res) {
        //                 // alert("onMenuShareTimeline" + JSON.stringify(res));
        //             }
        //         });
        //         console.log("wx", 1);
        //         wx.getLocation({
        //             success: (res) => {
        //                 console.log("location", (res));
        //                 var lat = res.latitude;
        //                 var lng = res.longitude;


        //                 var url = "https://restapi.amap.com/v3/geocode/regeo?output=json&location="
        //                     + lng.toString()
        //                     + "," + lat.toString()
        //                     + "&key=bbbefc93b56102814e2710090beb4c26&radius=1000&extensions=all";
        //                 AppBase.instapi.http.get(url).toPromise().then((res) => {
        //                     var adinfo = res.json();
        //                     console.log("location2", adinfo);

        //                     AppBase.lastaddress = adinfo.regeocode.addressComponent;
        //                     var address = adinfo.regeocode.addressComponent;

        //                     this.address = { ad_info: address };

        //                     var mylat = lng;
        //                     var mylng = lat;

        //                     var memberinfo = this.MemberInfo;
        //                     var citylist = memberinfo.citylist;



        //                     var citycode = address.adcode.substr(0, 4) + "00";
        //                     this.adcode = address.adcode;
        //                     this.citycode = citycode;

        //                     if (AppBase.CITYSET == false) {

        //                         console.log(AppBase.CITYID, "哦哦", citycode)

        //                         var citys = citylist.filter((item, idx) => {
        //                             return item.code == citycode
        //                         })

        //                         console.log(citys, "阔脚裤")


        //                         if (citys.length == 0) {
        //                             this.nocity = 1;
        //                         }



        //                         for (var i = 0; i < citylist.length; i++) {

        //                             console.log(citylist[i].id, "大蒜", citycode, AppBase.CITYID)

        //                             if (citylist[i].id == citycode) {
        //                                 AppBase.CITYID = citylist[i].id;
        //                                 AppBase.CITYNAME = citylist[i].name;
        //                                 break;
        //                             }


        //                         }




        //                     }

        //                     var memberapi = AppBase.memberapi;
        //                     memberapi.usecity({
        //                         city_id: AppBase.CITYID
        //                     });

        //                     this.mylat = mylat;
        //                     this.mylng = mylng;
        //                     this.cityname = AppBase.CITYNAME;


        //                     var lastlat = Number(AppBase.lastlat == undefined ? 0 : AppBase.lastlat);
        //                     var lastlng = Number(AppBase.lastlng == undefined ? 0 : AppBase.lastlng);

        //                     var lastdistance = this.util.GetDistance(mylat, mylng, lastlat, lastlng);

        //                     AppBase.lastlat = mylat;
        //                     AppBase.lastlng = mylng;
        //                     AppBase.lastdistance = lastdistance;

        //                     this.lastdistance = lastdistance;
        //                     //this.address = address;

        //                     console.log("lastdistance", Number(lastdistance), Number(lastdistance) == NaN);
        //                     if (lastdistance > 500 || lastdistance == NaN) {
        //                         console.log("citycode2" + AppBase.CITYID);
        //                         console.log("vvckc", "1", mylat);

        //                     }

        //                     that.zone.run(() => {
        //                         that.onMyShow();
        //                     });
        //                 });
        //             },
        //             cancel: (res) => {
        //                 this.lastdistance = 0;
        //                 this.mylat = 0;
        //                 this.mylng = 0;
        //                 console.log("vvckc", "2");
        //                 that.zone.run(() => {
        //                     that.onMyShow();
        //                 });
        //             }
        //         });

        //     });


        // });
    // }

    backHome(e = undefined) {
        this.navCtrl.navigateBack('tabs/home');
        return;
    }
    uploadImage(module, aa) {

    }
    backtotop(e = undefined) {
        // var ioncontent = document.querySelector("ion-content");
        //alert(1);
        var ioncontent = document.getElementById('dinbu');
        ioncontent.scrollIntoView({ behavior: "smooth" });
    }
    onShareAppMessage() {

    }
    onUnload() {
        console.log("on unload");
    }
    ngOnDestroy() {
        this.onUnload();
    }
    redirectTo(obj) {
        this.navigateTo(obj);
    }
    gonavigator(obj) {
        console.log(obj);
        this.navigateTo(obj);
    }
    navigateTo(obj) {
        var url = obj.url.toString();
        var pagename = url.split("/")[1];
        var json = null;
        json = {};
        if (url.indexOf("?") > 0) {
            let vk = url.substr(url.indexOf("?") + 1);
            let vk2 = vk.split("&");
            console.log(vk, vk2);
            for (let vkb of vk2) {
                var vk3 = vkb.split("=");
                json[vk3[0]] = vk3[1];
            }
        }
        console.log(url, pagename, json);
        this.navigate(pagename, json);
    }
    navigateBack(obj = undefined) {
        this.back();
    }
    showToast(obj) {
        this.toast(obj.title);
    }
    download(url) {
        window.open(url);
    }
    reLaunch(obj) {
        window.location.href = obj.url;
    }
    getArray(t) {
        var ret = [];
        for (var i = 0; i < t; i++) {
            ret.push(i);
        }
        return ret;
    }
    openMap(e) {

    }
    phoneCall(e) {
        window.location.href = 'https://www.cnblogs.com/handsome-jm/p/7878478.html';
    }
    openLocation(lat, lng, name, address) {
        wx.openLocation({
            latitude: lat,//目的地latitude
            longitude: lng,//目的地longitude
            name: name,
            address: address,
            scale: 15//地图缩放大小，可根据情况具体调整
        });
    }
    viewPhoto(e) {

    }

    getPhoneNo() {

    }

    setTitle(title) {
        var iframe = document.createElement('iframe');
      
        iframe.style.display = 'none';
        // iframe.src = 'blank.html';
      
        iframe.onload = function() {
          setTimeout(function() {
            document.body.removeChild(iframe);
          }, 0);
        };
      
        document.title = title;
        document.body.appendChild(iframe);
      }

 
}