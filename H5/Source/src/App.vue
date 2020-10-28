<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.logo {
  height: 18px;
}
div {
  font-weight: 500;
}


.flex-row {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-center {
  align-content: center;
  align-items: center;
}

.flex-column {
  align-content: center;
  align-items: center;
  flex-direction: column;
}

.flex-bottom {
  align-content: flex-end;
  align-items: flex-end;
}

.flex-1 {
  flex: 1;
}

.text-center {
  text-align: center;
}

.text-right {
  text-align: right;
}

.margin-1x {
  margin: 10px;
}
.margin {
  margin: 20px;
}
.margin-3x {
  margin: 30px;
}
.margin-4x {
  margin: 40px;
}

.margin-top-05x {
  margin-top: 10px;
}
.margin-top-1x {
  margin-top: 10px;
}
.margin-top {
  margin-top: 20px;
}
.margin-top-3x {
  margin-top: 30px;
}
.margin-top-4x {
  margin-top: 40px;
}

.margin-left-1x {
  margin-left: 10px;
}
.margin-left {
  margin-left: 20px;
}
.margin-left-3x {
  margin-left: 30px;
}
.margin-left-4x {
  margin-left: 40px;
}

.margin-right-1x {
  margin-right: 10px;
}
.margin-right {
  margin-right: 20px;
}
.margin-right-3x {
  margin-right: 30px;
}
.margin-right-4x {
  margin-right: 40px;
}

.margin-bottom-1x {
  margin-bottom: 10px;
}
.margin-bottom {
  margin-bottom: 20px;
}
.margin-bottom-3x {
  margin-bottom: 30px;
}
.margin-bottom-4x {
  margin-bottom: 40px;
}

.padding-1x {
  padding: 10px;
}
.padding {
  padding: 20px;
}
.padding-3x {
  padding: 30px;
}
.padding-4x {
  padding: 40px;
}

.padding-top-1x {
  padding-top: 10px;
}
.padding-top {
  padding-top: 20px;
}
.padding-top-3x {
  padding-top: 30px;
}
.padding-top-4x {
  padding-top: 40px;
}

.padding-left-1x {
  padding-left: 10px;
}
.padding-left {
  padding-left: 20px;
}
.padding-left-3x {
  padding-left: 30px;
}
.padding-left-4x {
  padding-left: 40px;
}

.padding-right-1x {
  padding-right: 10px;
}
.padding-right {
  padding-right: 20px;
}
.padding-right-3x {
  padding-right: 30px;
}
.padding-right-4x {
  padding-right: 40px;
}

.padding-bottom-1x {
  padding-bottom: 10px;
}
.padding-bottom {
  padding-bottom: 20px;
}
.padding-bottom-3x {
  padding-bottom: 30px;
}
.padding-bottom-4x {
  padding-bottom: 40px;
}

.border-1x {
  border-radius: 4px;
}
.border {
  border-radius: 8px;
}
.border-3x {
  border-radius: 12px;
}
.border-4x {
  border-radius: 16px;
}
.border-50 {
  border-radius: 50%;
}
.fix-top {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  z-index: 1000;
}
.fix-middle {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;
}
.fix-bottom {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100vw;
}
.w-100 {
  width: 100%;
}
.h-100 {
  height: 100%;
}
.bold {
  font-weight: bold;
}
.bolder {
  font-weight: bolder;
}
.h1 {
  font-size: 44px;
}
.h2 {
  font-size: 28px;
}
.h3 {
  font-size: 22px;
}
.h4 {
  font-size: 18px;
}
.f16 {
  font-size: 16px;
  line-height: 16px;
}
.h6 {
  font-size: 14px;
}
.h7 {
  font-size: 12px;
}
.h8 {
  font-size: 10px;
}
.f-36 {
  font-size: 36px;
}
.f-26 {
  font-size: 26px;
}
.f-24 {
  font-size: 24px;
}
.f-30 {
  font-size: 30px;
}
.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #090909;
}
.split {
  height: 12px;
  width: 1px;
  background: #090909;
}
.pointer {
  cursor: pointer;
}

.icon-1x {
  width: 24px;
  height: 24px;
}
.icon {
  width: 48px;
  height: 48px;
}
.icon-3x {
  width: 72px;
  height: 72px;
}
.icon-4x {
  width: 96px;
  height: 96px;
}
.icon-5x {
  width: 120px;
  height: 120px;
}

.bg-w {
  background: #ffffff;
}
.bg-g {
  background: #ecf5fa;
}
.bg-g2 {
  background: #f5f7fa;
}
.f-w {
  color: white;
}
.f-d {
  color: #f56c6c;
}
.f-warn {
  color: #FAAb0c;
}
.f-s {
  color: #07c160;
}
.f-p {
  color: #409eff;
}
.f-g {
  color: #c3c3c3;
}
.f-g2 {
  color: #819199;
}
.f-w.el-link {
  color: white !important;
}
.bg-trans {
  background: transparent;
}
.width-05x {
  width: 50px;
}
.width-1x {
  width: 100px;
}
.width {
  width: 200px;
}
.width-3x {
  width: 300px;
}
.width-4x {
  width: 400px;
}
.height-1x {
  height: 100px;
}
.height {
  height: 200px;
}
.height-3x {
  height: 300px;
}
.height-4x {
  height: 400px;
}

.bg-p {
  background: #409eff;
}
.bd {
  border: 1px solid #d7dae2;
}
.bd-bottom {
  border-bottom: 1px solid rgba(211, 211, 211, 0.5);
}
.bd-right {
  border-right: 1px solid #f0f2f5;
}

.scroll-x {
  overflow-x: scroll;
}
.scroll-y {
  overflow-y: auto;
}
.scroll {
  overflow: scroll;
}

.van-card {
  background-color: white !important;
}

.cardbox {
  background: white;
  border-radius: 4px;
}
.txt-33 {
  color: #333333;
}
.height-04x {
  height: 40px;
}
.height-08x {
  height: 80px;
}

</style>

