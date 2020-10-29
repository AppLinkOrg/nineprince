<template>
  <div class="bg-d4">
    <div class="flex-row flex-column margin-bottom-3x padding-top-36">
      <img :src="uploadpath + 'inst/' + Inst.logo" class="loginimg" />
    </div>

    <div class="bg-w margin-3x padd95">
      <div>
        <div class="f-36 txt-33">账号</div>
        <input
          type="text"
          placeholder="请输入账号"
          class="f-26 margin-top-3x"
          v-model="account"
        />
      </div>
      <div class="xilines margin-top-16 margin-bottom-69"></div>
      <div>
        <div class="f-36 txt-33">密码</div>
        <input
          type="password"
          placeholder="请输入账号密码"
          class="f-26 margin-top-3x"
          v-model="password"
        />
      </div>
      <div class="xilines margin-top-16"></div>
    </div>
    <div class="height-08x"></div>
    <div class="flex-row flex-column">
      <div class="dl_btn" @click="login">登录</div>
      <div class="height-04x"></div>
      <div class="f-24 txt-33 ">忘记密码请联系管理员</div>
    </div>
  </div>
</template>
<script>
import Config from "../Config";
import { PageHelper } from "../PageHelper";
import { HttpHelper } from "../HttpHelper";
import { Utils } from "../Utils";
import { Notify } from 'vant';
import { Toast } from 'vant';

export default {
  data() {
    return {
      Res: {},
      Inst: {},
      Member: null,
      account:'',
      password:''
    };
  },
  created() {
    PageHelper.Init(this);
    // PageHelper.LoginAuth(this);
  },
  methods: {
    login(){
      HttpHelper.Post('member/login2',{
        account:this.account,
        password:this.password
      }).then((res)=>{
        if(res.code=='0'){
         window.localStorage.setItem("token",res.return);
          Toast.success("登录成功");
          this.routeto('/');
        }else {
          Toast.fail(ret.return);
        }
      })
    }
  },
};
</script>
<style scoped>
.bg-d4 {
  min-height: 100vh;
  background: #d4e7ff;
}
.loginimg {
  width: 285px;
  height: 114px;
}
.xilines {
  width: 100%;
  height: 1px;
  background: #dcdcdc;
}
input {
  outline: none;
  background: transparent;
  border: none;
}
input::placeholder {
  color: #c1c1c1;
}
.margin-top-16 {
  margin-top: 16px;
}
.margin-bottom-69 {
  margin-bottom: 69px;
}
.padd95 {
  padding: 95px 69px 64px 70px;
  border-radius: 16px;
}
.dl_btn {
  width: 690px;
  height: 88px;
  background: linear-gradient(#59c69c 0%, #89d464 100%);
  border-radius: 8px;
  color: #ffffff;
  font-size: 40px;
  line-height: 88px;
  text-align: center;
  font-weight: 500;
}
.padding-top-36 {
  padding-top: 36px;
}
</style>