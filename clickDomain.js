function getHostName(url) {
  if (url.indexOf("http://") > -1 || url.indexOf("https://") > -1){
  }else{
    url = "http://" + url;
  }
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
  return match[2];
  }
  else {
      return '';
  }
}
function getDomain(url) {
  var hostName = getHostName(url);
  var domain = hostName;

  if (hostName != null) {
      var parts = hostName.split('.').reverse();

      if (parts != null && parts.length > 1) {
          domain = parts[1] + '.' + parts[0];
      }
  }

  return domain;
}
try {
  var clickUrl = _satellite.getVar('Click Url');
  if (clickUrl != undefined && clickUrl != null && clickUrl != ""){
   var clickHostName = getDomain(clickUrl);
     return clickHostName;
  }
} catch (e) {}
var environment  = ""; // dynamic variable
var envURL = "";
if (environment == "dev" || environment == "stg"){
  envURL = "uhgmyuhcdev";
}else{
  envURL = "uhgoptumglobalprod,uhgmyuhcprod";
}

var marketType = '<%=marketType%>';
var marketNumber = '<%=marketNumber%>';
var planCategory = '<%=planCategory%>';

    var requestURL = "https://smetrics.optum.com/b/ss/" + rsids + "/1/G.4--NS/123456" + "?mid="+mcid+"&events="+events+"&pageName="+pageNameValue+"&c25="+c25Value+"&v25="+v25Value+"&v24="+planId+"&c24="+planId+"&v32="+groupId+"&c32="+groupId+"&v74="+v74+"&v75="+v75+"&v14="+memberStatus+"&c14="+memberStatus+"&v38="+lob+"&c38="+lob+"&v22="+memberType+"&c22="+memberType+"&v27="+clientName+"&v28="+clientId+"&v87="+planName+"&v52="+planState+"&c52="+planState+"&v72="+v72Value+"&v55="+marketType+"&v59="+marketNumber+"&v86="+planCategory+"&g="+url+"&c1="+url+"&v3="+url+""
