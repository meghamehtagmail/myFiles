function automateVariables(){
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
  automateVariables();
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



var cl = document.cookie.split(';');
var mcid='';
for(var i = 0; i < cl.length; i++) {
  var c = cl[i];
  //alert(cl[i]);
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf('AMCV_8E391C8B533058250A490D4D%40AdobeOrg') === 0)
  {
  var amcv =c.substring(0, c.length);

   var str = "MCMID";
   if (amcv.indexOf(str)>= -1)
     mcid = amcv.substring((amcv.indexOf(str))+8, (amcv.indexOf(str))+46)
  }
}

var customMcidIframe = document.createElement("iframe");
var otherDomainUrl = "http://127.0.0.1:3000/capture_mid.html";
customMcidIframe.setAttribute("src", otherDomainUrl);
customMcidIframe.setAttribute("width", "1");
customMcidIframe.setAttribute("height", "1");
customMcidIframe.setAttribute("style", "display:none");
customMcidIframe.setAttribute("name", "custom_mcid_iframe");
customMcidIframe.setAttribute("frameborder", 0);
document.body.appendChild(customMcidIframe);



function waitForElementToDisplay(selector, time) {
  if(document.querySelector(selector)!=null) {
      let win = window.frames.custom_mcid_iframe;
      win.postMessage("message", "http://127.0.0.1:3000/capture_mid.html");
      console.log("The element is displayed, you can put your code instead of this alert.");
      return;
  }
  else {
      setTimeout(function() {
          waitForElementToDisplay(selector, time);
      }, time);
  }
}
waitForElementToDisplay("[name='custom_mcid_iframe']", 500)

var customMcidIframe = document.createElement("iframe");
var otherDomainUrl = "https://uhc-stage.uhc.com/sandbox/cross-domain-test";
customMcidIframe.setAttribute("src", otherDomainUrl);
customMcidIframe.setAttribute("width", "1");
customMcidIframe.setAttribute("height", "1");
customMcidIframe.setAttribute("style", "display:none");
customMcidIframe.setAttribute("name", "example");
customMcidIframe.setAttribute("frameborder", 0);
document.body.appendChild(customMcidIframe);
let win = window.frames.example;
win.postMessage("message", "https://uhc-stage.uhc.com/sandbox/cross-domain-test");

	var customMcidIframe = document.createElement("iframe");
	var otherDomainUrl = "https://www.uhc.com/about-us/careers;custom_mcid="+mcid+"";
  customMcidIframe.setAttribute("src", otherDomainUrl);
  customMcidIframe.setAttribute("width", "1");
  customMcidIframe.setAttribute("height", "1");
  customMcidIframe.setAttribute("style", "display:none");
  customMcidIframe.setAttribute("frameborder", 0);
  document.body.appendChild(customMcidIframe);

  var customMcidIframe = document.createElement("iframe");
  var otherDomainUrl = "https://www.medicare.uhc.com;custom_mcid="+mcid+"";
  customMcidIframe.setAttribute("src", otherDomainUrl);
  customMcidIframe.setAttribute("width", "1");
  customMcidIframe.setAttribute("height", "1");
  customMcidIframe.setAttribute("style", "display:none");
  customMcidIframe.setAttribute("frameborder", 0);
  document.body.appendChild(customMcidIframe);

  var customMcidIframe = document.createElement("iframe");
  var otherDomainUrl = "https://uhc-stage.uhc.com/sandbox/erfacts-a11y;custom_mcid="+mcid+"";
  customMcidIframe.setAttribute("data-src", otherDomainUrl);
  customMcidIframe.setAttribute("width", "1");
  customMcidIframe.setAttribute("height", "1");
  customMcidIframe.setAttribute("style", "display:none");
  customMcidIframe.setAttribute("frameborder", 0);
    customMcidIframe.setAttribute("data-cookiescript", "accepted");
    customMcidIframe.setAttribute("alt", "Please accept cookie policy first");
  document.body.appendChild(customMcidIframe);


  var cl = document.cookie.split(';');
  var mcid='';
  for(var i = 0; i < cl.length; i++) {
    var c = cl[i];
    //alert(cl[i]);
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf('AMCV_8E391C8B533058250A490D4D%40AdobeOrg') === 0)
    {
    var amcv =c.substring(0, c.length);

     var str = "MCMID";
     if (amcv.indexOf(str)>= -1)
       mcid = amcv.substring((amcv.indexOf(str))+8, (amcv.indexOf(str))+46)
    }
  }

  var customMcidIframe = document.createElement("iframe");
  	var otherDomainUrl = "https://uhc-stage.uhc.com/sandbox/cross-domain-test;custom_mcid="+mcid+"";
    customMcidIframe.setAttribute("src", otherDomainUrl);
    customMcidIframe.setAttribute("width", "1");
    customMcidIframe.setAttribute("height", "1");
    customMcidIframe.setAttribute("style", "display:none");
    customMcidIframe.setAttribute("frameborder", 0);
    document.body.appendChild(customMcidIframe);


var customMcidIframe = document.createElement("iframe");
var otherDomainUrl = "https://uhc-stage.uhc.com/sandbox/cross-domain-test2";
customMcidIframe.setAttribute("src", otherDomainUrl);
customMcidIframe.setAttribute("width", "1");
customMcidIframe.setAttribute("height", "1");
customMcidIframe.setAttribute("style", "display:none");
customMcidIframe.setAttribute("name", "mcid_iframe");
customMcidIframe.setAttribute("frameborder", 0);
document.body.appendChild(customMcidIframe);
function waitForElementToDisplay(selector, time) {
  if(document.querySelector(selector)!=null) {
    	var iframe_el = document.querySelector(selector);
      iframe_el.contentWindow.postMessage("test message",'*');
    	console.log('custom mcid iframe el available')
		return;
  }
  else {
      setTimeout(function() {
          waitForElementToDisplay(selector, time);
      }, time);
  }
}
waitForElementToDisplay("[name='mcid_iframe']", 500)






console.log('event details', event);
s.getPreviousValue(event.detail.contentArticle,'gpv_ln');
//Start: Code  to check exist link and stored link value in c17 for H&W home page
function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2];}
    else { return null;}
}
var linkUrlValue = _satellite.getVar('linkUrl');
if (linkUrlValue != 0){
	var linkHostName = getHostName(linkUrlValue);
  if(linkHostName != 'www.medicare.uhc.com' && linkHostName != 'www.mymedicareaccount.com' && linkHostName != 'member.mymedicareaccount.com' && linkHostName != 'member.uhc.com' &&  linkHostName != 'member.int.uhc.com' && linkHostName != 'stage-medicare.uhc.com' && event != undefined && event.detail != undefined && event.detail.contentArticle != undefined && (window.location.pathname.indexOf("/member/health-and-wellness.html") > -1)){
  	s.linkTrackVars = "prop17";
  	s.prop17 =  event.detail.contentArticle;
	}
}



function automateVariables(){
  console.log('automateVariables');
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
  }else {
      s.prop26 = s.prop16 = "";
  }

  var eventType = event.detail.eventType;
  console.log('eventType', eventType);
  if(eventType == "pageLoad" || eventType == "modalLoad" || eventType == "tabLoad" || eventType == "carouselLoad" || eventType == "taskFlow"){
    if(eventType == "taskFlow"){
      var taskName = event.detail.taskName;
      var taskSeqNo = event.detail.taskSeqNo;
      var taskStepName = event.detail.taskStepName;
      var tastStart = event.detail.tastStart;
      var tastComplete = event.detail.tastComplete;
      if (tastStart){
        s.events = "event100";
        if(s.ttcr != undefined){
          s.ttcr = undefined;
        }
        var ttcf = "start";
        ttcf = s.getTimeToComplete(ttcf, "TTC", 0);
      }else if(tastComplete){
        if(s.ttcr != undefined){
          s.ttcr = undefined;
        }
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
};

function getCookie(cname) {
    var name = cname + "=";
    var cArr = window.document.cookie.split(';');
    for(var i=0; i<cArr.length; i++) {
        var c = cArr[i].trim();
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}
var cl = document.cookie.split(';');
var mcid='';
for(var i = 0; i < cl.length; i++) {
  var c = cl[i];
  //alert(cl[i]);
  while (c.charAt(0) == ' ') {
    c = c.substring(1);
  }
  if (c.indexOf('AMCV_8E391C8B533058250A490D4D%40AdobeOrg') === 0)
  {
  var amcv =c.substring(0, c.length);

   var str = "MCMID";
   if (amcv.indexOf(str)>= -1)
   //console.log('amcv1', getCookie('AMCV_8E391C8B533058250A490D4D%40AdobeOrg'))
	  document.cookie = 'AMCV_8E391C8B533058250A490D4D%40AdobeOrg' + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/;domain=.uhc.com;';
    //console.log('amcv2', getCookie('AMCV_8E391C8B533058250A490D4D%40AdobeOrg'))

    //document.cookie = "AMCV_8E391C8B533058250A490D4D%40AdobeOrg= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  }
}

var iframe_doc = document.querySelector('.sunday-sky-video iframe').contentDocument
