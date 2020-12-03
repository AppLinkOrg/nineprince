export class Utils{
    static ContentToHtml(str){
        if (str == null) {
            return "";
        }
        var reg = new RegExp("\n", "g"); //创建正则RegExp对象   
        str = str.replace(reg, "<br />");
        return str;
    }
    static HtmlDecode(str) {
        if (str == null) {
            return "";
        }
       
        var s = "";
        if (str.length == 0) return "";
        s = str.replace(/&amp;/g, "&");
        s = s.replace(/&lt;/g, "<");
        s = s.replace(/&gt;/g, ">");
        s = s.replace(/&nbsp;/g, " ");
        s = s.replace(/&#39;/g, "\'");
        s = s.replace(/&quot;/g, "\"");

        //s = s.replace(new RegExp("</p>", "gm"), "</p><br />");

        var reg = new RegExp("\"/alucard263096/nineprince/upload/", "g"); //创建正则RegExp对象   
        s = s.replace(reg, "\"http://cmsdev.app-link.org/alucard263096/nineprince/upload/");

        return s;
    }
    static IsMobile(mobile){
        return Number(mobile).toString().length == 11 && mobile[0] == "1";;
    }
    static UUID(){
            var s = [];
            var hexDigits = "0123456789ABCDEF";
            for (var i = 0; i < 32; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23];
            var uuid = s.join("");
            return uuid;
    }
    static GetIDString(arr){
        var arrstr=[];
        for(var i=0;i<arr.length;i++){
            arrstr.push(arr[i].id);
        }
        return arrstr.join(",");
    }
    static get10(a) {
        a = parseInt(a);
        if (a > 9) {
            return a.toString();
        } else {
            return "0" + a.toString();
        }
    }
     static FormatDateTime(date){
        console.log("FormatDateTime"+date);
        var year = Utils.ten2(date.getFullYear());
        var month = Utils.ten2(date.getMonth() + 1);
        var datec = Utils.ten2(date.getDate());
        var hour = Utils.ten2(date.getHours());
        var minute = Utils.ten2(date.getMinutes());
        var second = Utils.ten2(date.getSeconds());
    
        var v= year + "-" + month + "-" + datec+" "+hour+":"+minute+":"+second;
    
        return v;
      }
    static ten2(i){
        i=parseInt(i);
        if(i>9){
          return i.toString();
        }else{
          return "0"+i.toString();
        }
      }
    static FormatDate(val) {
       
        var date = Utils.FormatDate2(val);
        return date.substr(0, 10);
    }
    static FormatDate2(date) {
        console.log("FormatDateTime" + date);
        var year = Utils.ten2(date.getFullYear());
        var month = Utils.ten2(date.getMonth() + 1);
        var datec = Utils.ten2(date.getDate());

        var v = year  + month  +  datec 

        console.log("FormatDateTime=" + v);
        return v;
    }
    static getDayname(date) {
        var dayofweek = date.getDay();
        switch (dayofweek) {
            case 1:
                return "周一";
            case 2:
                return "周二";
            case 3:
                return "周三";
            case 4:
                return "周四";
            case 5:
                return "周五";
            case 6:
                return "周六";
            case 0:
                return "周日";
        }
        return "";
    }
}