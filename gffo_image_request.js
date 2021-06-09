if (_satellite.settings.isStaging == true)
{
	var rsidVal="uhggffodev,uhgoptumglobaldev";
}else{
	var rsidVal="uhggffoprod,uhgoptumglobalprod";
}

var mcidVal = s.visitor.getMarketingCloudVisitorID();
var businessUnitVal = 'uhc';
var websiteVal = 'mr';
var pageUrlVal = window.location.href;
var gffoPageName = s.pageName;
var gffoFormName = _satellite.getVar('GFFO Form Name');
var gffoFormlob = _satellite.getVar("GFFO Form LOB");
var gffoFormStep = _satellite.getVar('GFFO Form Step');
var gffoFormType = _satellite.getVar('GFFO Form Type');
var gffpPageLang  = _satellite.getVar('Page Language');

var gffoPreviousPageVal = s.getPreviousValue(gffoPageName, 'gpv_pn');

var sdrVal = {mid:mcidVal,
   g:pageUrlVal,
   pageName:gffoPageName,
   v1:businessUnitVal,
   v2:websiteVal,
   v3: "D=g",
   v16: gffoPreviousPageVal,
   v25:gffoPageName,
   v27:gffoFormName,
   v28:gffoFormlob,
   v33: gffoFormStep,
   v34: gffoFormType,
   v72:mcidVal,
   c1: "D=g",
   c16:gffoPreviousPageVal,
   c25:gffoPageName,
   c27:gffoFormName,
   c28:gffoFormlob,
   c33: gffoFormStep,
   c34: gffoFormType,
   c71: gffpPageLang,
   events: 'event113'
 };

 sendImageRequest(rsidVal,sdrVal)

/*Start: send image request function defination ***Version 1** */
function sendImageRequest(rsid,sdr) {
  try {
  if (arguments.length == 2 && typeof rsid  === 'string' && rsid  != '' && typeof sdr === 'object' && sdr != null){
		var queryArr = [];
	 	for (var key in sdr) {
	 		if (sdr.hasOwnProperty(key)) {
	 			queryArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(sdr[key]));
	 		}
	 	}
	 		var sdrString = queryArr.join('&');
      var requestTimestamp =  (new Date()).getTime();
      var requestURL = "https://smetrics.optum.com/b/ss/"+rsid+"/1/G.4--NS/"+requestTimestamp+"?" + sdrString
        var img = document.createElement("IMG");
        img.setAttribute("src", requestURL);
        img.setAttribute("width", "1");
        img.setAttribute("height", "1");
        img.setAttribute("border", "0");
        img.setAttribute("id", "send_image_request_id");
        img.setAttribute("style", "display:none");
        document.body.appendChild(img);
        var elementImageTag = document.getElementById("send_image_request_id");
        elementImageTag.parentNode.removeChild(elementImageTag);
    }
  }
  catch(err) {
  }
}
/*End: send image request function defination ***Version 1** */
 AQB:1,
   ce:"UTF-8",
   mid:mcidVal,
   t:timeStampVal,
   k:cookieSupport,

var codeVersion = s.version+"-"+s.tagContainerMarker;
var cookieSupport = s.cookieWrite("s_cc", "true", 0) ? "Y" : "N";
var dateVal = new Date;
var yearVal = dateVal.getYear();
var timeStampVal = (dateVal.getDate() + "/" + dateVal.getMonth() +
							 "/" + (1900 > yearVal ? yearVal + 1900 : yearVal) + " " + dateVal.getHours() + ":" + dateVal.getMinutes() + ":" + dateVal.getSeconds() + " " + dateVal.getDay() + " " + dateVal.getTimezoneOffset());




									 AQE:1

									 window.sendImageRequest(rsidVal,sdrVal,codeVersion)



if (window.location.pathname == "/claims-and-accounts/summary" || window.location.pathname == "/claims-and-accounts/claims" || window.location.pathname == "/claims-and-accounts/claim-details"){
	try {
		var isVideoAvailable = _satellite.getVar('videoAvailable')
		if (isVideoAvailable == "ssky"){
			var videoPageName = '';
			if (window.location.pathname.indexOf('summary') > -1){
				videoPageName = 'summary';
			}else if (window.location.pathname.indexOf('claims') > -1){
				videoPageName = 'claims';
			}else if(window.location.pathname.indexOf("claim-details") > -1){
				videoPageName = 'claim-details';
			}
			pageDataLayer["videoContent"] = {"videoName": "claim video", "videoPageName" : videoPageName}
			_satellite.track('trackVideoImpression');
		}
	}catch(err) {}
}
