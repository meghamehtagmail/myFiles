s = new AppMeasurement();
s.account = "";
var s_account = s.account;

/*****Plugin Area Start *****/

//s.usePlugins = true;
//function s_doPlugins(s) {
  	//automateVariables();
//}
//s.doPlugins = s_doPlugins;
/* Utility Function: split v1.5 (JS 1.0 compatible) */
s.split = new Function("l", "d", "" +
    "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" +
    "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");


/* Plugin: getPreviousValue 1.1 */
s.getPreviousValue = function(v, c, el) {
    var s = this,
        t = new Date,
        i, j, r = "",
        f = 1;
    c = c ? c : "s_gpv";
    t.setTime(t.getTime() + 18E5);
    if (el) {
        f = 0;
        i = el.split(",");
        j = s.events ? s.events.split(",") : "";
        for (var x = 0, il = i.length; x < il; x++) {
            for (var y = 0, jl = j.length; y < jl; y++)
                if (i[x] == j[y]) {
                    f = 1;
                    break
                }
            if (f == 1) break
        }
    }
    if (f == 1) {
        if (s.c_r(c)) r = s.c_r(c);
        v ? s.c_w(c, v, t) : s.c_w(c, "no value", t)
    }
    return r
};
/* Plugin: getPercentPageViewed v2.01 */
s.handlePPVevents = function() {
    if (!s_c_il) return;
    for (var i = 0, scill = s_c_il.length; i < scill; i++)
        if (typeof s_c_il[i] != "undefined" && s_c_il[i]._c && s_c_il[i]._c == "s_c") {
            var s = s_c_il[i];
            break
        }
    if (!s) return;
    if (!s.getPPVid) return;
    var dh = Math.max(Math.max(s.d.body.scrollHeight, s.d.documentElement.scrollHeight), Math.max(s.d.body.offsetHeight, s.d.documentElement.offsetHeight), Math.max(s.d.body.clientHeight, s.d.documentElement.clientHeight)),
        vph = window.innerHeight || (s.d.documentElement.clientHeight || s.d.body.clientHeight),
        st = window.pageYOffset || (window.document.documentElement.scrollTop || window.document.body.scrollTop),
        vh = st + vph,
        pv = Math.min(Math.round(vh / dh * 100), 100),
        c = "",
        p = s.c_r("s_ppv").split(",")[0];
    if (!s.c_r("tp") || (s.unescape ? s.unescape(p) : decodeURIComponent(p)) != s.getPPVid || s.ppvChange == "1" && (s.c_r("tp") && dh != s.c_r("tp"))) {
        s.c_w("tp", dh);
        s.c_w("s_ppv", "")
    } else c = s.c_r("s_ppv");
    var a = c && c.indexOf(",") > -1 ? c.split(",", 4) : [],
        id = a.length > 0 ? a[0] : escape(s.getPPVid),
        cv = a.length > 1 ? parseInt(a[1]) : 0,
        p0 = a.length > 2 ? parseInt(a[2]) :
        pv,
        cy = a.length > 3 ? parseInt(a[3]) : 0,
        cn = pv > 0 ? id + "," + (pv > cv ? pv : cv) + "," + p0 + "," + (vh > cy ? vh : cy) : "";
    s.c_w("s_ppv", cn)
};
s.getPercentPageViewed = function(pid, change) {
    var s = this,
        ist = !s.getPPVid ? true : false;
    pid = pid ? pid : s.pageName ? s.pageName : document.location.href;
    s.ppvChange = change ? change : "1";
    if (typeof s.linkType != "undefined" && s.linkType != "0" && s.linkType != "" && s.linkType != "e") return "";
    var v = s.c_r("s_ppv"),
        a = v.indexOf(",") > -1 ? v.split(",", 4) : [];
    if (a && a.length < 4) {
        for (var i = 3; i > 0; i--) a[i] = i < a.length ? a[i - 1] : "";
        a[0] = ""
    }
    if (a) a[0] = unescape(a[0]);
    if (!s.getPPVid || s.getPPVid != pid) {
        s.getPPVid = pid;
        s.c_w("s_ppv", escape(s.getPPVid));
        s.handlePPVevents()
    }
    if (ist)
        if (window.addEventListener) {
            window.addEventListener("load",
                s.handlePPVevents, false);
            window.addEventListener("click", s.handlePPVevents, false);
            window.addEventListener("scroll", s.handlePPVevents, false);
            window.addEventListener("resize", s.handlePPVevents, false)
        } else if (window.attachEvent) {
        window.attachEvent("onload", s.handlePPVevents);
        window.attachEvent("onclick", s.handlePPVevents);
        window.attachEvent("onscroll", s.handlePPVevents);
        window.attachEvent("onresize", s.handlePPVevents)
    }
    return pid != "-" ? a : a[1]
};
/** Plugin: getTimeToComplete **/
s.getTimeToComplete = new Function("v", "cn", "e", "var s=this,d=new Date,x=d,k;if(!s.ttcr){e=e?e:0;if(v=='start'||v=='stop')s.ttcr=1;x.setTime(x.getTime()+e* 86400000);if(v=='start'){s.c_w(cn,d.getTime(),e?x:0);return '';}if(v=='stop'){k=s.c_r(cn);if(!s.c_w(cn,'',d)||!k)return '';v=(d.getTime()-k)/1000;var td=86400,th=3600,tm=60,r=5,u,un;if(v>td){u=td;un='days';}else if(v>th){u=th;un='hours';}else if(v>tm){r=2;u=tm;un='minutes';}else{r=.2;u=1;un='seconds';}vw=v;v=v*r/u;return (Math.round(v)/r)+' '+un+','+vw;}}return '';");
/*
 * Plugin Utility: Append to List v1.2
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=l.split(d),al=a.length;fo"
+"r(i=0;i<al;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowe"
+"rCase()));}}if(!m)l=l?l+d+v:v;return l;");

function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT}

s.getPreviousLinkName = function(sg,vl) {
         var s = this,
         tm = new Date(),
         ck = "gpv_lnk",
         rl = "";
        tm.setTime(tm.getTime() + 18E5);
        if (sg =="set"){
          s.c_w(ck, vl, tm)
        }else if (sg =="get"){
          rl = s.c_r(ck);
          s.c_w(ck, '', tm)
        }
    return rl
};
/*******Plugin Area End *****/

function automateVariables(event){
  console.log('page load call', event)
  s.timestamp=Math.round((new Date()).getTime()/1000);
  s.campaign = s.Util.getQueryParam("cid");
  var pageName = event.detail.pageName;
  s.pageName = (pageName != undefined) ? pageName : '';

  s.prop1= window.location.host;
  s.prop2= window.location.pathname;
  s.prop3= s.version;
  s.prop4= window.location.href;
  s.prop5= (document.documentElement.lang != '') ? document.documentElement.lang : navigator.languages[1];
 // s.prop7 =s_getLoadTime();
  var lineOfBusiness = event.detail.lineOfBusiness;
  s.prop6 = (lineOfBusiness != undefined) ? lineOfBusiness: '';
  var website = event.detail.website;
  s.prop7 = (website != undefined) ? website : '';
  /* For Previous link value */
  s.prop40 = s.getPreviousLinkName("get");
  /* site section */
  var siteSectionL1 = event.detail.siteSectionL1;
  var siteSectionL2 = event.detail.siteSectionL2;
  var siteSectionL3 = event.detail.siteSectionL3;
  s.prop9 = siteSectionL1;
  s.prop10 = siteSectionL2;
  s.prop11 = siteSectionL3;

  /* For Previous Page value */
  if (s.pageName){
      var ppvArray = s.getPercentPageViewed();
      s.prop25 = "D=pageName";
  }
  if (typeof ppvArray != 'undefined' && typeof ppvArray[1] != 'undefined') {
      s.prop26 = 'initialpercent=' + ppvArray[2] + ' | highestpercent=' + ppvArray[1];
      s.prop16 = ppvArray[0];
  } else {
      s.prop26 = s.prop16 = "";
  }

var eventType = event.detail.eventType;
console.log('eventType', eventType);
if(eventType == "pageLoad" || eventType == "modalLoad" || eventType == "tabLoad" || eventType == "carouselLoad" || eventType == "taskFlow"){
  console.log('eventType 2', eventType);
  if(eventType == "taskFlow"){
    var taskName = event.detail.taskName;
    var taskSeqNo = event.detail.taskSeqNo;
    var taskStepName = event.detail.taskStepName;
    var tastStart = event.detail.tastStart;
    var tastComplete = event.detail.tastComplete;
    if (tastStart){
      s.events = "event100";
      if(s.ttcr != undefined){s.ttcr = undefined;}
      var ttcf = "start";
      ttcf = s.getTimeToComplete(ttcf, "TTC", 0);
    }else if(tastComplete){
      if(s.ttcr != undefined){s.ttcr = undefined;}
      ttcf = "stop";
      ttcf = s.getTimeToComplete(ttcf, "TTC", 0);
      if (ttcf.indexOf(",") > -1){
        var buck = ttcf.split(",")[0];
        var sec = ttcf.split(",")[1];
        s.prop66 = buck;
        s.events=s.apl(s.events,'event101='+sec,',',1);
      }
    }
    s.prop12 = taskName;
    s.prop13 = taskSeqNo;
    s.prop14 = taskStepName;
  }
  s.t();
}
}
automateVariables(event)

function automateLinkCall(event){
  var eventType = event.detail.eventType;
  if (eventType == 'intLinkClick'){
    s.linkTrackVars = "prop40,prop12"
    var linkName = event.detail.linkName;
    var intLinkUrl = event.detail.linkURL;
    s.prop40 = linkName;
    s.prop12 = intLinkUrl;
    //s.getPreviousLinkName("set", event.detail.linkName);
     s.tl(this,'o',linkName);
  }else if (eventType == 'exitLinkClick'){
    s.linkTrackVars = "prop40,prop12"
    var linkName = event.detail.linkName;
    var exitLinkUrl = event.detail.linkURL;
    s.prop40 = linkName;
    s.prop12 = exitLinkUrl;
    s.tl(this,'e',linkName);
  }else if (eventType == 'downloadLinkClick'){
    s.linkTrackVars = "prop40"
    var linkName = event.detail.linkName;
    s.prop40 = linkName;
    s.tl(this,'d',linkName);
  }else if(eventType == 'formSubmit'){
    s.linkTrackVars = "prop17,prop18,prop19,prop20,prop21"
    var formName = event.detail.formName;
    var formId = event.detail.formId;
    var formStepName = event.detail.formStepName;
    var formTotalSteps = event.detail.formTotalSteps;
    var formStepNo = event.detail.formStepNo;
    s.prop17 = formName;
    s.prop18 = formId;
    s.prop19 = formStepName;
    s.prop20 = formTotalSteps;
    s.prop21 = formStepNo;
    s.tl(this,'o',formName);
  }else if(eventType == 'formError'){
    s.linkTrackVars = "prop17,prop18,prop19,prop20,prop21,prop22,prop23,prop24,events"
    s.linkTrackEvents="event4";
    var formName = event.detail.formName;
    var formId = event.detail.formId;
    var formStepName = event.detail.formStepName;
    var formTotalSteps = event.detail.formTotalSteps;
    var formStepNo = event.detail.formStepNo;
    var formErrorCount = event.detail.formErrorCount;
    var formErrorFields = event.detail.formErrorFields;
    var formErrorType = event.detail.formErrorType;
    s.prop17 = formName;
    s.prop18 = formId;
    s.prop19 = formStepName;
    s.prop20 = formTotalSteps;
    s.prop21 = formStepNo;
    s.prop22 = formErrorCount;
    s.prop23 = formErrorFields;
    s.prop24 = formErrorType;
    s.events = 'event4';
    s.tl(this,'o',formName);
  }
}
