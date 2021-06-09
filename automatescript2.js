function automateVariables(){
  var eventType = event.detail.eventType;
  console.log('eventType', eventType);
  if(eventType == "pageLoad" || eventType == "modalLoad" || eventType == "tabLoad" || eventType == "carouselLoad" || eventType == "taskFlow"){
    console.log('eventType 2', eventType);
    s.timestamp=Math.round((new Date()).getTime()/1000);
    s.campaign = s.Util.getQueryParam("cid");
    s.prop1= window.location.host;
    s.prop2= window.location.pathname;
    s.prop3= s.version;
    s.prop4= window.location.href;
    s.prop7 =s_getLoadTime();
    /* For Previous link value */
    s.prop40 = s.getPreviousLinkName("get");

    var pageName = event.detail.pageName;
    s.pageName = (pageName != undefined) ? pageName : '';
    var language = event.detail.pageLanguage
    s.prop5= (language != undefined) ? language : document.documentElement.lang;
    var lineOfBusiness = event.detail.lineOfBusiness;
    s.prop6 = (lineOfBusiness != undefined) ? lineOfBusiness: '';
    var website = event.detail.website;
    s.prop7 = (website != undefined) ? website : '';

    /* site section */
    var siteSectionL1 = event.detail.siteSection1;
    var siteSectionL2 = event.detail.siteSection2;
    var siteSectionL3 = event.detail.siteSection3;
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
  }else if (eventType == 'intLinkClick'){
    var linkName = event.detail.linkName;
    s.getPreviousLinkName("set", event.detail.linkName);
  }else if (eventType == 'exitLinkClick'){
    s.linkTrackVars = "prop40,prop12"
    var linkName = event.detail.linkName;
    var exitLinkUrl = event.detail.exitLinkUrl;
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
}//function end


if ((pageId != null && (pageId.indexOf('footer')>-1 || pageId.indexOf('socialMedia')>-1)) || (modalkey != null && modalkey =="LearnMore_v2") || (classVal != null && (classVal == "link_sidebaru" || classVal == "link_sidebar" || classVal == "link_sidebar_prelogin" || classVal == "link_topGlobal" || classVal == "link_btnPrimary")) || (idVal != null && (idVal == "hsid-FUn" || idVal == "hsid-FPwd" || idVal == "hsid-registerNow"))){
  	return true;
  }



  /* For Previous Page value */
    if (s.pageName)
        var ppvArray = s.getPercentPageViewed();
    if (typeof ppvArray != 'undefined' && typeof ppvArray[1] != 'undefined') {
        s.prop26 = 'initialpercent=' + ppvArray[2] + ' | highestpercent=' + ppvArray[1];
        s.prop16 = ppvArray[0];
    } else {
        s.prop26 = s.prop16 = "";
    }


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


var linkDownloadFileTypes = "doc,docx,eps,jpg,png,svg,xls,ppt,pptx,pdf,xlsx,tab,csv,zip,txt,vsd,vxd,xml,js,css,rar,exe,wma,mov,avi,wmv,mp3,wav,m4v"
    var c, b, d,f,
        e = "https://www.myuhc.com/content/myuhc/Member/ClaimForms/Static%20Files/CMS1500ClaimForm010402.pdf",
        g, m;
        var n = 0,
            r = 0,
            q;
        if (linkDownloadFileTypes)
            for (p = e.toLowerCase(),
             g = p.indexOf("?"),
             m = p.indexOf("#"),
              0 <= g ? 0 <= m && m < g && (g = m) : g = m,
              0 <= g && (p = p.substring(0, g)),
              g = linkDownloadFileTypes.toLowerCase().split(","),
              m = 0; m < g.length; m++)
              (q = g[m]) && p.substring(p.length - (q.length + 1)) == "." + q && (f = "d");
