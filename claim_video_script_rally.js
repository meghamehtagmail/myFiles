if(typeof s !== 'undefined'){
	s.linkTrackVars = "None";
	s.linkTrackEvents="None";
  s.clearVars();
}
window.publishPostVideoData = function(name, obj) {
	for (var attrname in obj) {
		if (obj.hasOwnProperty(attrname)) {
			pageDataLayer[attrname] = obj[attrname];
		}
	}
  _satellite.track(name);
};

function playerLoaded(selector, time) {
  if(document.querySelector(selector)!=null) {
		var myPlayer = document.getElementById('sskyplayer');
		var pathArray = window.location.pathname.replace(/^\/|\/$/g, ''); //remove font%back slashes
		var page_name = pathArray.split('/')
		var secondIndexName  = page_name[1].toLowerCase();
		var videoNameStatic = "claim video";

		/**ssky events code start **/
		myPlayer.addEventListener('playStart', function(event) {
			window.publishPostVideoData('trackVideoName', {
				"videoContent": {
		       "videoPageName": secondIndexName,
		       "videoFullPageName": s.pageName,
		       "videoName": videoNameStatic
		     }
		   });
		});

		myPlayer.addEventListener('Video Played', function(event) {
		  var videoLength = event.detail.value;
		  window.publishPostVideoData('trackVideoLength', {
		    "videoContent": {
		      "videoName": videoNameStatic,
		      "videoTotalLength":videoLength
		    }
		  });
		});

		myPlayer.addEventListener('progress', function(eventDetails) {
			var position = eventDetails.detail.position;
			videoProgr = position;
			if ( position =="0.25" || position == "0.50"|| position == "0.75"||  position == "1"){
				window.publishPostVideoData('trackVideoProgress', {
					"videoContent": {
						"videoName": videoNameStatic,
						"videoProgress": position
					}
				});
			}
		});

		var sceneName= "";
		var sceneIndex ="";
		myPlayer.addEventListener('scene', function(eventDetails){
			sceneName = eventDetails.detail.scene.name;
			sceneIndex = eventDetails.detail.scene.index;
			var number = parseInt(sceneIndex);
			var index = number+1;
			window.publishPostVideoData('trackVideoScene', {
				"videoContent": {
					"videoName": videoNameStatic,
					"videoSceneName": 'scene'+index + ':' + sceneName
				}
			});
		});

		myPlayer.addEventListener('userAction', function(eventDetails) {
		  var action = eventDetails.detail.action;
		  var value = eventDetails.detail.value;
		  if(action == "mute" && value == true){
		      window.publishPostVideoData('trackAudio', {
		        "videoContent": {
		          "videoName": videoNameStatic,
		          "audio":"mute"
		        }
		      });
		    }
		    if(action == "mute" && value == false){
		      window.publishPostVideoData('trackAudio', {
		        "videoContent": {
		          "videoName": videoNameStatic,
		          "audio":"unmute"
		        }
		      });
		    }
		});

		setTimeout(function() {
			myPlayer.addEventListener('ctaShow', function(eventDetails) {
				var scene = eventDetails.detail.scene;
				var ctaSpec = eventDetails.detail.ctaSpec
				var caption = ctaSpec.map(function(a){
					return a.caption;
				});
				var number = parseInt(sceneIndex);
				var index = number+1;
				var ctaList = (caption != undefined) ?  caption.join('|') : '';
				window.publishPostVideoData('trackVideoCta', {
					"videoContent": {
						"videoName": videoNameStatic,
						"videoCtaList": ctaList,
						"videoSceneName": 'scene'+index + ':' + sceneName
					}
				});
			});
		}, 600);

		myPlayer.addEventListener('ctaClicked', function(eventDetails) {
			 var url = eventDetails.detail.url;
			 var name = eventDetails.detail.name;
			 var number = parseInt(sceneIndex);
			 var index = number+1;
			 window.publishPostVideoData('trackVideoCta', {
				 "videoContent": {
					 "videoName": videoNameStatic,
		       "videoCtaUrl": url,
		       "videoSceneName": 'scene'+index + ':' + sceneName,
		       "videoCtaName": name
				 }
			 });
		 });
	 myPlayer.addEventListener('error', function(eventDetails) {
		 var errorCode = eventDetails.detail.errorCode;
		 var errorMessage = eventDetails.detail.errorMessage;
		 var number = parseInt(sceneIndex);
		 var index = number+1;
		  window.publishPostVideoData('trackVideoError', {
		    "videoContent": {
			    "videoName": videoNameStatic,
			    "videoErrorCode": errorCode,
			    "videoErrorMessage": errorMessage,
			    "videoSceneName": 'scene'+index + ':' + sceneName
				}
			});
		});
		/**ssky events code end **/
    return;
  }
  else {
    setTimeout(function() {
        playerLoaded(selector, time);
    }, time);
  }
}
playerLoaded('#sskyplayer', 500)
