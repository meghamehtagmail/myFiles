/*external link logic*/

var clickDomain = _satellite.getVar('Click Domain');
var clickHostname = _satellite.getVar('Click Hostname');
var hostName = _satellite.getVar('Hostname');
var domainArr = ["uhc.com", "myuhc.com"]

if(clickHostname != hostName && domainArr.indexOf(clickDomain) == -1){
  return true;
}

/*accordian logic*/
var clickType = _satellite.getVar('Click Type');
console.log("Click Type:", clickType);

if(clickType=="accordionopen")
{console.log("Inside accordion click");
  return true;

}


/*Page view call custom code*/

var clickLocationPageCall=localStorage.getItem('set2');
var pagename=localStorage.getItem('set3');

var linkName = s.getPreviousLinkName("get");
//var x=['top','bottom','dropdown']
//var x=localStorage.getItem('set1');
 s.prop40=s.eVar40=linkName;
if(s.prop40){
  //console.log("Intenal link cookie fired");
  s.events='event62';
  s.prop20=clickLocationPageCall;
  s.prop24=pagename;
  if(clickLocationPageCall.indexOf("top")>-1||clickLocationPageCall.indexOf("bottom")>-1||clickLocationPageCall.indexOf("dropdown")>-1)
{
  s.prop69=linkName;
}

}

var atViewStart = new CustomEvent('atViewStart', {
       'detail':{
             'viewName':'consumermyuhc:dashboard',
             'viewCount':true //optional on page load
        }
});
document.body.dispatchEvent(atViewStart);
1. browse issue
2. Reference: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

var event = document.createEvent('customEvent')
event.initCustomEvent('atViewStart',true,true, {
        'viewName':'consumermyuhc:dashboard',
        'viewCount':true //optional on page load
 });
 document.body.dispatchEvent(event);

 1. Support in IE 11
 2. initCustomEvent is deprecated
