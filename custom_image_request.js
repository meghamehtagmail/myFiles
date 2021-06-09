s.s_date = new Date();
s.s_rdm = s.s_date.getTime();
s.s_desturl='<img src="https://smetrics.optum.com/b/ss/uhgmyuhcdev/1/G.4--NS/123456?pageName=Order%20 Confirmation&events=purchase%2Cevent1&c1=Registered&purchaseID=0123456&products=Books%3BBook%20Name%3B1%3B19.95&state=CA&zip=90210&g=https%3A//www.somesite.com/cart/confirmation.asp" width="1" height="1" border="0" />';
document.write(s.s_desturl);

var requestURL = "https://smetrics.optum.com/b/ss/uhgmyuhcdev/1/G.4--NS/123456?pageName=OrderConfirmation&events=purchase%2Cevent1&c1=Registered&purchaseID=0123456&products=Books%3BBook%20Name%3B1%3B19.95&state=CA&zip=90210&g=https//www.somesite.com/cart/confirmation.asp"
var hostName = 'smetrics.optum.com'
function customImage(requestURL,hostName) {
  try {
    var h_name = requestURL.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (h_name != null && h_name.length > 2 && typeof h_name[2] === 'string' && h_name[2].length > 0) {
      var r_url = requestURL.replace(h_name[2], hostName);
      var img_tag = document.createElement("IMG");
      img_tag.setAttribute("src", r_url);
      img_tag.setAttribute("width", "1");
      img_tag.setAttribute("height", "1");
      img_tag.setAttribute("style", "display:none");
      document.body.appendChild(img_tag);
    }
  }
  catch(err) {
  }
}
customImage(requestURL,hostName)


/**code to read mcid start */
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
		mcid = "testing"+amcv.substring((amcv.indexOf(str))+8, (amcv.indexOf(str))+46)
	}
}
/**code to read mcid end */
var pageNameValue = "login success page"
var c25Value = "login success page"
var url = "https://systest3.myuhc.com"
var v72Value = mcid
var requestURL = "https://smetrics.optum.com/b/ss/uhgmyuhcdev/1/G.4--NS/123456" + "?mid="+mcid+"&pageName="+pageNameValue+"&c25="+c25Value+"&v72="+v72Value+"&g="+url+""
function customImage(requestURL) {
  try {
      var img_tag = document.createElement("IMG");
      img_tag.setAttribute("src", requestURL);
      img_tag.setAttribute("width", "1");
      img_tag.setAttribute("height", "1");
      img_tag.setAttribute("style", "display:none");
      document.body.appendChild(img_tag);
  }
  catch(err) {
  }
}
customImage(requestURL)
var img_request = document.getElementById('aa_image_request');
img_request.setAttribute("src", requestURL);
<img src="" width="1" height="1" border="0" style="display:none" id="aa_image_request"/>

var requestURL = "https://smetrics.optum.com/b/ss/"+ rsids + "/1/G.4--NS/123456" + "?
mid="+mcid+
"&g="+url+
"&c1="+url+
"&v3="+url+
"&events="+events+
"&pageName="+pageNameValue+
"&v88="+planType+
"&c25="+c25Value+
"&v25="+v25Value+
"&v24="+planId+
"&v32="+groupId+
"&v74="+uuid+
"&v91="+memberStatus+
"&v38="+lob+
"&c38="+lob+
"&v22="+memberType+
"&v27="+clientName+
"&v87="+planName+
"&v52="+planState+
"&v72="+v72Value+
"&v55="+marketType+
"&v59="+marketNumber+
"&v86="+planCategory+
"&v90="+productBrand+
"&v85="+groupID+
"&v106="+productID+
""
