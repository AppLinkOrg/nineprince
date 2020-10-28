import Config from "./Config";
import {
  HttpHelper
} from "./HttpHelper";

import wx from "weixin-jsapi";

export class PageHelper {

  static InWechat = false;

  static getUrlKey(name) { //获取url 参数
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null;
  }

  static getCodeApi(appid) { //获取code   
    let urlNow = encodeURIComponent(window.location.href);
    let scope = 'snsapi_base'; //snsapi_userinfo   //静默授权 用户无感知
    //let appid='wx4cc5d5c123123123';
    let state = "123";
    let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${urlNow}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`;

    window.location.href = url;
  }


  static AppInstance = null;
  static Res = null;
  static Inst = null;
  static Member = null;
  static Init(page, resourcecallback = undefined) {




    console.log(page);
    page.api = Config.ApiUrl;
    page.uploadpath = Config.UploadPath;
    page.fileupload = Config.FileUploadAPI;
    if (PageHelper.Res == null) {
      HttpHelper.Post("inst/resources", {}).then((res) => {
        page.Res = res;
        PageHelper.Res = res;
        if (resourcecallback != undefined) {
          resourcecallback(PageHelper.Res);
        }
      });
    } else {
      page.Res = PageHelper.Res;
      if (resourcecallback != undefined) {
        resourcecallback(PageHelper.Res);
      }
    }

    if (PageHelper.Inst == null) {
      HttpHelper.Post("inst/info", {}).then((res) => {
        page.Inst = res;
        PageHelper.Inst = res;

        PageHelper.loadwechat(page);

      });
    } else {
      page.Inst = PageHelper.Inst;
      PageHelper.loadwechat(page);
    }
    console.log("pageinfo", page);

    page.home = function (event) {
      page.$router.push({
        path: "/"
      });
    };
    page.routeto = function (path, param = {}) {
      page.$router.push({
        path,
        param
      });
    }
    page.contactkefu = function () {
      window.open(page.uploadpath + "inst/" + page.Inst.qrcode)
    }
    page.goBack = function () {
      page.$router.back(-1);
    }
    page.showloginbox = function (event) {
      PageHelper.AppInstance.ShowLoginBox();
    }

    page.copy = function (str) {
      var _input = document.createElement("input"); // 直接构建input
      _input.value = str; // 设置内容
      document.body.appendChild(_input); // 添加临时实例
      _input.select(); // 选择实例内容
      document.execCommand("Copy"); // 执行复制
      document.body.removeChild(_input); // 删除临时实例
      this.$message({
        message: '复制成功',
        type: "success"
      });
    }
    page.getFlowSize = function (size) {
      var onk = 1024;
      if (size < 1024) {
        return parseInt(size).toString() + "KB";
      }
      size = size / 1024;

      if (size < 1024) {
        return parseInt(size).toString() + "MB";
      }
      size = size / 1024;
      return parseInt(size).toString() + "GB";
    }
    var token = window.localStorage.getItem("token");
    if (token != null) {
      if (PageHelper.Member == null) {
        HttpHelper.Post("member/info", {}).then((Member) => {
          page.Member = Member;
          PageHelper.Member = Member;
        });
      } else {
        page.Member = PageHelper.Member;
        HttpHelper.Post("member/info", {}).then((Member) => {
          page.Member = Member;
          PageHelper.Member = Member;
        });
      }
    } else {
      page.Member = null;
      PageHelper.Member = null;
    }

  }

  static ReloadMember(page, callback) {
    var token = window.localStorage.getItem("token");
    if (token != null) {
      HttpHelper.Post("member/info", {}).then((Member) => {
        page.Member = Member;
        PageHelper.Member = Member;
        callback(Member);
      });
    } else {
      page.Member = null;
      PageHelper.Member = null;
      callback(null);
    }
  }
  static LoginAuth(page) {

    var token = window.localStorage.getItem("token");
    if (token != null) {
      HttpHelper.Post("member/info", {}).then((Member) => {
        if (Member == null) {
          page.home();
        }
      });
    } else {
      page.home();
    }
  }
  static CheckLoginCallback(callback) {
    var token = window.localStorage.getItem("token");
    if (token != null) {
      HttpHelper.Post("member/info", {}).then((Member) => {
        callback(Member);
      });
    } else {
      callback(null);
    }
  }

  static loadwechatconfig(page) {
    HttpHelper.Post("wechat/gensign", {
      url: location.href.split('#')[0]
    }).then((config) => {

      var json = {
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: PageHelper.Inst.appid, // 必填，公众号的唯一标识
        timestamp: config.timestamp, // 必填，生成签名的时间戳
        nonceStr: config.nonceStr, // 必填，生成签名的随机串
        signature: config.signature, // 必填，签名，见附录1
        jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      };
      console.log("wxconfig",config, json);
      wx.config(json);
    });
  }

  static loadwechat(page) {
    let viewer = window.navigator.userAgent.toLowerCase();
    if (viewer.match(/MicroMessenger/i) == "micromessenger") {

      page.inwechat = true;


      //直接调用微信支付
      let code = PageHelper.getUrlKey("code"); //获取url参数code
      if (code) { //拿到code， code传递给后台接口换取opend
        HttpHelper.Post("member/getwechatinfo", {
          code
        }).then((res) => {
          if (res.errcode == undefined) {
            localStorage.setItem("openid", res.openid);
            PageHelper.loadwechatconfig(page);
          }
        });
      } else {
        console.log(PageHelper.Inst);
        PageHelper.getCodeApi(PageHelper.Inst.appid);
      }
    }
  }
}
