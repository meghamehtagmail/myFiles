/***automate script start ****/
function automateVariables(event){
  console.log('automateVariables function')
	s_getLoadTime()
  var eventType = event.detail.eventType;

  /* common variables for page load and link call start*/
    s.prop25 = s.eVar25 = "D=pageName";
 	  s.eVar3 = s.prop1 ='D=g'
    s.prop12= window.location.hostname;
  	var language = event.detail.pageLanguage
    /* will remove us keyword in next release */
    s.prop71= (language != undefined) ? language +'-us'  : document.documentElement.lang+'-us';
    s.prop44 = window.location.search;
  	s.prop13= window.location.pathname;
  	s.eVar72 = _satellite.getVisitorId().getMarketingCloudVisitorID();
   /* common variables for page load and link call end*/

  if(eventType == "pageLoad" || eventType == "modalLoad" || eventType == "tabLoad" || eventType == "carouselLoad" || eventType == "taskFlow"){
     console.log('eventType', eventType)
    s.timestamp=Math.round((new Date()).getTime()/1000);
    s.campaign = s.Util.getQueryParam("cid");
    s.prop2= s.version;
    var lineOfBusiness = event.detail.lineOfBusiness;
    //s.eVar38 = (lineOfBusiness != undefined) ? lineOfBusiness: '';
    var website = event.detail.website;
    s.eVar2 = (website != undefined) ? website : 'myuhc';
		s.prop27= s_getLoadTime()/100;
    /* site section */
    var siteSectionL1 = event.detail.siteSection1;
    var siteSectionL2 = event.detail.siteSection2;
    var siteSectionL3 = event.detail.siteSection3;
    s.prop3 = siteSectionL1;
    s.prop4 = siteSectionL2;
    s.prop5 = siteSectionL3;

    /* For Previous Page value */
    var pageName = event.detail.pageName;
    s.pageName = pageName;
    var ppvArray = s.getPercentPageViewed();
    if (typeof ppvArray != 'undefined' && typeof ppvArray[1] != 'undefined') {
        s.prop26 = 'initialpercent=' + ppvArray[2] + ' | highestpercent=' + ppvArray[1];
        s.prop16 = ppvArray[0];
    } else {
        s.prop26 = s.prop16 = "";
    }

    if(eventType == "taskFlow"){
      console.log('please assign variables for task flow')
    }
   // s.trackingServer="metrics.optum.com";
		//s.trackingServerSecure="smetrics.optum.com";
   // s.t();
   // _satellite.pageBottom();
  }else if (eventType == 'intLinkClick'){
    s.linkTrackVars = "eVar3,eVar40,eVar72,prop1,prop40,prop59,prop12,prop25,prop71,eVar72,prop44,prop13,prop17"
    var linkName = event.detail.linkName;
    var linkURL = event.detail.linkURL;
   	s.eVar40 = s.prop40 = s.prop17 = linkName;
    s.tl(this,'o',linkName);
  }else if (eventType == 'exitLinkClick'){
    s.linkTrackVars = "eVar3,prop1,prop65,eVar72,prop59,prop12,prop25,prop71,eVar72,prop44,prop13,prop17"
    var linkName = event.detail.linkName;
    var linkURL = event.detail.linkURL;
    s.prop65 = s.prop17 = linkName;
    s.prop59 = linkURL;
    s.tl(this,'e',linkURL);
  }else if (eventType == 'downloadLinkClick'){
    console.log('please assign variables for downloadLinkClick')
  }else if(eventType == 'formLinkClick'){
    console.log('please assign variables for formLinkClick')
  }
}//function end
