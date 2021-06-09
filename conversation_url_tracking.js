//Store cookie code start
//Set the number of days before your cookie should expire
       var ExpireDays = 90;
       //Do not change anything below this line
       qstr = document.location.search;
       qstr = qstr.substring(1, qstr.length);
       function SetCookie(cookieName, cookieValue, nDays) {
           var today = new Date();
           var expire = new Date();
           if (nDays == null || nDays == 0) nDays = 1;
           expire.setTime(today.getTime() + 3600000 * 24 * nDays);
           document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + "; expires=" + expire.toGMTString() + "; path=/";
       }
       thevars = qstr.split("&");
       for (i = 0; i < thevars.length; i++) {
           cookiecase = thevars[i].split("=");
           switch (cookiecase[0]) {
               case "sfmc_sub":
                   sfmc_sub = cookiecase[1];
                   SetCookie("SubscriberID", sfmc_sub, ExpireDays);
                   break;
               case "e":
                   e = cookiecase[1];
                   SetCookie("EmailAddr_", e, ExpireDays);
                   break;
               case "j":
                   j = cookiecase[1];
                   SetCookie("JobID", j, ExpireDays);
                   break;
               case "l":
                   l = cookiecase[1];
                   SetCookie("ListID", l, ExpireDays);
                   break
               case "jb":
                   jb = cookiecase[1];
                   SetCookie("BatchID", jb, ExpireDays);
                   break;
               case "u":
                   u = cookiecase[1];
                   SetCookie("UrlID", u, ExpireDays);
                   break;
               case "mid":
                   mid = cookiecase[1];
                   SetCookie("MemberID", mid, ExpireDays);
                   break;
               default:
                   break;
           }

       }

//store cookie code end

//get cookie code start

//Set the following parameters for your conversion parameters
      var convid = "1";
      var displayorder = "1";
      var linkalias = "My Link Name";
      var dataset = "<data amt=\"1\" unit=\"Downloads\" accumulate=\"true\" />";

      //Do not change anything below
      function SetCookie(cookieName, cookieValue, nDays) {
         var today = new Date();
         var expire = new Date();
         if (nDays == null || nDays == 0) nDays = 1;
         expire.setTime(today.getTime() + 3600000 * 24 * nDays);
         document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + "; expires=" +
         expire.toGMTString() + "; path=/";
      }

      function getCookie(cookiename) {
        if (document.cookie.length > 0) {
          startC = document.cookie.indexOf(cookiename + "=");
          if (startC != -1) {
            startC += cookiename.length + 1;
            endC = document.cookie.indexOf(";", startC);
            if (endC == -1) endC = document.cookie.length;
            return decodeURIComponent(document.cookie.substring(startC, endC));
          }
        }
        return null;
      }
   var jobid = getCookie("JobID");
   var emailaddr = getCookie("EmailAddr_");
   var subid = getCookie("SubscriberID");
   var listid = getCookie("ListID");
   var batchid = getCookie("BatchID");
   var urlid = getCookie("UrlID");
   var memberid = getCookie("MemberID");
   //Debug
   //document.write("<textarea rows=5 cols=80>");
      document.write("<img src='");
      document.write("http://click.exacttarget.com/conversion.aspx?xml=<system><system_name>tracking</system_name><action>conversion</action>");
      document.write("<member_id>" + memberid + "</member_id>");
      document.write("<job_id>" + jobid + "</job_id>");
      if (subid == undefined) {
      document.write("<sub_id></sub_id>");
      } else {
      document.write("<sub_id>" + subid + "</sub_id>");
      emailaddr = undefined;
      }
      if (emailaddr == undefined) {
      document.write("<email></email>");
      } else {
      document.write("<email>" + emailaddr + "</email>");
      }
      document.write("<list>" + listid + "</list>");
      document.write("<BatchID>" + batchid + "</BatchID>");
      document.write("<original_link_id>" + urlid + "</original_link_id>");
      document.write("<conversion_link_id>" + convid + "</conversion_link_id>");
      document.write("<link_alias>" + linkalias + "</link_alias>");
      document.write("<display_order>" + displayorder + "</display_order>");
      document.write("<data_set>" + dataset + "</data_set>");
      document.write("</system>'");
      document.write(" width='1' height='1'>");
   //Debug //document.write("</textarea>");
//get cookied code end


http://click.exacttarget.com/conversion.aspx?xml=
<system><system_name>tracking</system_name>
<action>conversion</action>
<member_id>MemberID</member_id>
<job_id>JobID</job_id>
<sub_id>SubscriberID</sub_id>
<email></email>
<list>ListID</list>
<BatchID>BatchID</BatchID>
<original_link_id>UrlID</original_link_id>
<conversion_link_id>1</conversion_link_id>
<link_alias>My Link Name</link_alias>
<display_order>1</display_order>
<data_set><data amt="1" unit="Downloads" accumulate="true" /></data_set>
</system>

<system><system_name>tracking</system_name>
  <action>conversion</action>
  <member_id>MemberID</member_id>
  <job_id>JobID</job_id>
  <sub_id>SubscriberID</sub_id>
  <email></email>
  <list>ListID</list>
  <BatchID>BatchID</BatchID>
  <original_link_id>UrlID</original_link_id>
  <conversion_link_id>1</conversion_link_id>
  <link_alias>My Link Name</link_alias>
  <display_order>1</display_order>
  <data_set><data amt="1" unit="Downloads" accumulate="true" /></data_set>
</system>

function SetCookie(cookieName, cookieValue, nDays) {
   var today = new Date();
   var expire = new Date();
   if (nDays == null || nDays == 0) nDays = 1;
   expire.setTime(today.getTime() + 3600000 * 24 * nDays);
   document.cookie = cookieName + "=" + encodeURIComponent(cookieValue) + "; expires=" +
   expire.toGMTString() + "; path=/";
}
function getCookie(cookiename) {
  if (document.cookie.length > 0) {
    startC = document.cookie.indexOf(cookiename + "=");
    if (startC != -1) {
      startC += cookiename.length + 1;
      endC = document.cookie.indexOf(";", startC);
      if (endC == -1) endC = document.cookie.length;
      return decodeURIComponent(document.cookie.substring(startC, endC));
    }
  }
  return null;
}
function conversionTrack() {
  try {
    var convid = "1";
    var displayorder = "1";
    var linkalias = "My Link Name";
    var dataset = "<data amt=\"1\" unit=\"Downloads\" accumulate=\"true\" />";
    var jobid = getCookie("JobID");
    var emailaddr = getCookie("EmailAddr_");
    var subid = getCookie("SubscriberID");
    var listid = getCookie("ListID");
    var batchid = getCookie("BatchID");
    var urlid = getCookie("UrlID");
    var memberid = getCookie("MemberID");
    var requestURL = "http://click.exacttarget.com/conversion.aspx?xml=<system><system_name>tracking</system_name><action>conversion</action>"
    requestURL += "<member_id>" + memberid + "</member_id>"
    requestURL += "<job_id>" + jobid + "</job_id>"
    if (subid == undefined) {
      requestURL += "<sub_id></sub_id>"
    } else {
      requestURL += "<sub_id>" + subid + "</sub_id>"
      emailaddr = undefined;
    }
    if (emailaddr == undefined) {
      requestURL += "<email></email>"
    } else {
      requestURL += "<email>" + emailaddr + "</email>"
    }
    requestURL += "<list>" + listid + "</list>";
    requestURL += "<BatchID>" + batchid + "</BatchID>";
    requestURL += "<original_link_id>" + urlid + "</original_link_id>";
    requestURL += "<conversion_link_id>" + convid + "</conversion_link_id>";
    requestURL += "<link_alias>" + linkalias + "</link_alias>";
    requestURL += "<display_order>" + displayorder + "</display_order>";
    requestURL += "<data_set>" + dataset + "</data_set>";
    requestURL += "</system>";

    var img = document.createElement("IMG");
    img.setAttribute("src", requestURL);
    img.setAttribute("width", "1");
    img.setAttribute("height", "1");
    img.setAttribute("style", "display:none");
    document.body.appendChild(img);
  }
  catch(err) {
  }
}
conversionTrack()
