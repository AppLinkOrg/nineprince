<template>
  <div class="bg-box">
    <div class="padding-top75 flex-row">
      <div class="flex-1"></div>
      <div class="w-693">
        <!-- 姓名 -->
        <div
          class="h-110 flex-row flex-center  bg-w margin-bottom-5x box-s0210"
        >
          <div class="txt-666 h-30 bolder-500 padding-left-4x flex-1">姓名</div>
          <input
            type="text"
            class="border-none text-right txt-33 f-26 bolder-500 padding-right-4x"
            v-model="myname"
          />
        </div>
        <!-- 手机号 -->
        <div
          class="h-110 flex-row flex-center  bg-w margin-bottom-5x box-s0210"
        >
          <div class="txt-666 h-30 bolder-500 padding-left-4x flex-1">
            手机号
          </div>
          <input
            type="text"
            class="border-none text-right txt-33 f-26 bolder-500 padding-right-4x"
            v-model="cpnumber"
          />
        </div>
      </div>
      <div class="flex-1"></div>
    </div>
    <!-- 保存按钮 -->
    <div class="h-88 margin-top-25x startbtn flex-row flex-center">
      <div class=" text-center h-40 f-w bolder-500 w-100">保存</div>
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
      myname: "王小二",
      cpnumber: "13484898292"
    };
  },
  created() {
    PageHelper.Init(this);
  },
  methods: {}
};
</script>
<style scoped>
.bg-box {
  height: 100vh;
  background: #f5f5f5;
}
.w-693 {
  width: 693px;
}
.h-110 {
  height: 110px;
}
.box-s0210 {
  border-radius: 16px;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.06);
}
.margin-top-25x {
  margin-top: 250px;
}
.startbtn {
  background: linear-gradient(#59c69c 0%, #89d464 100%);
  border-radius: 8px;
}
.h-88 {
  height: 88px;
}
input::-webkit-input-placeholder {
  color: #cccccc;
  font-size: 26px;
}
</style>