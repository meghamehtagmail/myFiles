
if(document.querySelectorAll(".icon-video-play").length != 0){
  var videoLinkArray = [].slice.call(document.querySelectorAll(".icon-video-play"));
  if (videoLinkArray.length > 1){
    var halfVideoLinkArray = Math.ceil(videoLinkArray.length / 2);
    var videoLinks = videoLinkArray.splice(0,halfVideoLinkArray);
  }
  else {
    var videoLinks = videoLinkArray
  }
}
if(window.location.pathname == "/claims-and-accounts/summary" || window.location.pathname == "/claims-and-accounts/claims"){
  function waitForVideoLinkToDisplay(selector, time) {
    if(document.querySelector(selector)!=null) {
      if(document.querySelectorAll(".icon-video-play").length != 0){
        pageDataLayer["videoContent"] = {"videoName": "claim video"}
        var videoLinkArray = [].slice.call(document.querySelectorAll(".icon-video-play"));
        if (videoLinkArray.length > 1){
          var halfVideoLinkArray = Math.ceil(videoLinkArray.length / 2);
          var videoLinks = videoLinkArray.splice(0,halfVideoLinkArray);
          console.log('****video Link 1***', videoLinks);
          for (var i = 0; i < videoLinks.length; i++) {
            _satellite.track('trackVideoImpression');
          }
        }
        else {
          var videoLinks = videoLinkArray
          console.log('****video Link 2***', videoLinks);
          _satellite.track('trackVideoImpression');
        }
      }
      return;
    }
    else {
      setTimeout(function() {
        waitForVideoLinkToDisplay(selector, time);
      }, time);
    }
  }
  waitForVideoLinkToDisplay('.icon-video-play', 500)
}
