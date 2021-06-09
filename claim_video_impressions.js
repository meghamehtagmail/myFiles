if(window.location.pathname == "/claims-and-accounts/summary" || window.location.pathname == "/claims-and-accounts/claims"){
  function waitForVideoLinkToDisplay(selector, time) {
    if(document.querySelector(selector)!=null) {
      if(document.querySelectorAll(".icon-video-play").length != 0){
        pageDataLayer["videoContent"] = {"videoName": "claim video"}
        var videoLinkArray = [].slice.call(document.querySelectorAll(".icon-video-play"));
        if (videoLinkArray.length > 1){
          var halfVideoLinkArray = Math.ceil(videoLinkArray.length / 2);
          var videoLinks = videoLinkArray.splice(0,halfVideoLinkArray);
          for (var i = 0; i < videoLinks.length; i++) {
            _satellite.track('trackVideoImpression');
          }
        }
        else {
          var videoLinks = videoLinkArray
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


if(window.location.pathname == "/claims-and-accounts/summary" || window.location.pathname == "/claims-and-accounts/claims"){
  try {
      if (window.location.pathname.indexOf('summary') > -1){
        var videoPageName = 'summary';
      }else if (window.location.pathname.indexOf('claims') > -1){
        var videoPageName = 'claims';
      }else{
        var videoPageName = '';
      }
      function waitForVideoLinkToDisplay(selector, time) {
        if(document.querySelector(selector)!=null) {
          if(document.querySelectorAll(selector).length != 0){
            pageDataLayer["videoContent"] = {"videoName": "claim video", "videoPageName" : videoPageName}
            var videoLinkArray = [].slice.call(document.querySelectorAll(selector));
            if (videoLinkArray.length > 1){
              var halfVideoLinkArray = Math.ceil(videoLinkArray.length / 2);
              var videoLinks = videoLinkArray.splice(0,halfVideoLinkArray);
              for (var i = 0; i < videoLinks.length; i++) {
                _satellite.track('trackVideoImpression');
              }
            }
            else {
              var videoLinks = videoLinkArray
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
      waitForVideoLinkToDisplay("[data-track-id='claim-video']", 500)
    }
    catch(err) {}
}
