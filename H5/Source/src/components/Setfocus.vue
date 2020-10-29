<template>
  <div class="bg-box">
    <div class=" padding-top75">
      <div class="">
        <div class="flex-1"></div>
        <!-- 我的信息 -->
        <div class="w-687 myinf padding-bottom-4x" @click="routeto('/myinfor')">
          <div class=" myinfo">
            <div class="bolder-700 f-30 f-w">我的信息</div>
            <div class="bolder-500 h2 f-w padding-top-3x opacity-4">
              My information
            </div>
          </div>
          <img
            :src="uploadpath + 'resource/' + Res.informationbg"
            class="w-687 h-254"
          />
        </div>
        <!-- 工作时间 -->
        <div class="w-687 myinf adding-bottom-4x">
          <div class=" myinfo">
            <div class="bolder-700 f-30 f-w">工作时间</div>
            <div class="bolder-500 h2 f-w padding-top-3x opacity-4">
              Working time
            </div>
          </div>
          <img
            :src="uploadpath + 'resource/' + Res.timebg"
            class="w-687 h-254"
          />
        </div>

        <div class="flex-1"></div>
      </div>
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
      Member: null
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
  background: #f2f2f2;
}
.w-687 {
  width: 687px;
}
.h-90 {
  height: 90px;
}
.myinfo {
  position: absolute;
  top: 50%;
  margin-top: -60px;
  margin-left: 60px;
}
.myinf {
  position: relative;
}
.opacity-4 {
  opacity: 0.4;
}
.h-254 {
  height: 254px;
}
</style>