<template>
  <div>
    <router-view />
    <van-tabbar v-model="active" route>
      <van-tabbar-item  to="/" >
        <img
          slot="icon"
          slot-scope="props" 
          :src="props.active ? icon.active :icon.inactive"
          class="home_img"
        />
        <span class="h-20">首页</span>
      </van-tabbar-item>
      <van-tabbar-item  to="/setfocus">
        <img
          slot="icon"
          slot-scope="props" 
          :src="props.active ? icon.active2 :icon.inactive2"
          class="my_img"
        />
        <span class="h-20">设置中心</span>
      </van-tabbar-item>
      
    </van-tabbar>
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
      active: 0,
      icon: {
        active: require("../assets/home.png"),
        inactive: require("../assets/home.png"),
        active2: require("../assets/setting.png"),
        inactive2: require("../assets/setting.png")
      }
    };
  },
  created() {
    PageHelper.Init(this);
    PageHelper.LoginAuth(this);
  },
  mounted() {
    console.log("route", this.$route, this.$router);
    if (this.$route.name == "Home") {
      this.active = 0;
    }
    if (this.$route.name == "PersonalcenterEighteen") {
      this.active = 1;
    }
  },
  methods: {},
};
</script>
<style scoped>
.van-tabbar-item--active {
  color: #d8b66e;
  font-size: 20px;
}
.home_img{
  width: 48px;
  height: 48px;
}
.my_img {
  width: 42px;
  height: 42px;
}
.van-tabbar {
  height: 100px;
}
.h-20 {
  font-size: 20px;
}
</style>