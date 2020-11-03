<template>
  <div class="bg">
    <div class="bg-w padding-top padding-left-1x padding-right-1x">
      <div class="flex-row flex-center">
        <img
          :src="uploadpath + 'resource/' + Res.zuo"
          class="zuo_img"
          @click="jianWeek"
        />
        <div
          class="flex-1 text-center"
          v-for="(item, index) of wcal"
          :key="index"
        >
          <div
            class="flex-row flex-column txt-666"
            :class="[{ today: item.today }, { chocheck: item.check }]"
            @click="choseday(item, index)"
          >
            <div class="f-24 bold">{{ item.monday }}</div>
            <div class="margin-top-25 f-24">{{ item.m + "." + item.d }}</div>
            <div
              class="todayline"
              :class="[{ todaylint: item.today }, { toact: item.check }]"
            ></div>
          </div>
        </div>
        <img
          :src="uploadpath + 'resource/' + Res.you"
          class="zuo_img"
          @click="addWeek"
        />
      </div>
    </div>

    <div class="margin-top-3x" v-if="wcal.length > 0">
      <div class="f-30 txt-33 margin-bottom-3x margin-left-37">上午</div>
      <div class="flex-row flex-wrap margin-left">
        <div v-for="(d, idx) of wcal[currentindex].timeline" :key="idx">
          <template v-if="d.type == 'A'">
            <div
              class="hmin margin-bottom"
              :class="[
                { hactive: d.check },
                { pass: d.pass },
                {
                  hactive:
                    weekschedule[wcal[currentindex].dt] != undefined &&
                    weekschedule[wcal[currentindex].dt][d.id] != undefined &&
                    weekschedule[wcal[currentindex].dt][d.id].timeslots_id ==
                      d.id,
                },
              ]"
              @click="chostime(d)"
            >
              {{ d.name }}
            </div>
          </template>
        </div>
      </div>

      <div class="f-30 txt-33 margin-top margin-bottom-3x margin-left-37">
        下午
      </div>
      <div class="flex-row flex-wrap margin-left">
        <div v-for="(d, idx) of wcal[currentindex].timeline" :key="idx">
          <template v-if="d.type == 'B'">
            <div
              class="hmin margin-bottom"
              :class="[
                { hactive: d.check },
                { pass: d.pass },
                {
                  hactive:
                    weekschedule[wcal[currentindex].dt] != undefined &&
                    weekschedule[wcal[currentindex].dt][d.id] != undefined &&
                    weekschedule[wcal[currentindex].dt][d.id].timeslots_id ==
                      d.id,
                },
              ]"
              @click="chostime(d)"
            >
              {{ d.name }}
            </div>
          </template>
        </div>
      </div>

      <div class="f-30 txt-33 margin-top margin-bottom-3x margin-left-37">
        晚上
      </div>
      <div class="flex-row flex-wrap margin-left">
        <div
          v-for="(d, idx) of wcal[currentindex].timeline"
          :key="idx"
          class="flex-row flex-wrap"
        >
          <template v-if="d.type == 'C'">
            <div
              class="hmin margin-bottom"
              :class="[
                { hactive: d.check },
                { pass: d.pass },
                {
                  hactive:
                    weekschedule[wcal[currentindex].dt] != undefined &&
                    weekschedule[wcal[currentindex].dt][d.id] != undefined &&
                    weekschedule[wcal[currentindex].dt][d.id].timeslots_id ==
                      d.id,
                },
              ]"
              @click="chostime(d)"
            >
              {{ d.name }}
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="height-73"></div>
    <div class="flex-row flex-center" @click="quanxuan">
      <img
        :src="
          uploadpath +
          'resource/' +
          (wcal[currentindex] != undefined && wcal[currentindex].ischeck
            ? Res.check
            : Res.nocheck)
        "
        class="che_img margin-left-3x"
      />
      <div class="f-30 txt-33 margin-left">全选</div>
      <div class="txt-f8 f-24 margin-left">（绿色表示上班，白色表示休息）</div>
    </div>
    <div class="height-54"></div>
    <div class="flex-row flex-column">
      <div class="baocun" @click="save">保存</div>
    </div>
  </div>
</template>
<script>
import Config from "../Config";
import { PageHelper } from "../PageHelper";
import { HttpHelper } from "../HttpHelper";
import { Utils } from "../Utils";
import { Checkbox, Toast } from "vant";

export default {
  data() {
    return {
      Res: {},
      Inst: {},
      Member: null,
      wcal: [],
      wdate: new Date(),
      timeslotlist: [],
      currentindex: 0,
      ischeck: false,
      chosdate: -1,
      daytimeline: [],
      arr: [],
      currentitem: null,
      weekschedule: [],
      quanarr: [],
    };
  },
  created() {
    PageHelper.Init(this);
    // PageHelper.LoginAuth(this);
    HttpHelper.Post("member/timeslotlist", {}).then((timeslotlist) => {
      for (let item of timeslotlist) {
        item.check = false;
      }
      this.timeslotlist = timeslotlist;
      this.loadWeekCalendar();
    });
  },
  methods: {
    addMonth(m) {
      this.mdate = new Date(
        this.mdate.getFullYear(),
        this.mdate.getMonth() + m,
        1
      );
      this.loadMonthCalendar();
    },

    addWeek() {
       for (let item of this.wcal) {
        if (item.ischeck) {
          this.quanarr.push(item);
        }
      }
      this.wdate = new Date(
        this.wdate.getFullYear(),
        this.wdate.getMonth(),
        this.wdate.getDate() + 7
      );
     
      console.log(this.quanarr);
      this.loadWeekCalendar();
    },
    jianWeek() {
       for (let item of this.wcal) {
        if (item.ischeck) {
          this.quanarr.push(item);
        }
      }
      this.wdate = new Date(
        this.wdate.getFullYear(),
        this.wdate.getMonth(),
        this.wdate.getDate() - 7
      );
     
      this.loadWeekCalendar();
    },
    loadWeekCalendar() {
      var now = new Date();
      var nowtime = now.getTime();

      var wfirst = new Date(
        this.wdate.getFullYear(),
        this.wdate.getMonth(),
        this.wdate.getDate()
      );
      this.wyear = wfirst.getFullYear().toString();
      this.wmonth = (wfirst.getMonth() + 1).toString();
      var wfirsttime = wfirst.getTime();
      var kd = 0;
      if (wfirst.getDay()) {
        kd = 0 - wfirst.getDay();
      }

      // console.log("ccw1", wfirst, wfirst.getDay());
      var startdate = new Date(wfirsttime + kd * 24 * 3600 * 1000);
      // console.log("ccw2", startdate);
      var startdatetime = wfirsttime + kd * 24 * 3600 * 1000;
      var wcal = [];
      var enddate = null;
      for (var j = 0; j < 7; j++) {
        var sdatetime = startdatetime + j * 24 * 3600 * 1000;
        var sdate = new Date(sdatetime);
        enddate = sdate;
        // console.log(sdate, "ssssssssssssss");
        var d = {
          sdate: sdate,
          pass: sdatetime < nowtime,
          today:
            sdate.getFullYear() == now.getFullYear() &&
            sdate.getMonth() == now.getMonth() &&
            sdate.getDate() == now.getDate(),
          d: sdate.getDate(),
          m: sdate.getMonth() + 1,
          timeline: this.timeline(sdate),
          dt: Utils.FormatDate2(sdate),
          datestr: Utils.FormatDate(sdate),
          monday: Utils.getDayname(sdate),
          ischeck: false,
        };
        if (d.today) {
          this.currentindex = j;
          this.currentitem = d;
        }
        wcal.push(d);
      }
      this.wcal = wcal;
      // console.log(wcal, "wcal");
      this.loadWeekSchedule(startdate, enddate);
      this.checkquan();
    },
    checkquan() {
      console.log(this.quanarr, "quanquna");
      for (let item of this.wcal) {
        for (let json of this.quanarr) {
          console.log(json.dt == item.dt);
          if (json.dt == item.dt) {
            console.log(json.dt == item.dt);
            item.ischeck = true;
            item.timeline=json.timeline;
          }
        }
      }
    },
    loadWeekSchedule(sdate, edate) {
      var sdatestr = Utils.FormatDate(sdate);
      var edatestr = Utils.FormatDate(edate);

      HttpHelper.Post("member/paiban", {
        sdate: sdatestr,
        edate: edatestr,
      }).then((res) => {
        console.log(res);
        this.weekschedule = res;
      });
    },
    getmonday(date) {
      date = date.slice(5, 10);
      var dates = date.replace("-", "/");
      return dates;
    },
    timeline(sdate) {
      var now = new Date();
      var nowtime = now.getTime();

      var timeslotlist = this.timeslotlist;

      var timeline = [];

      for (var k = 0; k < timeslotlist.length; k++) {
        var tt =
          sdate.getFullYear() +
          "/" +
          (sdate.getMonth() + 1) +
          "/" +
          sdate.getDate() +
          " " +
          timeslotlist[k].name;
        // console.log("time", tt);
        tt = new Date(tt).getTime();
        // console.log("time", tt, nowtime);

        // console.log("time", tt < nowtime);
        timeslotlist[k].pass = tt < nowtime;

        timeslotlist[k].passt = tt + "<" + nowtime;
        timeslotlist[k].date = new Date(
          sdate.getFullYear(),
          sdate.getMonth(),
          sdate.getDate()
        );

        timeline.push({
          id: timeslotlist[k].id,
          name: timeslotlist[k].name,
          pass: tt < nowtime,
          passt: tt + "<" + nowtime,
          type: timeslotlist[k].type,
          check: timeslotlist[k].check,
        });
      }
      return timeline;
    },
    choseday(item, idx) {
      if (item.pass && item.today == false) {
        return;
      }
      console.log(item);
      this.chosdate = idx;
      this.currentindex = idx;
      item.check = item.check ? false : true;
      this.currentitem = item;
      this.loadchose();
    },
    chostime(d) {
      console.log(d);
      if (d.pass) {
        return;
      }
      if (
        this.weekschedule[this.wcal[this.currentindex].dt] != undefined &&
        this.weekschedule[this.wcal[this.currentindex].dt][d.id] != undefined &&
        this.weekschedule[this.wcal[this.currentindex].dt][d.id].timeslots_id ==
          d.id
      ) {
        return;
      }

      d.check = d.check ? false : true;
      if (d.check) {
        this.wcal[this.currentindex].check = true;
      }
      this.checktime(d);
    },
    checktime(d) {
      HttpHelper.Post("member/addpaiban", {
        restdate: this.wcal[this.currentindex].datestr,
        timeslots_id: d.id,
        enterprise_id: this.Member.enterprise_id,
        rd: this.wcal[this.currentindex].dt,
      }).then((res) => {
        console.log(res);
        if (res.code == "0") {
          this.arr.push({
            id: res.return,
          });
        } else if (res.code == "2") {
          for (var i = 0; i < this.arr.length; i++) {
            console.log(1111);
            if (this.arr[i].id == res.return) {
              console.log(2222);
              this.arr[i].splice(i, 1);
            }
          }
        } else {
          Toast.fail(res.result);
        }
      });
    },
    loadchose() {
      if (this.arr.length > 0) {
        for (let item of this.wcal) {
          for (let json of this.arr) {
            for (let childitem of item.timeline) {
              if (item.dt == json.dt) {
                item.check = true;

                if (childitem.id == json.timeslots_id) {
                  childitem.check = true;
                }
              }
            }
          }
        }
      }
    },
    tijao(arr){
      var date =[];
        for(let item of arr){
          if(item.ischeck){
            console.log(111)
            for(let json of item.timeline){
                var d = {
                  restdate: item.datestr,
                  timeslots_id: json.id,
                  enterprise_id: this.Member.enterprise_id,
              }
              date.push(d);
            } 
          }
         
        }
        return date
    },
    save() {
      console.log(this.arr);
    
      
      if(this.quanarr.length>0){
        var date=[];
        date = this.tijao(this.quanarr);
        if(date.length>0){
              var datajson=JSON.stringify(date);
              HttpHelper.Post('member/quanxuan',{datajson:datajson}).then((res)=>{
                Toast.success("提交成功");
              })
          }
      }

      if(this.wcal.length>0){
        var date = [];
        date = this.tijao(this.wcal);
         if(date.length>0){
              var datajson=JSON.stringify(date);
              HttpHelper.Post('member/quanxuan',{datajson:datajson}).then((res)=>{
                Toast.success("提交成功");
              })
          }
      }

    
      var str = JSON.stringify(this.arr);
      HttpHelper.Post("member/savepaiban", {
        arr: str,
      }).then((res) => {
        Toast.success("提交成功");
      });
    },
    quanxuan() {
      var curr = this.wcal[this.currentindex];
      if (curr.pass == true && curr.today == false) {
        return;
      }
      curr.ischeck = curr.ischeck ? false : true;
      console.log(curr.ischeck);
      var timelist = curr.timeline;
      console.log(timelist);
      console.log(curr);
      for (let item of timelist) {
        if (item.pass == false) {
          item.check = curr.ischeck;
        }
      }

      curr = timelist;
      this.wcal[this.currentindex].timeline = curr;
    },
  },
};
</script>
<style scoped>
.bg {
  min-height: 100vh;
  background: #f5f5f5;
}
.hmin {
  padding: 27px 40px 26px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.06);
  margin-right: 27px;
  font-size: 30px;
  color: #666666;
}
.hactive {
  background: #59c69b;
  color: #ffffff;
}
.margin-top-25 {
  margin-top: 25px;
}
.margin-left-37 {
  margin-left: 37px;
}
.che_img {
  width: 30px;
  height: 30px;
}
.txt-f8 {
  color: #ff830c;
}
.height-73 {
  height: 73px;
}
.height-54 {
  height: 54px;
}
.baocun {
  width: 690px;
  height: 88px;
  background: linear-gradient(#59c69c 0%, #89d464 100%);
  border-radius: 8px;
  color: #ffffff;
  font-size: 40px;
  text-align: center;
  line-height: 88px;
  font-weight: 500;
}
.today {
  color: #ff830c;
}
.todaylint {
  color: #ff830c;
}
.chocheck {
  color: #59c69c;
}
.todayline {
  width: 81px;
  height: 9px;
  border-radius: 5px;
  margin-top: 19px;
}
.toact {
  background: #59c69c;
}
.pass {
  background: #cccccc;
  color: #ffffff;
}
.zuo_img {
  width: 50px;
  height: 50px;
}
</style>