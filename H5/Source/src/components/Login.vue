<template>
  <div class="bg-d4">
      <div class="flex-row flex-column">
        <img :src="uploadpath+'inst/'+Inst.logo" class="loginimg"/> 
      </div>

      <div class="bg-white">
          <div>
              <div class="f-36 txt-33">账号</div>
              <input type="text" placeholder="请输入账号" class="f-26">
          </div>
          <div class="xilines margin-top-16 margin-bottom-69"></div>
      </div>
     
  </div>
</template>
<script>
import Config from "../Config";
import { PageHelper } from "../PageHelper";
import { HttpHelper } from "../HttpHelper";
import { Utils } from "../Utils";

export default {
  data() {
    return {
      Res: {},
      Inst: {},
      Member: null,
    };
  },
  created() {
    PageHelper.Init(this);
    // PageHelper.LoginAuth(this);
  },
  methods: {},
};
</script>
<style scoped>
.bg-d4 {
    min-height: 100vh;
    background: #D4E7FF;
}
.loginimg {
    width: 285px;
    height: 114px;
}
.xilines {
    width: 100%;
    height: 1px;
    background: #DCDCDC;
}
input::placeholder {
    color: #C1C1C1;
}
.margin-top-16 {
    margin-top: 16px;
}
.margin-bottom-69 {
    margin-bottom: 69px;
}
</style>