<template>
  <div>
    <div class="kx"></div>
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
  },
  methods: {},
};
</script>
<style scoped>
.kx{
    width:750px;
    height:50px;
    background: red;
}
</style>